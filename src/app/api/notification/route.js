//Se va a notificar a los participantes que la encuesta termino
import { NextResponse } from "next/server";
//Endpoint para desloguear un usuario
export async function POST(request) {
  const body = await request.json();
  const { emails } = body;
  for (const email of emails) {
    console.log(`notification to ${email}`);
  }
  return NextResponse.json({ notificationSent: true });
}
