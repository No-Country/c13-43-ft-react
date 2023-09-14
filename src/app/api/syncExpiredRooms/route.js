// Descripción: Este endpoint se utiliza para notificar a los creadores y participantes de las salas que han expirado y 
// aún no han recibido votos. El objetivo es asegurarse de que todos los interesados sean conscientes de la expiración de 
// la sala.

// Funcionamiento: El endpoint comienza realizando una consulta a la colección "rooms" en Firestore para obtener todas 
// las salas existentes. Luego, itera a través de cada sala y verifica varias condiciones
// Finalmente, el endpoint devuelve una respuesta JSON que contiene la lista de salas que han sido notificadas y 
// marcadas como vencidas. Esto permite al cliente conocer las salas afectadas por esta notificación.

import { firestoreDB } from "@/lib/firebaseConn";
import { NextResponse } from "next/server";
import sgMail from "@/lib/SendgridConn";
import { compararFechas, createNotificationMessage } from "@/lib/Tools";

//si no vota nadie, de todos modos hay que notificar al creador
export async function PUT(request) {
    try {
        const now = Date.now();
        const roomQuerySnapshot = await firestoreDB.collection("rooms").get();
        const expiredRooms = [];

        for (const doc of roomQuerySnapshot.docs) {
            const roomData = doc.data();
            const roomId = doc.id;

            // Verificar si existe el campo "notified" en la sala
            if (
                typeof roomData.notified === "boolean" &&
                compararFechas(now, roomData.expires) &&
                !roomData.notified
            ) {
                expiredRooms.push({ roomId, roomData });

                const creator = roomData.createdBy;
                const participants = roomData.participants.concat(creator);

                for (const participant of participants) {
                    await sgMail.send(
                        createNotificationMessage(participant, roomId)
                    );
                }

                // Marcar la sala como notificada y vencida
                await firestoreDB.collection("rooms").doc(roomId).update({
                    notified: true,
                    expired: true,
                });
            }
        }

        return NextResponse.json({ expiredRooms });
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return NextResponse.error("Error al procesar la solicitud");
    }
}
