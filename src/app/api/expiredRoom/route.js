import { firestoreDB } from "@/lib/firebaseConn";
import { NextResponse } from "next/server";

// Endpoint que tiene como finalidad comprobar el estado de una sala.
// Sera util a la hora de intentar ingresar a una sala

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const roomId = searchParams.get("roomId");
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
            return NextResponse.json({ expired: false });
        }
    } catch (error) {
        console.error("Error al obtener datos de Firestore:", error);
        return NextResponse.error("Error al obtener datos de Firestore");
    }
}
