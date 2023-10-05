// Descripción: Este endpoint permite actualizar la información de un usuario en la base de datos Firestore. Se utiliza 
// para modificar los datos del usuario, como su nombre, correo electrónico, imagen de perfil, entre otros.

// Funcionamiento: El endpoint recibe una solicitud que incluye el correo electrónico del usuario que se desea actualizar 
// y los nuevos datos que se deben aplicar. Luego, verifica si existe un usuario con ese correo electrónico en la base
// de datos.

// Si no se encuentra un usuario con el correo electrónico proporcionado, el endpoint responde indicando que el usuario 
// no fue encontrado.

// Si se encuentra un usuario con el correo electrónico proporcionado, se actualizan sus datos en la base de datos con 
// la nueva información proporcionada en la solicitud.

import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/firebaseConn";

export async function PUT(request) {
    try {
        const body = await request.json();
        const { userEmail, updatedUserData } = body;

        // Realiza una consulta en Firestore para encontrar el usuario con el correo electrónico proporcionado
        const querySnapshot = await firestoreDB
            .collection("users")
            .where("email", "==", userEmail)
            .get();

        if (querySnapshot.empty) {
            // No se encontró ningún usuario con ese correo electrónico, pero la operación se completó con éxito
            return NextResponse.json({
                message: "Usuario no encontrado",
            });
        }

        // Si se encontró un usuario, actualiza su información
        const userId = querySnapshot.docs[0].id;

        await firestoreDB
            .collection("users")
            .doc(userId)
            .update(updatedUserData);

        return NextResponse.json({
            message: "Usuario actualizado exitosamente",
        });
    } catch (error) {
        console.error(error);
        return NextResponse.error(error);
    }
}
