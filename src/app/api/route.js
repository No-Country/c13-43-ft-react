import { firestoreDB } from "@/lib/firebaseConn";
import { NextResponse } from "next/server";

//TEST: trae todos los usuarios
export async function GET(request) {
  try {
    const allUsersRef = await firestoreDB.collection("users").get();
    const userData = allUsersRef.docs.map((doc) => doc.data());

    return NextResponse.json({ ok: userData });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching users" }, 500);
  }
}

export async function PUT(request) {
  try {
    const { email, data } = await request.json();
    //Referncia a la collection
    const querySnapshot = await firestoreDB
      .collection("users")
      .where("email", "==", email)
      .get();
    //Pregunta si el array NO esta vacio, procedemos porque quiere decir que existe
    if (!querySnapshot.empty) {
      //Hacemos una referencia a el elemento de la primera posicion
      const userRef = querySnapshot.docs[0].ref;
      //Nos traemos la data del documento
      const currentUserData = (await userRef.get()).data();
      //
      const updatedData = { ...currentUserData, ...data };
      await userRef.update(updatedData);
      return NextResponse.json({ ok: updatedData });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching users" }, 500);
  }
}

export async function DELETE(request) {
  try {
    const { email } = await request.json();
    const querySnapshot = await firestoreDB
      .collection("users")
      .where("email", "==", email)
      .get();

    if (!querySnapshot.empty) {
      const userRef = querySnapshot.docs[0].ref;
      await userRef.delete();
      return NextResponse.json({ userDeleted: true });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching users" }, 500);
  }
}
