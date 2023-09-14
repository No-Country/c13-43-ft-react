import { firestoreDB } from "@/lib/firebaseConn";
import { NextResponse } from "next/server";
export async function DELETE(request) {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email"); // Cambio necesario aquí para usar el correo electrónico

    // Buscar el usuario por su dirección de correo electrónico
    const querySnapshot = await firestoreDB
        .collection("users")
        .where("email", "==", email)
        .get();

    // Verificar si se encontraron resultados
    if (!querySnapshot.empty) {
        // Suponemos que solo hay un usuario con ese correo electrónico
        const userDoc = querySnapshot.docs[0];

        // Eliminar el documento del usuario
        await userDoc.ref.delete();

        return NextResponse.json({ email, userDeleted: true });
    } else {
        // El usuario no existe
        return NextResponse.json({ email, userDeleted: false });
    }
}
