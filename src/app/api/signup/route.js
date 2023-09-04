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

  const harcodeUser = {
    email,
    password,
    name,
    isAdmin: null,
    picture: avatar,
  };

  const userCreated = await firestoreDB.collection("users").add(harcodeUser);
  const userCreatedId = userCreated.id;
  return NextResponse.json({ userCreated, userCreatedId });
}
