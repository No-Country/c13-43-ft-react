import { NextResponse } from "next/server";
export async function GET(request) {
  let winnerOptionID = 123323;
  return NextResponse.json({ winnerOptionID });
}
