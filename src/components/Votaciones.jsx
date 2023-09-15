// Descripción: El componente "Votaciones" representa la sección donde los usuarios pueden ver y gestionar sus votaciones 
// activas e inactivas.

// Funcionamiento:

// Utiliza el hook useSession de "next-auth/react" para obtener información sobre la sesión actual del usuario, 
// especialmente su dirección de correo electrónico.
// Hace una llamada a la API para obtener las salas de votación asociadas al usuario actual utilizando la función APIGetMyRooms.
// Permite al usuario buscar salas de votación activas o inactivas utilizando un campo de búsqueda.
// Muestra una lista de las salas de votación en función de los resultados de la búsqueda y proporciona detalles como el estado (activo o inactivo), el título de la votación, el porcentaje de votos para la opción ganadora y más.
// Los usuarios pueden realizar acciones en cada sala de votación, como eliminarla, compartirla o ver los resultados. 
// Estas acciones se manejan mediante botones y modales correspondientes.
// Los resultados de las salas de votación se muestran en un modal separado llamado "ModalResults" cuando el usuario hace clic en el botón de información.
// El componente también incluye un indicador visual de si una sala de votación está activa o inactiva, y muestra un ícono de "corona" si el usuario creó la sala de votación.
// El estado de los modales (eliminar sala y compartir sala) se controla mediante los estados deleteModal y shareModal.
// Se muestra un mensaje si el usuario aún no ha participado en ninguna votación.

"use client";
import React from "react";
import Image from "next/image";
import { APIGetMyRooms } from "@/lib/APICalls";
import { useSession } from "next-auth/react";
import ModalGeneral from "@/containers/ModalGeneral";
import ModalEliminarSala from "./ModalEliminarSala";
import ModalCopiar from "./ModalCopiar";
import Loader from "./Loader";
import ModalResults from "./ModalResults";
//con session traer el email del usuario
//Con un api Call traer mis room en principio y si se llega traer las que he participado

