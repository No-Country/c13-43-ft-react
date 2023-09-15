// Descripción: Este archivo contiene un endpoint que permite acceder a los detalles de una sala en la aplicación.

// Funcionamiento: El endpoint espera recibir el identificador único de una sala en los parámetros de consulta de una solicitud
// GET. Luego, consulta la base de datos en busca de la sala correspondiente. Si la sala existe, se devuelven sus datos
// en la respuesta. Si la sala no se encuentra en la base de datos, se envía un mensaje indicando que la sala no se ha 
// encontrado.

import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/firebaseConn";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const roomId = searchParams.get("roomId");
  const roomRef = await firestoreDB.collection("rooms").doc(roomId).get();
  const roomExists = roomRef.exists;
  if (roomExists) {
    const roomData = roomRef.data();
    return NextResponse.json({ roomData });
  } else {
    return NextResponse.json({ message: "Room Not Found" });
  }
}