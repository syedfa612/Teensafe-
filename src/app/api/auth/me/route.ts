import { NextResponse } from "next/server";
import { getCurrentUserWithProfile } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getCurrentUserWithProfile();

    if (!user) {
      return NextResponse.json({ authenticated: false, user: null }, { status: 401 });
    }

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
  } catch (error) {
    console.error("Auth check error:", error);
    return NextResponse.json({ error: "Failed to verify session" }, { status: 500 });
  }
}
