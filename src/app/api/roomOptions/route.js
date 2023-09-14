// Descripción: Este archivo contiene un endpoint que se utiliza para obtener el ID de la opción ganadora en una votación. 
// El ID de la opción ganadora se utiliza para mostrar los resultados de una votación.

// Funcionamiento: El endpoint siempre devuelve un valor fijo de ejemplo (123323) como el ID de la opción ganadora. 
// No realiza ninguna consulta a la base de datos ni procesa datos en función de las solicitudes recibidas. Este endpoint 
// es utilizado para fines de demostración o pruebas, y siempre devuelve el mismo valor predefinido.

import { NextResponse } from "next/server";

export async function GET(request) {
    let winnerOptionID = 123323;
    return NextResponse.json({ winnerOptionID });
}
