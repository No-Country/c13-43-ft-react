// Descripción: Este archivo contiene un endpoint que permite obtener información de un usuario a partir de su dirección 
// de correo electrónico en la aplicación.

// Funcionamiento: El endpoint recibe una solicitud POST con la dirección de correo electrónico del usuario en el cuerpo 
// de la solicitud. Luego, realiza una consulta en la base de datos de Firestore para buscar un usuario con esa dirección 
// de correo electrónico. Si no encuentra ningún usuario, el endpoint devuelve un mensaje de error. Si encuentra un usuario,
//  devuelve el ID del usuario y sus datos asociados.

import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/firebaseConn";

export async function POST(request) {
    try {
        const body = await request.json();
        const { userEmail } = body;
        //console.log(userEmail);
        // Realiza una consulta en Firestore para encontrar el usuario con el correo electrónico proporcionado
        const querySnapshot = await firestoreDB
            .collection("users")
            .where("email", "==", userEmail)
            .get();

        if (querySnapshot.empty) {
            // No se encontró ningún usuario con ese correo electrónico
            return NextResponse.json({ error: "Usuario no encontrado" });
        }

        // Solo debería haber un usuario con ese correo electrónico, así que obtén su información
        const userData = querySnapshot.docs[0].data();
        return NextResponse.json({
            userId: querySnapshot.docs[0].id,
            userData,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.error(error);
    }
}
