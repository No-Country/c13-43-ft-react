import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/firebaseConn";
import { database } from "firebase-admin";

export async function PUT(request) {
  const { searchParams } = new URL(request.url);
  const voterEmail = searchParams.get("voterEmail");
  const optionID = searchParams.get("optionId");
  const roomId = searchParams.get("roomId");
  //const body = await request.json();

  const roomRef = firestoreDB.collection("rooms").doc(roomId);
  const currentRoomData = (await roomRef.get()).data();
  const currentOption = currentRoomData.options[optionID];
  const currentVotedBy = currentOption.votedBy;
  const updatedTimesVoted = currentOption.timesVoted + 1;
  // Realizamos la actualización del campo timesVoted
  await roomRef.update({
    [`options.${optionID}.timesVoted`]: updatedTimesVoted,
  });

  return NextResponse.json(currentVotedBy);
}
