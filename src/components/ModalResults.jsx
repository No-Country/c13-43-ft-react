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
                <div className="flex flex-col items-center p-2 pb-10">
                    <div className="items-center flex flex-col p-6 pb-0 pt-0">
                        <h2 className="text-primaryPurple font-dmsans font-bold text-3xl mb-3">
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
