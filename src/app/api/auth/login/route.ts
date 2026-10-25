import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyPassword, signSessionToken, AUTH_COOKIE_NAME } from "@/lib/auth";

export const DEMO_ACCOUNTS = [
  {
    id: "demo-teen-1",
    email: "teen.alex@example.com",
    password: "SafeTeen2026!",
    role: "TEEN" as const,
    name: "Alex Rivera",
    teenProfile: {
      id: "demo-profile-1",
      userId: "demo-teen-1",
      ageGroup: "15-16",
      safetyScore: 78,
      streakDays: 4,
      lastActiveAt: new Date(),
    },
  },
  {
    id: "demo-parent-1",
    email: "parent.smith@example.com",
    password: "SafeParent2026!",
    role: "PARENT" as const,
    name: "Sarah Rivera",
    teenProfile: undefined,
  },
  {
    id: "demo-admin-1",
    email: "admin.safety@example.com",
    password: "SafeAdmin2026!",
    role: "ADMIN" as const,
    name: "Dr. Evelyn Vance (Counselor)",
    teenProfile: undefined,
  },
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();

    // 1. Check built-in demo credentials for immediate out-of-the-box evaluation
    const demoUser = DEMO_ACCOUNTS.find((d) => d.email.toLowerCase() === cleanEmail);
    if (demoUser) {
      if (password === demoUser.password) {
        const token = await signSessionToken({
          userId: demoUser.id,
          email: demoUser.email,
          role: demoUser.role,
          name: demoUser.name,
        });

        const response = NextResponse.json({
          message: "Login successful (Demo Mode).",
          user: {
            id: demoUser.id,
            name: demoUser.name,
            email: demoUser.email,
            role: demoUser.role,
            teenProfile: demoUser.teenProfile,
          },
        });

        response.cookies.set(AUTH_COOKIE_NAME, token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        });

        return response;
      } else {
        return NextResponse.json(
          { error: "Invalid password for demo account. Password is: " + demoUser.password },
          { status: 401 }
        );
      }
    }

    // 2. Database lookup with Prisma
    let user = null;
    try {
      user = await prisma.user.findUnique({
        where: { email: cleanEmail },
        include: { teenProfile: true },
      });
    } catch (dbErr) {
      console.warn("Database connection unavailable, checking demo fallback:", dbErr);
      return NextResponse.json(
        {
          error:
            "Database is not connected yet. Please use the demo accounts: teen.alex@example.com / SafeTeen2026! or parent.smith@example.com / SafeParent2026!",
        },
        { status: 503 }
      );
    }

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const isMatch = await verifyPassword(password, user.passwordHash);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Update lastActiveAt if teen
    if (user.teenProfile) {
      try {
        await prisma.teenProfile.update({
          where: { id: user.teenProfile.id },
          data: { lastActiveAt: new Date() },
        });
      } catch {
        // Non-blocking
      }
    }

    const token = await signSessionToken({
      userId: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    });

    const response = NextResponse.json({
      message: "Login successful.",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        teenProfile: user.teenProfile,
      },
    });

    response.cookies.set(AUTH_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error during login." },
      { status: 500 }
    );
  }
}
