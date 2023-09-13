import { firestoreDB } from "@/lib/firebaseConn";
import { NextResponse } from "next/server";
import { compararFechas } from "@/lib/Tools";

// Endpoint que trae los datos de la última sala vencida
export async function POST(request) {
    try {
        // const { searchParams } = new URL(request.url);
        // const userEmail = searchParams.get("userEmail");
        const body = await request.json();
        const { userEmail } = body;
        // Consulta para verificar si el usuario ha creado salas
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
            const resultsWithPercentage = resultsData.map((option) => ({
                ...option,
                percentage: (option.timesVoted / totalParticipants) * 100,
            }));

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
