import { firestoreDB } from "@/lib/firebaseConn";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const userEmail = searchParams.get("userEmail");

        // Consulta para obtener salas creadas por el usuario
        const createdRoomsQuery = await firestoreDB
            .collection("rooms")
            .where("createdBy", "==", userEmail)
            .get();

        // Consulta para obtener salas en las que el usuario ha participado
        const participatedRoomsQuery = await firestoreDB
            .collection("rooms")
            .where("participants", "array-contains", userEmail)
            .get();

        // Combinar resultados de ambas consultas en un solo array
        const combinedRooms = [];

        createdRoomsQuery.forEach((doc) => {
            combinedRooms.push(doc.data());
        });

        participatedRoomsQuery.forEach((doc) => {
            const roomData = doc.data();
            // Verificar si la sala ya se encuentra en el array para evitar duplicados
            if (!combinedRooms.some((room) => room.id === roomData.id)) {
                combinedRooms.push(roomData);
            }
        });

        return NextResponse.json({ combinedRooms });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error });
    }
}
