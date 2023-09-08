import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/firebaseConn";

//el back tiene que crear una roomID facil, y antes de proceder
//checkear que no exista
//date-fns

function generarNumeroAleatorio() {
  let numero = Math.floor(Math.random() * 90000) + 10000;
  return numero;
}

export async function POST(request) {
  let roomId = generarNumeroAleatorio();

  const body = await request.json();
  const { email, problem, options, expires } = body;

  const newRoom = {
    roomId,
    email,
    problem,
    expires,
    options,
  };

  await firestoreDB.collection("rooms").add(newRoom);

  return NextResponse.json({
    shareCode: roomId,
  });
}