const Votaciones = () => {
    const [modalResultsStates, setModalResultsStates] = React.useState({});
    const { data: session } = useSession();
    const [rooms, setRooms] = React.useState([]);
    const [code, setCode] = React.useState(0);
    const [title, setTitle] = React.useState("");
    const [deleteModal, setDeleteModal] = React.useState(false);
    const [shareModal, setShareModal] = React.useState(false);
    const [loaderActive, setLoaderActive] = React.useState(false);
    const [search, setSearch] = React.useState("");

    React.useEffect(() => {
        const votants = async () => {
            try {
                const historiaPromise = APIGetMyRooms(session.user.email);
                setLoaderActive(true);
                historiaPromise.then((historia) => {
                    setRooms(historia.combinedRooms);

                    if (historia.combinedRooms) {
                        setLoaderActive(false);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        };

        votants();
    }, [session?.user?.email]);

    const filteredRooms = rooms.filter((room) =>
        room?.problem.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    const winnerPercent = (arr) => {
        const winnerTimes = Object.values(arr)
            .sort((a, b) => a.timesVoted - b.timesVoted)
            .at(-1).timesVoted;
        const totalTimes = Object.values(arr).reduce(
            (a, b) => a + b.timesVoted,
            0
        );

        if (totalTimes === 0) {
            return 0;
        } else {
            return String((winnerTimes / totalTimes) * 100).slice(0, 4);
        }
    };

    const winnerOption = (arr) => {
        return Object.values(arr)
            .sort((a, b) => a.timesVoted - b.timesVoted)
            .at(-1).title;
    };

    const handleDelete = (id) => {
        setCode(filteredRooms[id].roomId);
        setTitle(filteredRooms[id].problem);
        setDeleteModal(!deleteModal);
    };

    const handleShare = (id) => {
        setCode(filteredRooms[id].roomId);
        setShareModal(!shareModal);
    };

    return (
        <>
            <Loader active={loaderActive} />
            <div className="w-full xl:w-3/5 mt-6 font-dmsans mx-4 xl:mx-0 sm:py-5 test:flex test:flex-col test:items-center test:w-2/3 xl:block xl:ml-40">
                <h1 className="ml-6 mb-4 text-4xl font-bold text-center xl:text-start">Votaciones</h1>
                {!rooms.length ? <div className="flex flex-col items-center justify-center bg-secondaryGray dark:bg-darkNav pt-6 test:w-4/5 shadow rounded-4xl h-90 sm:h-85">
                    <p>Aún no has participado en una votación.</p>
                </div> : <div className="flex flex-col bg-secondaryGray dark:bg-darkNav pt-6 test:w-4/5 shadow rounded-4xl pb-20 sm:pb-0">
                    <div className="pb-10 flex flex-col items-center">
                        <form className="bg-primaryOrange rounded-full flex items-center h-8 justify-around px-2 w-1/2 shadow">
                            <input
                                type="text"
                                name="busqueda"
                                placeholder="Buscar sala"
                                className="busqueda bg-primaryOrange text-secondaryWhite mx-2 placeholder-white text-sm focus:outline-none w-full"
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                            />
                            <Image
                                className="max-w-none"
                                src="/Images/lupa.png"
                                alt="lupa"
                                width={25}
                                height={25}
                            />
                        </form>
                    </div>
                    <div className="flex gap-4 pl-6 py-5">
                        <div className="flex justify-center items-center rounded-full bg-slate-300 dark:bg-darkBlack  gap-2 w-24 h-6 cursor-pointer">
                            <div className="w-3 h-3 bg-green-500 rounded-full shadow"></div>
                            <button className="text-xs text-semibold">Activas</button>
                        </div>
                        <div className="flex justify-center items-center rounded-full bg-slate-300 dark:bg-darkBlack gap-2 w-24 h-6 cursor-pointer">
                            <div className="w-3 h-3 bg-red-500 rounded-full shadow"></div>
                            <button className="text-xs text-semibold">Inactivas</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 px-8 pb-10 h-44 py-2 overflow-y-auto mb-2">
                        {filteredRooms.map((sala, index) => (
                            <div
                                className="flex gap-2 items-center"
                                key={index}
                            >
                                <div
                                    className={`w-6 h-3 rounded-full ${!sala.expired
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                        } rounded-full`}
                                ></div>
                                <p className="text-xs text-start w-full"><span className="font-semibold">{`${sala.roomId}`} -</span>
                                    {`${sala.problem}`}
                                </p>
                                <div className="flex justify-end w-full gap-2 items-center">
                                    {sala.createdBy == session.user.email ? (
                                        <button>
                                            <Image
                                                src="/Images/CoronaIcon.svg"
                                                alt="corona"
                                                width={20}
                                                height={20}
                                                className="cursor-pointer max-w-none"
                                            />
                                        </button>
                                    ) : null}
                                    {sala.createdBy == session.user.email ? (
                                        <button
                                            onClick={() => handleDelete(index)}
                                        >
                                            <Image
                                                src="/Images/TrashIcon.svg"
                                                alt="trash"
                                                width={18}
                                                height={18}
                                                className="cursor-pointer max-w-none"
                                            />
                                        </button>
                                    ) : null}
                                    <button onClick={() => handleShare(index)}>
                                        <Image
                                            src="/Images/ShareIcon.png"
                                            alt="compartir"
                                            width={15}
                                            height={15}
                                            className="cursor-pointer max-w-none"
                                        />
                                    </button>
                                    <button
                                        onClick={() => {
                                            setModalResultsStates({
                                                ...modalResultsStates,
                                                [sala.roomId]: true,
                                            });
                                        }}
                                    >
                                        <Image
                                            src="/Images/info.svg"
                                            width={22}
                                            height={22}
                                            className="cursor-pointer max-w-none"
                                        />
                                    </button>
                                </div>
                                <ModalGeneral
                                    state={
                                        modalResultsStates[sala.roomId] || false
                                    } // Usar el estado correspondiente a la sala
                                    changeState={(newState) =>
                                        setModalResultsStates({
                                            ...modalResultsStates,
                                            [sala.roomId]: newState, // Actualizar el estado específico de la sala
                                        })
                                    }
                                >
                                    <ModalResults
                                        roomId={sala.roomId}
                                        problem={sala.problem}
                                        participants={sala.participants.length}
                                    />
                                </ModalGeneral>
                            </div>
                        ))}
                    </div>
                </div>}
                <ModalGeneral state={deleteModal} changeState={setDeleteModal}>
                    <ModalEliminarSala
                        code={code}
                        title={title}
                        state={deleteModal}
                        changeState={setDeleteModal}
                    />
                </ModalGeneral>

                <ModalGeneral state={shareModal} changeState={setShareModal}>
                    <ModalCopiar
                        image={"/Images/ShareIcon.png"}
                        title="Comparte la sala con tus amigos"
                        content="Código: "
                        code={code}
                    />
                </ModalGeneral>
            </div>
        </>
    );
};

export default Votaciones;
