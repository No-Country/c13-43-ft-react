import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/firebaseConn";
export async function GET(request, { params }) {
  const userId = params.id;
  const userData = (
    await firestoreDB.collection("users").doc(userId).get()
  ).data();
  return NextResponse.json({ userId, userData });
}

//bcryp para que front hashee la password
//cloudinary // back... urls mas lindas
