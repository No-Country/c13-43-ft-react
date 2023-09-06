"use client";
import React from "react";
import Password from "./Password";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { APICreateUser } from "@/lib/APICalls";

const ModalRegister = (callback) => {
  const router = useRouter();
  const [error, setError] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { nombre, email, passwordModal } = event.target;
    const response = await APICreateUser(
      nombre.value,
      email.value,
      passwordModal.value
    );
    if (response && !response.error) {
      callback.callback();
    } else {
      console.log("Error: ", response);
      setError("Creación de cuenta fallido: email existente");
    }
  };

  return (
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
  );
};

export default ModalRegister;
