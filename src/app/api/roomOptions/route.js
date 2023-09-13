import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/firebaseConn";
export async function GET(request) {
    let winnerOptionID = 123323;
    return NextResponse.json({ winnerOptionID });
}
