import { NextResponse } from "next/server";
export async function POST(request) {
  const body = await request.json();
  const { userId } = body;
  console.log(userId);
  return NextResponse.json({ roomCreated: true, roomId: 1234, userId });
}
