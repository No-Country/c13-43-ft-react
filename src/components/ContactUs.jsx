// Descripción: Página de contacto con formulario para enviar mensajes. Muestra información de contacto de la empresa.
// El botón de envío se deshabilita si faltan datos. Incluye un indicador de carga mientras se procesa la solicitud.

// Funcionamiento: Los usuarios completan el formulario, hacen clic en "Enviar", se activa el indicador de carga, se 
// envían los datos al servidor y se muestra un mensaje de éxito o error.

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ContainerGlobal from "@/containers/ContainerGlobal";
import Loader from "./Loader";
import { APIContactUs } from "@/lib/APICalls";


const ContactUs = () => {
    const initialFormData = {
        contactEmail: "",
        contactMessage: "",
        contactPhone: "",
        contactName: "",
    };

    const [formData, setFormData] = useState({ ...initialFormData });
    const [loaderActive, setLoaderActive] = useState(false);

    useEffect(() => {
        const disableButton = () => {
            const button = document.querySelector('button[type="submit"]');
            button.disabled =
                !formData.contactEmail ||
                !formData.contactMessage ||
                !formData.contactName;
        };

        disableButton();
    }, [formData]);

    const handleSubmit = async () => {
        setLoaderActive(true);
        const response = await APIContactUs(
            formData.contactEmail,
            formData.contactMessage,
            formData.contactPhone,
            formData.contactName
        );

        setLoaderActive(false);

        if (response) {
            // Mostrar un mensaje de éxito al usuario.
            setFormData({ ...initialFormData }); // Restablecer los campos del formulario
        } else {
            // Mostrar un mensaje de error al usuario.
        }
    };

    return (
        <ContainerGlobal>
            <Loader active={loaderActive} />
            <main className="flex justify-center items-center font-dmsans">
                <div className="flex flex-col-reverse md:flex-row gap-20 mx-4 sm:mx-0 w-full">
                    <div className="flex justify-center md:w-1/2">
                        <form className=" bg-secondaryGray flex flex-col gap-4 w-full sm:w-3/4 md:w-5/6 p-8 rounded-2xl shadow-xl">
                            <input
                                className="py-2 px-4 rounded-3xl text-tertiaryGray placeholder-tertiaryGray"
                                type="text"
                                placeholder="Nombre y Apellido"
                                value={formData.contactName}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        contactName: e.target.value,
                                    })
                                }
                            />
                            <input
                                className="py-2 px-4 rounded-3xl text-tertiaryGray placeholder-tertiaryGray"
                                type="text"
                                placeholder="Example@mail.com"
                                value={formData.contactEmail}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        contactEmail: e.target.value,
                                    })
                                }
                            />
                            <input
                                className="py-2 px-4 rounded-3xl text-tertiaryGray placeholder-tertiaryGray"
                                type="text"
                                placeholder="(123) 456 7890"
                                value={formData.contactPhone}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        contactPhone: e.target.value,
                                    })
                                }
                            />
                            <textarea
                                className="py-2 px-4 rounded-xl text-tertiaryGray placeholder-tertiaryGray"
                                name=""
                                id=""
                                cols="35"
                                rows="3"
                                placeholder="Ingresa tu mensaje aquí"
                                value={formData.contactMessage}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        contactMessage: e.target.value,
                                    })
                                }
                            ></textarea>
                            <button
                                className="rounded-3xl w-full p-3 mt-4  bg-primaryPurple font-bold text-secondaryWhite uppercase"
                                type="submit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSubmit();
                                }}
                                disabled={
                                    !formData.contactEmail ||
                                    !formData.contactMessage ||
                                    !formData.contactName
                                }
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-col items-center mb-8 md:items-start md:w-1/2 gap-3">
                        <h2 className="font-bold text-secondaryBlack">
                            CONTACTO
                        </h2>
                        <h1 className="font-bold text-primaryOrange text-4xl">
                            Hablemos hoy
                        </h1>
                        <div className="flex flex-col items-center md:items-start gap-5">
                            <p className="text-center md:text-start text-lg sm:w-11/12">
                                Si tienes alguna pregunta, idea, o simplemente
                                deseas ponerte en contacto con nosotros para
                                explorar oportunidades de colaboración, no dudes
                                en hacerlo.
                            </p>
                            <div className="flex flex-col gap-5">
                                <div className="flex gap-2 items-center">
                                    <Image
                                        className="h-fit"
                                        src="/Images/contact/Email.png"
                                        width={20}
                                        height={20}
                                        alt="Mail.png"
                                    />
                                    <span className="text-lg">
                                        contact@votechoice.com
                                    </span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image
                                        className="h-fit"
                                        src="/Images/contact/Phone.png"
                                        width={20}
                                        height={20}
                                        alt="Phone.png"
                                    />
                                    <span className="text-lg">
                                        (123) 456 - 789
                                    </span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image
                                        className="h-fit"
                                        src="/Images/contact/Mark.png"
                                        width={20}
                                        height={20}
                                        alt="Mark.png"
                                    />
                                    <span className="text-lg">
                                        794 Lorem Ipsum St, 94102
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </ContainerGlobal>
    );
};

export default ContactUs;
