// El componente "Login" de la aplicación web es una página que permite a los usuarios iniciar sesión en sus cuentas. 
// En esta página, los usuarios pueden ingresar su dirección de correo electrónico y contraseña o mediante un formulario
// de registro para acceder a la plataforma. También tienen la opción de iniciar sesión utilizando sus cuentas de Google.

"use client";
import ImagePrincipal from "@/components/ImagePrincipal";
import Password from "@/components/Password";
import React, { useEffect } from "react";
import { GoogleButton } from "@/components/GoogleButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import ModalGeneral from "@/containers/ModalGeneral";
import ModalRegister from "@/components/ModalRegister";
import { useSession } from "next-auth/react";
import Loader from "@/components/Loader";

const Login = () => {
    const router = useRouter();
    const [error, setError] = useState();
    const [stateModal, setStateModal] = useState(false);
    const { data: session, status } = useSession();
    const [loaderActive, setLoaderActive] = useState(false);


  useEffect(() => {
    if (status === "authenticated") {
      const userData = session?.user?.id;
      router.push(`/login/${userData}`);
    }
  }, [status]);

    const cerrarModal = () => {
        setStateModal(!stateModal);
    };

    const handleSubmit = async (e) => {
        setError("");
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        setLoaderActive(true);
        const signInResponse = await signIn("credentials", {
            email: data.get("email"),
            password: data.get("password"),
            redirect: false,
        });

        if (signInResponse && !signInResponse.error) {
            setLoaderActive(false);
        } else {
            setLoaderActive(false);
            setError(
                "Inicio de sesión fallido: verifica tu email y contraseña"
            );
        }
    };

    return (
        <>
            <Loader active={loaderActive}></Loader>
            <main className="flex justify-between items-center mx-2 md:mx-0 font-dmsans flex-col md:flex-row md:py-8 mb-4 sm:mb-0 md:h-100">
                <section className="my-10 w-full text-center md:w-2/5 md:text-left mx-auto">
                    <h1 className=" text-5xl font-bold font-dmsans flex justify-center">
                        Iniciar sesión
                    </h1>
                    <div className="relative mx-8">
                        <form onSubmit={handleSubmit}>
                            <div className="my-4 pt-4">
                                <label
                                    className=" font-dmsans font-medium"
                                    htmlFor="email"
                                >
                                    {" "}
                                    EMAIL{" "}
                                </label>
                                <input
                                    className="w-full border-b text-black dark:text-darkBlack border-secondaryBlack dark:border-secondaryWhite bg-slate-50 px-2 h-8"
                                    type="email"
                                    name="email"
                                    id="email"
                                    required="required"
                                />
                            </div>
                            <Password nameLabel="CONTRASEÑA" name="password" />
                            <div className="mt-2">
                                {error && (
                                    <p className="font-medium font-dmsans text-red-600">
                                        {error}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col lg:flex-row justify-start items-center mt-10">
                                <button className="bg-primaryPurple text-secondaryWhite w-full lg:w-49 font-dmsans font-medium py-2 rounded-full">
                                    {" "}
                                    INGRESAR{" "}
                                </button>
                            </div>
                        </form>
                        <div className="flex justify-center items-center gap-8 w-full mt-4 mx-auto lg:absolute lg:bottom-13 sm:right-0 lg:w-49 lg:mt-0">
                            <GoogleButton />
                        </div>
                        <div className="flex gap-4 my-7">
                            <hr className="flex-grow border-secondaryBlack dark:border-secondaryWhite mt-3" />
                            <span className=" font-dmsans font-medium">
                                OR
                            </span>
                            <hr className="flex-grow border-secondaryBlack dark:border-secondaryWhite mt-3" />
                        </div>
                        <button
                            className="text-primaryPurple font-dmsans font-medium border-primaryPurple border rounded-full w-full py-2"
                            onClick={() => setStateModal(!stateModal)}
                        >
                            {" "}
                            REGISTRATE{" "}
                        </button>
                    </div>
                </section>
                <div className="md:w-1/2 h-full mt-8">
                    <ImagePrincipal />
                </div>
            </main>
            <ModalGeneral state={stateModal} changeState={setStateModal}>
                <ModalRegister callback={cerrarModal} />
            </ModalGeneral>
        </>
    );
};

export default Login;
