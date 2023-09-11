import { firestoreDB } from "@/lib/firebaseConn";
import { NextResponse } from "next/server";

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
        const currentDate = new Date();

        // Inicializar la última sala vencida como null
        let lastExpiredRoom = null;

        // Iterar sobre los resultados y encontrar la última sala vencida
        createdRoomsQuery.forEach((doc) => {
            const roomData = doc.data();

            // Verificar si la sala ha vencido
            if (roomData.expired === true) {
                const expirationDate = new Date(roomData.expirationDate);
                if (expirationDate < currentDate) {
                    lastExpiredRoom = roomData;
                }
            }
        });

        if (lastExpiredRoom !== null) {
            // Extraer los resultados de las opciones y los votos
            const resultsData = Object.values(lastExpiredRoom.options);

            // Ordenar el array de resultados por la cantidad de votos en orden descendente
            resultsData.sort((a, b) => b.timesVoted - a.timesVoted);

            // Obtener la cantidad total de participantes
            const totalParticipants = lastExpiredRoom.participants.length;

            // Calcular el porcentaje de votos en cada opción
            const resultsWithPercentage = resultsData.map((option) => ({
                ...option,
                percentage: (option.timesVoted / totalParticipants) * 100,
            }));

            // Tomar la opción más votada y la segunda más votada
            const firstOption = resultsData[0];
            const secondOption = resultsData[1];

            return NextResponse.json({
                problem: lastExpiredRoom.problem,
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
