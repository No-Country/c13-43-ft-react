import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/firebaseConn";

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id"); // Cambio necesario aquí
  const userDeleted = await firestoreDB.collection("users").doc(id).delete();
  return NextResponse.json({ id, userDeleted });
}
