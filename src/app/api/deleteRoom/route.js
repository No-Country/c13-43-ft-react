import { NextResponse } from "next/server";

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const roomId = searchParams.get("roomId"); // Cambio necesario aquí
  return NextResponse.json({ roomId, deleted: true });
}
