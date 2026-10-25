import { NextResponse } from "next/server";
import { getCurrentSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DEMO_ACCOUNTS } from "../login/route";

export async function GET() {
  try {
    const session = await getCurrentSession();

    if (!session) {
      return NextResponse.json({ authenticated: false, user: null }, { status: 401 });
    }

    // Check if session belongs to demo account
    const demo = DEMO_ACCOUNTS.find((d) => d.id === session.userId || d.email === session.email);
    if (demo) {
      return NextResponse.json({
        authenticated: true,
        user: {
          id: demo.id,
          name: demo.name,
          email: demo.email,
          role: demo.role,
          teenProfile: demo.teenProfile,
        },
      });
    }

    // Try finding in database
    try {
      const user = await prisma.user.findUnique({
        where: { id: session.userId },
        include: { teenProfile: true },
      });

      if (user) {
        return NextResponse.json({
          authenticated: true,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            teenProfile: user.teenProfile,
          },
        });
      }
    } catch {
      // If DB is offline, fall back to session token data
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        id: session.userId,
        name: session.name,
        email: session.email,
        role: session.role,
      },
    });
  } catch (error) {
    console.error("Auth check error:", error);
    return NextResponse.json({ error: "Failed to verify session" }, { status: 500 });
  }
}
