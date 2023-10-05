// Descripción: Es la página principal de la aplicación cuando un usuario está logeado, muestra secciones interactivas para
// su uso y además provee contenido informativo dinámico según el estado del usuario.

"use client";
import React from "react";
import Atajos from "@/containers/Atajos";
import Loader from "@/components/Loader";
import { useSession } from "next-auth/react";
import Resultados from "@/components/Resultados";
import { APIGetResultsLastRoom } from "@/lib/APICalls";
import SinVotaciones from "@/components/SinVotaciones";

export default function Panel() {
    const { data: session } = useSession();
    const [render, setRender] = React.useState(false);
    const [loaderActive, setLoaderActive] = React.useState(false);

    React.useEffect(() => {
        async function fetchLastResults() {
            setLoaderActive(true);
            try {
                const lastResult = await APIGetResultsLastRoom(
                    session.user?.email
                );
                if (lastResult.problem) {
                    setRender(true);
                    setTimeout(() => {
                        setLoaderActive(false);
                    }, 3000);
                } else {
                    setLoaderActive(false);
                }
            } catch (error) {
                setRender(false);
                setLoaderActive(false);
                console.error(error);
            }
        }

        fetchLastResults();
    }, [session.user?.email]);

    return (
        <>
            <Loader active={loaderActive} />
            <div className="flex flex-col items-center test:items-start test:flex-row justify-around xl:justify-end mt-16 xl:mr-40">
                {render ? <Resultados /> : <SinVotaciones />}
                <div className="mt-5">
                    <Atajos />
                </div>
            </div>
        </>
    );
}
