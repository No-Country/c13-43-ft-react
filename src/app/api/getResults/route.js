import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/firebaseConn";
export async function GET(request) {
  //recibir la id de la room
  //se debe obtener los resultados de las opciones y los votos
  const { searchParams } = new URL(request.url);
  const roomId = searchParams.get("roomId");
  const resultsRef = await firestoreDB.collection("rooms").doc(roomId).get();
  const resultsData = resultsRef.data().options;
  return NextResponse.json({ resultsData });
}

//https://codevoweb.com/build-a-simple-api-in-next-js-13-app-directory/ puede servir como referencia
