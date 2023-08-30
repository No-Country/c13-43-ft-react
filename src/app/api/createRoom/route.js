import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/firebaseConn";

let options = [
  {
    description: "porque tengo franco",
    timesVoted: 0,
    title: "jueves",
    votedBy: [],
  },
  {
    description: "porque bassbs",
    timesVoted: 0,
    title: "viernes",
    votedBy: [],
  },
  {
    description: "porque basdsadasdasd",
    timesVoted: 0,
    title: "sabado",
    votedBy: [],
  },
];
export async function POST(request) {
  const body = await request.json();
  const { createdBy, problem, roomId, options } = body;
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
