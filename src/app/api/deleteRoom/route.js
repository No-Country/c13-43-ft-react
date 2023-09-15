// Descripción: Este archivo contiene una función que maneja las solicitudes DELETE relacionadas con la eliminación de una 
// sala en la aplicación. La función obtiene el ID de la sala de los parámetros de búsqueda de la URL y luego elimina la 
// sala correspondiente de la base de datos.

// Funcionamiento: La función comienza obteniendo el ID de la sala de los parámetros de búsqueda de la URL proporcionada 
// en la solicitud DELETE. Luego, utiliza ese ID para acceder a la base de datos Firestore y eliminar la entrada de sala 
// correspondiente utilizando el método delete().

// Finalmente, se devuelve una respuesta JSON que contiene el ID de la sala eliminada y un mensaje indicando que la sala
// ha sido eliminada con éxito.

import { NextResponse } from "next/server";
import { firestoreDB } from "@/lib/firebaseConn";

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const roomId = searchParams.get("roomId"); // Cambio necesario aquí
  const deletedRoom = await firestoreDB
    .collection("rooms")
    .doc(roomId)
    .delete();
  return NextResponse.json({ roomId, deletedRoom });
}
