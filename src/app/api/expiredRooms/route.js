import { firestoreDB } from "@/lib/firebaseConn";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const roomQuerySnapshot = await firestoreDB
      .collection("rooms")
      .where("expired", "==", true)
      .get(); // Ejecutar la consulta y obtener los resultados

    const expiredRooms = []; // Crear un array para almacenar los datos

    roomQuerySnapshot.forEach((doc) => {
      // Recorrer los documentos y convertirlos a un formato serializable
      const roomData = doc.data();
      expiredRooms.push({ roomId: doc.id, roomData });
    });

    return NextResponse.json({ expiredRooms });
  } catch (error) {
    console.error("Error al obtener datos de Firestore:", error);
    return NextResponse.error("Error al obtener datos de Firestore");
  }
}
