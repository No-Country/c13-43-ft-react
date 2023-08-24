import { NextResponse } from "next/server";
//Endpoint para desloguear un usuario
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  return NextResponse.json({ userUnloged: id });
}
