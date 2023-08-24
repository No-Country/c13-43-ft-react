import { NextResponse } from "next/server";

// Simulación de una base de datos de opciones con votos
//const optionsData = {
//  option1: { votes: 0 },
//  option2: { votes: 0 },
// ... otras opciones ...
//};

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const optionId = searchParams.get("optionId");
  console.log(optionId);
}
