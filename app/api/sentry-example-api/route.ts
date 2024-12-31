import * as Sentry from '@sentry/nextjs';
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET() {
  try {
    throw new Error("Sentry Example API Route Error");
  } catch (error) {
    // Capture the exception with Sentry
    Sentry.captureException(error);
    
    // Return a response indicating an error occurred
    return NextResponse.json({ error: "An error occurred, but we're monitoring it!" });
  }
}
