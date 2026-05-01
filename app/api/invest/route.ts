import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    raised: 13000,
    goal: 20000,
  });
}

export async function POST() {
  return NextResponse.json({
    raised: 13500,
    goal: 20000,
  });
}