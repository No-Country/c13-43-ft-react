import { firestoreDB } from "@/lib/firebaseConn";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        // Recibir la ID de la sala
        const { searchParams } = new URL(request.url);
        const roomId = searchParams.get("roomId");

        // Obtener el documento de la sala
        const roomDoc = await firestoreDB.collection("rooms").doc(roomId).get();

        // Verificar si el campo "expired" está en true
        if (roomDoc.exists) {
            const roomData = roomDoc.data();
            if (roomData.expired === true) {
                // Extraer los resultados de las opciones y los votos
                const resultsData = Object.values(roomData.options);

                // Obtener la cantidad total de participantes
                const totalParticipants = roomData.participants.length;

                // Calcular el porcentaje de votos en cada opción
                const resultsWithPercentage = resultsData.map((option) => ({
                    ...option,
                    percentage: (option.timesVoted / totalParticipants) * 100,
                }));

                return NextResponse.json({
                    resultsWithPercentage,
                    totalParticipants,
                });
            } else {
                // Si el campo "expired" no está en true, devolver un mensaje
                return NextResponse.json({ message: "La sala no ha expirado" });
            }
        } else {
            // Si no se encuentra la sala con el ID dado
            return NextResponse.json({ message: "Sala no encontrada" });
        }
    } catch (error) {
        console.error("Error al obtener datos de Firestore:", error);
        return NextResponse.error("Error al obtener datos de Firestore");
    }
}
