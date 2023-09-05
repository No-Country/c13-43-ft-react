import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/firebaseConn";
//Endpoint para acceder a una sala
//
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const roomId = searchParams.get("roomId");
  const roomRef = await firestoreDB.collection("rooms").doc(roomId).get();
  const roomExists = roomRef.exists;
  if (roomExists) {
    const roomData = roomRef.data();
    return NextResponse.json({ roomData });
  } else {
    return NextResponse.json({ message: "Room Not Found" });
  }
}
