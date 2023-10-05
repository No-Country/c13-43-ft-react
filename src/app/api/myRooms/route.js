// Descripción: Este archivo contiene un endpoint que permite obtener una lista combinada de las salas creadas por un usuario
// y las salas en las que el usuario ha participado en la aplicación.

// Funcionamiento: El endpoint recibe una solicitud POST con la dirección de correo electrónico del usuario en el cuerpo
// de la solicitud. Luego, realiza dos consultas en la base de datos de Firestore: una para obtener las salas creadas
// por el usuario y otra para obtener las salas en las que el usuario ha participado. Luego, combina los resultados de ambas
// consultas en un solo array y devuelve la lista combinada de salas. Si se produce algún error durante el proceso, 
// el endpoint devuelve un mensaje de error.

import { firestoreDB } from "@/lib/firebaseConn";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // const { searchParams } = new URL(request.url);
        // const userEmail = searchParams.get("userEmail");
        const body = await request.json();
        const { userEmail } = body;
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

            combinedRooms.push(roomData);
        });

        return NextResponse.json({ combinedRooms });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error });
    }
}
