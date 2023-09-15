// Descripción: Este archivo contiene una función que maneja las solicitudes POST relacionadas con la creación de una 
// nueva sala en la aplicación. La función genera un número de sala único y luego crea una nueva entrada de sala en la base de datos con la información proporcionada en la solicitud.

// Funcionamiento: La función comienza generando un número de sala único utilizando la función generarNumeroAleatorio. 
// Luego, verifica si ese número de sala es único en la base de datos utilizando la función isRoomIdUnique. Si el número de
// sala no es único, se generará otro número hasta que se encuentre un número de sala único.

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
