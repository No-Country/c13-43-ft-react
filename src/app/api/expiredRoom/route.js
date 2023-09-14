// Descripción: Este archivo contiene un endpoint que verifica el estado de una sala en la aplicación, indicando si la sala 
// está activa o ha expirado.

// Funcionamiento: Este endpoint espera recibir el identificador único de una sala en el cuerpo de una solicitud POST. 
// Luego, verifica el estado de la sala en la base de datos y responde con un mensaje que indica si la sala está activa
// o ha expirado. Si la sala no existe, se considera que ha expirado.

import { firestoreDB } from "@/lib/firebaseConn";
import { NextResponse } from "next/server";

// Endpoint que tiene como finalidad comprobar el estado de una sala.
// Sera util a la hora de intentar ingresar a una sala

export async function POST(request) {
    try {
        // const { searchParams } = new URL(request.url);
        // const roomId = searchParams.get("roomId");
        const body = await request.json();
        const { roomId } = body;
        const roomDoc = await firestoreDB.collection("rooms").doc(roomId).get();

        if (roomDoc.exists) {
            const roomData = roomDoc.data();
            if (roomData.expired === true) {
                return NextResponse.json({ expired: true });
            } else {
                return NextResponse.json({ expired: false });
            }
        } else {
            // Si no se encuentra la sala con el ID dado
            return NextResponse.json({ expired: true });
        }
    } catch (error) {
        console.error("Error al obtener datos de Firestore:", error);
        return NextResponse.error("Error al obtener datos de Firestore");
    }
}
