// Descripción: Este archivo contiene un endpoint que permite obtener información sobre la última sala vencida creada por 
// un usuario en la aplicación.

// Funcionamiento: El endpoint recibe una solicitud POST con el correo electrónico del usuario en el cuerpo de la solicitud.
// Luego, realiza una consulta en la base de datos para encontrar las salas creadas por ese usuario. Si el usuario ha creado
// salas, el endpoint busca la última sala vencida entre las que ha creado y proporciona información sobre ella. 
// Esta información se utiliza para presentar estadísticas sobre la sala vencida más reciente del usuario, como las opciones
// más votadas y el número total de participantes. Si el usuario no tiene salas vencidas, se devuelve un mensaje indicando
// que no hay salas vencidas creadas por el usuario.

import { firestoreDB } from "@/lib/firebaseConn";
import { NextResponse } from "next/server";
import { compararFechas } from "@/lib/Tools";

export async function POST(request) {
    try {
        const body = await request.json();
        const { userEmail } = body;

        const createdRoomsQuery = await firestoreDB
            .collection("rooms")
            .where("createdBy", "==", userEmail)
            .get();

        if (createdRoomsQuery.empty) {
            // Si el usuario no ha creado salas, devolver un mensaje
            return NextResponse.json({
                message: "El usuario no ha creado ninguna sala aún",
            });
        }

        // Obtener la fecha actual
        const now = new Date(Date.now()).toISOString();

        // Inicializar la última sala vencida como null
        let expiredRooms = [];
        let lastExpiredRoom;

        // Iterar sobre los resultados y encontrar la última sala vencida
        createdRoomsQuery.forEach((doc) => {
            const roomData = doc.data();

            // Verificar si la sala ha vencido
            if (roomData.expired === true) {
                if (compararFechas(now, roomData.expires)) {
                    expiredRooms.push(roomData);
                }
            }
        });

        lastExpiredRoom = expiredRooms.sort((a, b) => {
            const dateA = new Date(a.expires);
            const dateB = new Date(b.expires);

            return dateA - dateB;
        });

        let last = lastExpiredRoom.at(-1);

        if (last !== undefined) {
            // Extraer los resultados de las opciones y los votos
            const resultsData = Object.values(last.options);

            // Ordenar el array de resultados por la cantidad de votos en orden descendente
            resultsData.sort((a, b) => b.timesVoted - a.timesVoted);

            // Obtener la cantidad total de participantes
            const totalParticipants = last.participants.length;

            // Calcular el porcentaje de votos en cada opción
            const resultsWithPercentage = resultsData.map((option) => {
                if (option.timesVoted === 0) {
                    return {
                        ...option,
                        percentage: 0,
                    };
                } else {
                    return {
                        ...option,
                        percentage:
                            (option.timesVoted / totalParticipants) * 100,
                    };
                }
            });

            // Tomar la opción más votada y la segunda más votada
            const firstOption = resultsData[0];
            const secondOption = resultsData[1];

            return NextResponse.json({
                roomId: last.roomId,
                problem: last.problem,
                firstOption,
                secondOption,
                resultsWithPercentage,
                totalParticipants,
            });
        } else {
            return NextResponse.json({
                message: "No hay salas vencidas creadas por el usuario",
            });
        }
    } catch (error) {
        console.error("Error al obtener datos de Firestore:", error);
        return NextResponse.error("Error al obtener datos de Firestore");
    }
}
