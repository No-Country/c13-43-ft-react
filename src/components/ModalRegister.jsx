"use client";
//import bcrypt from "bcrypt";
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
