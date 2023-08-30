import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/firebaseConn";

export async function PUT(request) {
  const { searchParams } = new URL(request.url);
  const optionID = searchParams.get("optionId");
  const roomId = searchParams.get("roomId");
  const votantEmail = searchParams.get("voterEmail");

  const roomRef = firestoreDB.collection("rooms").doc(roomId);
  const currentRoomData = (await roomRef.get()).data();
  const currentOption = currentRoomData.options[optionID];
  const currentVotedBy = currentOption.votedBy;
  const newVotedByEntry = { voterEmail: votantEmail };

  const updatedTimesVoted = currentOption.timesVoted + 1;
  const updatedVotedBy = [...currentVotedBy, newVotedByEntry];

  await roomRef.update({
    [`options.${optionID}.timesVoted`]: updatedTimesVoted,
    [`options.${optionID}.votedBy`]: updatedVotedBy,
  });

  return NextResponse.json(updatedVotedBy);
}
