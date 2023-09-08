'use client'
import React from "react";
import Image from "next/image";
import ModalResults from "./ModalResults";
import ModalGeneral from "@/containers/ModalGeneral";

const Resultados = () => {

    const [modalResults, setModalResults] = React.useState(false)

    return (
        <div className="flex flex-col p-4 font-dmsans sm:w-1/2 xl:w-45">
            <div className="flex flex-col text-center sm:text-left pb-3 px-3">
                <h2 className="text-4xl font-bold text-secondaryBlack pt-2">Resultados</h2>
                <p className="text-sm md:text-md py-3">Acá los resultados de tu votación más reciente: <span className="font-bold">Festejo de mi cumple 🎂 Cuento con ustedes!</span></p>
            </div>
            <div className="flex justify-center sm:justify-normal">
                <div className="flex flex-col items-start bg-primaryPurple rounded-lg px-5 py-7 gap-5 min-w-fit">
                    <div>
                        <Image className="w-3/4 md:w-9/12" src="/Images/resultados/resultados-ImagePlaceholder.png" alt="emoji" width={60} height={60} />
                    </div>
                    <span className="text-3xl md:text-4xl text-white font-bold">80%</span>
                    <p className="text-sm md:text-xl text-white font-bold">Sábado 21 de septiembre</p>
                </div>
                <div className="flex flex-col justify-center gap-8 px-5">
                    <div className="flex flex-col bg-secondaryWhite shadow p-3 rounded-lg">
                        <span className="text-3xl md:text-4xl text-primaryPurple font-bold">7</span>
                        <span className="text-sm md:text-xl text-primaryPurple font-bold">Comentarios</span>
                    </div>
                    <div className="flex flex-col shadow p-3 rounded-lg">
                        <span className="text-3xl md:text-4xl text-primaryPurple font-bold">20%</span>
                        <span className="text-sm md:text-xl text-primaryPurple font-bold">No asistiré</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center sm:justify-normal pt-8 ml-1">
                <button
                    className="text-lg bg-primaryPurple text-white font-bold rounded-3xl px-4 py-2"
                    onClick={() => setModalResults(!modalResults)}
                >
                    Ver respuestas
                </button>
            </div>
            <ModalGeneral
                state={modalResults}
                changeState={setModalResults}
            >
                <ModalResults />
            </ModalGeneral>
        </div>
    )
}

export default Resultados;