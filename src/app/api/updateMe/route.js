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
