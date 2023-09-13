import { firestoreDB } from "@/lib/firebaseConn";
import { NextResponse } from "next/server";

// Endpoint que trae los datos de la última sala vencida
export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const roomId = searchParams.get("roomId");

        // Consulta para obtener la sala por su ID
        const roomQuery = await firestoreDB
            .collection("rooms")
            .doc(roomId)
            .get();

        if (!roomQuery.exists) {
            // Si la sala no existe, devolver un mensaje
            return NextResponse.json({ message: "La sala no existe" });
        }

        const roomData = roomQuery.data();

        if (!roomData.expired) {
            // Si la sala no ha expirado, devolver un mensaje
            return NextResponse.json({ message: "La sala no ha expirado" });
        }

        // Calcular los porcentajes de votos en cada opción y redondear a números enteros con Math.floor
        const resultsData = Object.values(roomData.options);
        const totalParticipants = roomData.participants.length;
        const resultsWithPercentage = resultsData.map((option) => ({
            ...option,
            percentage: Math.floor(
                (option.timesVoted / totalParticipants) * 100
            ),
            totalParticipants,
        }));

        return NextResponse.json(resultsWithPercentage);
    } catch (error) {
        console.error("Error al obtener datos de Firestore:", error);
        return NextResponse.error("Error al obtener datos de Firestore");
    }
}
