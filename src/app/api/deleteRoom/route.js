import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/firebaseConn";

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const roomId = searchParams.get("roomId"); // Cambio necesario aquí
  const deletedRoom = await firestoreDB
    .collection("rooms")
    .doc(roomId)
    .delete();
  return NextResponse.json({ roomId, deletedRoom });
}
