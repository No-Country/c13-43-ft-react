import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/firebaseConn";
//el back tiene que crear una roomID facil, y antes de proceder
//checkear que no exista
let roomId = 123456;
//date-fns
export async function POST(request) {
  const body = await request.json();
  const { createdBy, problem, options } = body;
  const newRoom = {
    roomId,
    createdBy,
    problem,
    options,
  };
  const roomRef = firestoreDB.collection("rooms").doc(newRoom.roomId);
  const createdRoom = await roomRef.set(newRoom);
  return NextResponse.json({
    roomCreated: true,
    createdRoom,
    shareCode: newRoom.roomId,
  });
}
