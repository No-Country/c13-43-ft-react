// Descripción: Este componente representa un modal de registro donde los usuarios pueden crear una nueva cuenta 
// proporcionando su nombre, dirección de correo electrónico y contraseña.

// Funcionamiento: Cuando un usuario completa el formulario de registro y hace clic en "REGISTRAR", se realiza una serie 
// de validaciones. Primero, se verifica si las contraseñas proporcionadas en los campos "CONTRASEÑA" y "REPETIR CONTRASEÑA"
//  son iguales. Si las contraseñas coinciden, se llama a la función APICreateUser para crear la cuenta del usuario 
//  utilizando el nombre, correo electrónico y contraseña proporcionados. Si la cuenta se crea con éxito, el usuario se 
//  autentica automáticamente utilizando la función signIn con el método de autenticación "credentials". Si hay algún error
//   durante el proceso de registro o si las contraseñas no coinciden, se muestra un mensaje de error correspondiente. 
//   Un indicador de carga (Loader) se muestra mientras se procesa el registro.

"use client";
import React from "react";
import Password from "./Password";
import { useState } from "react";
import { APICreateUser } from "@/lib/APICalls";
import { signIn } from "next-auth/react";
import Loader from "@/components/Loader";

function passwordsAreEqual(pOne, pTwo) {
    return pOne === pTwo;
}

const ModalRegister = (callback) => {
    const [error, setError] = useState();
    const [loaderActive, setLoaderActive] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { nombre, email, passwordModal, passwordModal2 } = event.target;
        setLoaderActive(true);
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
                setLoaderActive(false);
                callback.callback();
            } else {
                setLoaderActive(false);
                setError("Ya existe una cuenta con este email.");
            }
        } else {
            setLoaderActive(false);
            setError("las contraseñas no son iguales");
        }
    };

    return (
        <>
            <Loader active={loaderActive}></Loader>
            <main>
                <h1 className="text-secondaryBlack  text-5xl font-bold font-dmsans flex justify-center">
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
                            className="w-full border-b border-secondaryBlack bg-slate-50 px-2 h-8"
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
                            className="w-full border-b border-secondaryBlack bg-slate-50 px-2 h-8"
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

                    <Password
                        nameLabel="REPETIR CONTRASEÑA"
                        name="passwordModal2"
                    />
                    <div className="my-2">
                        {error && (
                            <p className="font-medium font-dmsans text-red-600">
                                {error}
                            </p>
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
