"use client";
//import bcrypt from "bcrypt";
import React from "react";
import Password from "./Password";
import { useState } from "react";
import { APICreateUser } from "@/lib/APICalls";
import { signIn } from "next-auth/react";

function passwordsAreEqual(pOne, pTwo) {
  return pOne === pTwo;
}

const ModalRegister = (callback, loader) => {
  const [error, setError] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { nombre, email, passwordModal, passwordModal2 } = event.target;
    console.log(typeof loader);
    const equalPasswords = passwordsAreEqual(
      passwordModal.value,
      passwordModal2.value
    );
    if (equalPasswords) {
      const response = await APICreateUser(
        nombre.value,
        email.value,
        passwordModal.value
      );
      if (response && !response.error) {
        await signIn("credentials", {
          email: email.value,
          password: passwordModal.value,
          redirect: false,
        });
        //loader tiene que pasar a false
        console.log("loader a false");
        callback.callback();
      } else {
        console.log("Error: ", response);
        setError("Creación de cuenta fallido: email existente");
      }
    } else {
      console.log("las contraseñas no son iguales");
    }
  };

  return (
    <>
      <main>
        <h1 className="text-secondaryBlack text-5xl font-bold font-dmsans flex justify-center">
          {" "}
          Registrate{" "}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="my-6">
            <label
              className="text-secondaryBlack font-dmsans font-medium"
              htmlFor="nombre"
            >
              {" "}
              NOMBRE Y APELLIDO{" "}
            </label>
            <input
              className="w-full border-b border-secondaryBlack bg-slate-50 outline-none "
              type="text"
              name="nombre"
              id="nombre"
            />
          </div>

          <div className="my-6">
            <label
              className="text-secondaryBlack font-dmsans font-medium"
              htmlFor="emailModal"
            >
              {" "}
              EMAIL{" "}
            </label>
            <input
              className="w-full border-b border-secondaryBlack bg-slate-50 outline-none "
              type="email"
              name="email"
              id="emailModal"
            />
          </div>

          <Password
            nameLabel="CONTRASEÑA"
            name="passwordModal"
            id="passwordModal"
          />

          <Password nameLabel="REPETIR CONTRASEÑA" name="passwordModal2" />
          <div className="my-2">
            {error && (
              <p className="font-medium font-dmsans text-red-600">{error}</p>
            )}
          </div>

          <button className="bg-primaryPurple text-secondaryWhite font-dmsans font-medium w-full py-2 rounded-full">
            {" "}
            REGISTRAR{" "}
          </button>

          {/* <button className='text-primaryPurple font-dmsans font-medium border-primaryPurple border rounded-full w-full py-2'> INICIAR SESIÓN </button> */}
        </form>
      </main>
    </>
  );
};

export default ModalRegister;
