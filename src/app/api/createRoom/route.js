import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/firebaseConn";

// Función para generar un número aleatorio único como roomId
function generarNumeroAleatorio() {
    return (Math.floor(Math.random() * 90000) + 10000).toString();
}

async function isRoomIdUnique(roomId) {
    const snapshot = await firestoreDB.collection("rooms").doc(roomId).get();
    return !snapshot.exists;
}

export async function POST(request) {
    let roomId;
    let isUnique = false;

    while (!isUnique) {
        roomId = generarNumeroAleatorio();
        isUnique = await isRoomIdUnique(roomId);
    }

    const body = await request.json();
    const { email, problem, options, expires } = body;

    const newRoom = {
        createdBy: email,
        problem,
        expires,
        options,
        participants: [],
        expired: false,
        notified: false,
        roomId,
    };

    await firestoreDB.collection("rooms").doc(roomId).set(newRoom);

    return NextResponse.json({
        shareCode: roomId,
    });
}
