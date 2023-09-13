import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/firebaseConn";
import { compararFechas } from "@/lib/Tools";

export async function PUT(request) {
    try {
        const body = await request.json();
        const { optionId, roomId, email } = body;

        const roomRef = firestoreDB.collection("rooms").doc(roomId);
        const roomSnapshot = await roomRef.get();
        const currentRoomData = roomSnapshot.data();

        if (!currentRoomData) {
            return NextResponse.json(
                { voted: false, message: "La sala no existe" },
                { status: 404 }
            );
        }

        const { createdBy, options, participants, expires } = currentRoomData;
        const currentOption = options && options[optionId];

        const currentTime = Date.now();
        const expiresAt = expires;

        if (!currentOption) {
            return NextResponse.json(
                { voted: false, message: "La opción no existe" },
                { status: 404 }
            );
        }

        if (email === createdBy) {
            return NextResponse.json(
                { voted: false, message: "No puedes votar en tu propia sala" },
                { status: 400 }
            );
        }

        if (compararFechas(currentTime, expiresAt)) {
            return NextResponse.json(
                { voted: false, message: "La sala ha expirado" },
                { status: 400 }
            );
        }

        if (participants.includes(email)) {
            return NextResponse.json(
                { voted: false, message: "Ya realizaste tu voto" },
                { status: 400 }
            );
        }

        const updatedTimesVoted = currentOption.timesVoted + 1;
        const updatedParticipants = [...participants, email];

        await roomRef.update({
            [`options.${optionId}.timesVoted`]: updatedTimesVoted,
            participants: updatedParticipants,
        });

        return NextResponse.json({ voted: true }, { status: 200 });
    } catch (error) {
        console.error("Error en la solicitud PUT:", error);
        return NextResponse.error(error);
    }
}
