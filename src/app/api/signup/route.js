// Descripción: Este endpoint se utiliza para crear un nuevo usuario en la base de datos. Los datos del usuario, 
// como su dirección de correo electrónico, contraseña (ya hasheada por el frontend), nombre, estado de administrador 
// (isAdmin), y una imagen de perfil, se proporcionan en el cuerpo de la solicitud POST.

// Funcionamiento: El endpoint comienza por verificar si ya existe un usuario con la dirección de correo electrónico
// proporcionada. Si se encuentra un usuario con la misma dirección de correo electrónico, se devuelve un mensaje de error
// indicando que ya existe un usuario con ese correo electrónico.

//email
//pass(ya este hasheada por el front)
//nombre
//
//firebase se crea un user
//email
//password
//isAdmin
//userName

import { firestoreDB } from "@/lib/firebaseConn";
import { NextResponse } from "next/server";
import avatar from "../../../../public/Images/avatar/uno.png";
export async function POST(request) {
  const body = await request.json();
  const { email, password, name } = body;

  const existingUser = await firestoreDB
    .collection("users")
    .where("email", "==", email)
    .get();

  if (!existingUser.empty) {
    return NextResponse.json({ error: "User with this email already exists." });
  }

  const newUser = {
    email,
    password,
    name,
    isAdmin: null,
    picture: avatar,
  };

  const userCreated = await firestoreDB.collection("users").add(newUser);
  await firestoreDB
    .collection("users")
    .doc(userCreated.id)
    .update({ id: userCreated.id });
  const userCreatedId = userCreated.id;

  return NextResponse.json({ userCreated, userCreatedId });
}
