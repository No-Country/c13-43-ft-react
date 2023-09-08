import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/firebaseConn";

export async function PUT(request) {
  const body = await request.json();
  const { optionId, roomId, email } = body;
  const roomRef = firestoreDB.collection("rooms").doc(roomId);
  const currentRoomData = (await roomRef.get()).data();
  const currentOption = currentRoomData.options[optionId];
  const currentVotedBy = currentOption.votedBy;
  const newVotedByEntry = { votant: email };

  const updatedTimesVoted = currentOption.timesVoted + 1;
  const updatedVotedBy = { ...currentVotedBy, newVotedByEntry };

  await roomRef.update({
    [`options.${optionId}.timesVoted`]: updatedTimesVoted,
    [`options.${optionId}.votedBy`]: updatedVotedBy,
  });

  return NextResponse.json({ currentOption });
}
