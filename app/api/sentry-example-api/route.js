import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// A faulty API route to test error handling
export function GET() {
  // You can still throw the error for testing purposes if you want
  // throw new Error("Test API Route Error");

  return NextResponse.json({ data: "Testing API error..." });
}
