// Descripción: El componente "Resultados" muestra los resultados de la votación más reciente del usuario.

// Funcionamiento: El componente obtiene la información de los resultados de la última votación del usuario mediante 
// una llamada a la API.
// Muestra el porcentaje y el nombre de la opción ganadora, así como el número de participantes.
// También muestra el porcentaje y el nombre de la segunda opción más votada.
// Proporciona un botón para ver más detalles de los resultados.
// Si el usuario no tiene votaciones anteriores, se muestra un mensaje indicando que no hay resultados disponibles.

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ModalResults from "./ModalResults";
import ModalGeneral from "@/containers/ModalGeneral";
import { APIGetResultsLastRoom } from "@/lib/APICalls";
import { useSession } from "next-auth/react";
import SinVotaciones from "./SinVotaciones";

const Resultados = () => {
    const [modalResults, setModalResults] = React.useState(false);
    const { data: session } = useSession();
    const userEmail = session.user?.email;
    const [result, setResult] = useState({
        roomId: "",
        percetageWin: 0,
        winOption: "",
        participants: 0,
        percentageSecond: 0,
        secondOption: "",
        problem: "",
    });

    useEffect(() => {
        async function fetchLastResults() {
            try {
                const lastResult = await APIGetResultsLastRoom(userEmail);

                setResult({
                    percetageWin:
                        lastResult?.resultsWithPercentage[0]?.percentage
                            ?.toString()
                            .slice(0, 4) || 0,
                    winOption: lastResult?.resultsWithPercentage[0]?.title || 0,
                    participants: lastResult?.totalParticipants,
                    percentageSecond:
                        lastResult?.resultsWithPercentage[1]?.percentage
                            ?.toString()
                            .slice(0, 4) || 0,
                    secondOption:
                        lastResult?.resultsWithPercentage[1]?.title || 0,
                    problem: lastResult.problem,
                    roomId: lastResult.roomId,
                });
            } catch (error) {
                console.error(error);
            }
        }

        fetchLastResults();
    }, [userEmail]);

    return result.problem !== "" ? (
        <>
            <div className="flex flex-col p-4 font-dmsans sm:w-1/2 xl:w-45">
                <div className="flex flex-col text-center sm:text-left pb-3 px-3">
                    <h2 className="text-4xl font-bold text-secondaryBlack pt-2">
                        Resultados
                    </h2>
                    <p className="text-sm md:text-md py-3">
                        Acá los resultados de tu votación más reciente:{" "}
                        <span className="font-bold">{result.problem}</span>
                    </p>
                </div>
                <div className="flex justify-center sm:justify-normal">
                    <div className="flex flex-col items-start bg-primaryPurple rounded-lg px-5 py-7 gap-5 min-w-fit">
                        <div>
                            <Image
                                className="w-3/4 md:w-9/12"
                                src="/Images/resultados/resultados-ImagePlaceholder.png"
                                alt="emoji"
                                width={60}
                                height={60}
                            />
                        </div>
                        <span className="text-3xl md:text-4xl text-white font-bold">
                            {result.percetageWin}%
                        </span>
                        <p className="text-sm md:text-xl text-white font-bold">
                            {result.winOption}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center gap-8 px-5">
                        <div className="flex flex-col bg-secondaryWhite shadow p-3 rounded-lg">
                            <span className="text-3xl md:text-4xl text-primaryPurple font-bold">
                                {result.participants}
                            </span>
                            <span className="text-sm md:text-xl text-primaryPurple font-bold">
                                Participantes
                            </span>
                        </div>
                        <div className="flex flex-col shadow p-3 rounded-lg">
                            <span className="text-3xl md:text-4xl text-primaryPurple font-bold">
                                {result.percentageSecond}%
                            </span>
                            <span className="text-sm md:text-xl text-primaryPurple font-bold">
                                {result.secondOption}
                            </span>
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
                    <ModalResults
                        roomId={result.roomId}
                        problem={result.problem}
                        participants={result.participants}
                    />
                </ModalGeneral>
            </div>
        </>
    ) : (
        <SinVotaciones />
    );
};

export default Resultados;
