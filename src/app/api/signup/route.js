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
