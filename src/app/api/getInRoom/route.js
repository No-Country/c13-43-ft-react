import { NextResponse } from "next/server";
//Endpoint para acceder a una sala
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const roomId = searchParams.get("roomId");
  return NextResponse.json({ roomId });
}
