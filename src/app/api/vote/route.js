// Descripción: Este endpoint permite a un usuario votar por una opción en una sala específica. La sala debe estar activa, 
// no haber expirado y el usuario no debe haber votado previamente.

// Funcionamiento: El endpoint recibe una solicitud con la información necesaria para registrar el voto. Realiza diversas 
// validaciones, si todas las validaciones son exitosas, el endpoint actualiza la base de datos con el voto del usuario, 
// incrementando el contador de votos para la opción elegida y agregando al usuario a la lista de participantes. Luego, 
// responde con un mensaje de confirmación indicando que el voto se ha registrado con éxito.

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
