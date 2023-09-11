import { firestoreDB } from "@/lib/firebaseConn";
import { NextResponse } from "next/server";
import { compararFechas } from "@/lib/Tools";

// endpoint que trae los datos de mi ultima sala vencida
export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const userEmail = searchParams.get("userEmail");

        // Consulta para obtener todas las salas creadas por el usuario
        const createdRoomsQuery = await firestoreDB
            .collection("rooms")
            .where("createdBy", "==", userEmail)
            .get();

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

        if (last !== null) {
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
