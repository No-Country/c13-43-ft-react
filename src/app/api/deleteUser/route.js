// Descripción: Este archivo contiene una función que maneja las solicitudes DELETE relacionadas con la eliminación de un 
// usuario en la aplicación. La función busca un usuario en la base de datos Firestore utilizando su dirección de correo 
// electrónico como identificador y luego elimina el documento de usuario correspondiente si se encuentra.

// Funcionamiento: La función comienza obteniendo la dirección de correo electrónico del usuario de los parámetros de 
// búsqueda de la URL proporcionada en la solicitud DELETE. Luego, utiliza esa dirección de correo electrónico para 
// realizar una consulta en la base de datos Firestore en la colección "users". La consulta busca documentos de usuario 
// que tengan la dirección de correo electrónico proporcionada.

// Si la consulta encuentra resultados (es decir, no está vacía), asumimos que solo hay un usuario con esa dirección de 
// correo electrónico y accedemos al primer documento de usuario encontrado. Luego, utilizamos el método delete() en el 
// documento de usuario para eliminarlo de la base de datos. Si la consulta no encuentra resultados (es decir, está vacía), significa que el usuario no existe en la base de datos. 
// En este caso, se devuelve una respuesta JSON que indica que el usuario no fue encontrado.
// Finalmente, se devuelve una respuesta JSON que contiene la dirección de correo electrónico del usuario eliminado y un 
// indicador booleano (userDeleted) que indica si el usuario fue eliminado con éxito (true) o si no fue encontrado en la 
// base de datos (false).

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
