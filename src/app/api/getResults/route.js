// Descripción: Este archivo contiene un endpoint que permite obtener información sobre una sala específica en la aplicación.

// Funcionamiento: El endpoint recibe una solicitud POST con el ID de la sala en el cuerpo de la solicitud. Luego, 
// realiza una consulta en la base de datos para obtener los datos de esa sala. Si la sala no existe o no ha expirado, 
// el endpoint devuelve un mensaje correspondiente. En caso contrario, calcula los porcentajes de votos en cada opción
// de la sala y redondea los valores a números enteros utilizando Math.floor. Luego, proporciona esta información junto
//  con el problema de la sala y el número total de participantes en la sala.

import { firestoreDB } from "@/lib/firebaseConn";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // const { searchParams } = new URL(request.url);
        // const roomId = searchParams.get("roomId");
        const body = await request.json();
        const { roomId } = body;

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
        const resultsWithPercentage = resultsData.map((option) => {
            if (option.timesVoted === 0) {
                return {
                    ...option,
                    percentage: 0,
                    totalParticipants,
                };
            } else {
                return {
                    ...option,
                    percentage: Math.floor(
                        (option.timesVoted / totalParticipants) * 100
                    ),
                    totalParticipants,
                };
            }
        });

        return NextResponse.json({
            resultsWithPercentage,
            problem: roomData.problem,
            totalParticipants,
        });
    } catch (error) {
        console.error("Error al obtener datos de Firestore:", error);
        return NextResponse.error("Error al obtener datos de Firestore");
    }
}