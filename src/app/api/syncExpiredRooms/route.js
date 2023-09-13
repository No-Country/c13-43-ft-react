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
