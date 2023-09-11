import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/firebaseConn";

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id"); // Cambio necesario aquí --> ATENCION: No se está borrando el usuario (Parece que aquí es con ID y en APIcalls es con el correo)
  const userDeleted = await firestoreDB.collection("users").doc(id).delete();
  return NextResponse.json({ id, userDeleted });
}
