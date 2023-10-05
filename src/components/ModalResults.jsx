// Descripción: Este componente representa un modal que muestra los resultados de una votación en una sala específica. 
// Los resultados incluyen el problema que se votó y las opciones con sus respectivos porcentajes de votos, 
// el número de veces que se votaron y la cantidad de participantes en la votación.

// Funcionamiento: Cuando se monta este componente, se hace una llamada a la función APIGetRoomOptions para obtener 
// los resultados de la sala específica identificada por su roomId. Estos resultados se almacenan en el estado local 
// finishResults. Los resultados se muestran en el modal, y para cada opción, se utiliza el componente Options para 
// mostrar el título de la opción, el porcentaje de votos, el número de veces que se votó y la cantidad de participantes 
// en la votación. Mientras se carga la información, se muestra un indicador de carga (Loader) en pantalla.

"use client";
import React, { useEffect, useState } from "react";
import Options from "./Options";
import { APIGetRoomOptions } from "@/lib/APICalls";
import Loader from "./Loader";

const ModalResults = ({ roomId, problem, participants }) => {
    const [finishResults, setFinishResults] = useState([]);
    const [loaderActive, setLoaderActive] = useState(false);

    useEffect(() => {
        const results = async () => {
            try {
                setLoaderActive(true);
                const arrayResults = await APIGetRoomOptions(roomId);
                setFinishResults(arrayResults.resultsWithPercentage);
                setLoaderActive(false);
            } catch (error) {
                console.error(error);
            }
        };

        results();
    }, []);

    return (
        <>
            <Loader active={loaderActive} />
            <div className="flex justify-center items-center font-dmsans">
                <div className="flex flex-col items-center p-2">
                    <div className="items-center flex flex-col p-6 pb-0 pt-0">
                        <h2 className="text-primaryPurple font-dmsans font-bold text-3xl mb-4 text-center">
                            Resultados
                        </h2>
                        <p className="mb-4">
                            Acá los resultados de tu votación más reciente:{" "}
                            <br />{" "}
                            <span className="font-semibold">{problem}</span>
                        </p>
                        <div className="items-center flex flex-col w-full mt-1">
                            {finishResults?.map((option) => (
                                <Options
                                    key={option.id}
                                    opcion={option.title}
                                    percentage={option.percentage}
                                    timesVoted={option.timesVoted}
                                    participants={participants}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalResults;
