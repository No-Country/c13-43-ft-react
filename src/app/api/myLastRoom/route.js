import { firestoreDB } from "@/lib/firebaseConn";
import { NextResponse } from "next/server";
import { root } from "postcss";

// Función para comparar fechas
function compararFechas(fecha1, fecha2) {
    var date1 = new Date(fecha1);
    var date2 = new Date(fecha2);
    return date1 > date2;
}

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const userEmail = searchParams.get("userEmail");
        // Consulta para obtener las salas creadas por el usuario
        const createdRoomsQuery = await firestoreDB
            .collection("rooms")
            .where("createdBy", "==", userEmail)
            .where("expired", "==", true)
            .get();

        // Obtener la fecha actual
        const now = new Date(Date.now()).toISOString();

        // Inicializar la última sala vencida como null
        let lastExpiredRoom;

        // Iterar sobre los resultados
        createdRoomsQuery.forEach((doc) => {
            const roomData = doc.data();

            // Verificar si la sala ha vencido utilizando la función compararFechas
            if (compararFechas(now, roomData.expires)) {
                lastExpiredRoom = roomData;
            }
        });

        return NextResponse.json({ lastExpiredRoom });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error });
    }
}
