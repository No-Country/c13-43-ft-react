import { NextResponse } from "next/server";

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id"); // Cambio necesario aquí
  return NextResponse.json({ id });
}
