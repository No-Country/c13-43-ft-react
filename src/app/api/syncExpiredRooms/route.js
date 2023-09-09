import { firestoreDB } from "@/lib/firebaseConn";
import { NextResponse } from "next/server";
import { compararFechas } from "@/lib/Tools";

export async function PUT(request) {
  try {
    const now = new Date(Date.now()).toISOString();

    const roomQuerySnapshot = await firestoreDB.collection("rooms").get();

    roomQuerySnapshot.forEach(async (doc) => {
      // Recorre las rooms y a las que estan vencidas les setea como true el campo expired a true
      const roomData = doc.data();
      const expiredRoom = compararFechas(now, roomData.expires);
      if (expiredRoom) {
        await firestoreDB
          .collection("rooms")
          .doc(doc.id)
          .update({ ...roomData, expired: true });
      }
    });

    return NextResponse.json({ expiredRooms });
  } catch (error) {
    console.error("Error al obtener datos de Firestore:", error);
    return NextResponse.error("Error al obtener datos de Firestore");
  }
}
