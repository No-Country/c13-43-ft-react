"use client";
import React from "react";
import Image from "next/image";
import { APIGetMyRooms } from "@/lib/APICalls";
import { useSession } from "next-auth/react";
import ModalGeneral from "@/containers/ModalGeneral";
import ModalEliminarSala from "./ModalEliminarSala";
import ModalCopiar from "./ModalCopiar";
import Loader from "./Loader";
//con session traer el email del usuario
//Con un api Call traer mis room en principio y si se llega traer las que he participado

const Votaciones = () => {
    const { data: session } = useSession();
    const [rooms, setRooms] = React.useState([]);
    const [code, setCode] = React.useState(0);
    const [title, setTitle] = React.useState("");
    const [deleteModal, setDeleteModal] = React.useState(false);
    const [shareModal, setShareModal] = React.useState(false);
    const [loaderActive, setLoaderActive] = React.useState(false);
    const [search, setSearch] = React.useState("");

    const historiaPromise = APIGetMyRooms(session.user.email);

    React.useEffect(() => {
        setLoaderActive(true);

        historiaPromise.then((historia) => {
            setRooms(historia.combinedRooms);

            if (historia.combinedRooms) {
                setLoaderActive(false);
            }
        });
    }, [historiaPromise]);

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
            {/* <Loader active={loaderActive} /> */}
            <div className="xl:w-3/4 mt-6 font-dmsans mx-4 sm:mx-0 sm:py-5">
                <h1 className="ml-6 mb-4 text-4xl font-bold">Votaciones</h1>
                <div className=" flex flex-col bg-secondaryGray pt-6 xl:w-11/12 shadow rounded-4xl">
                    <div className="pb-10 flex flex-col items-center">
                        <form className="bg-primaryOrange rounded-full flex items-center h-8 justify-around px-2 w-1/2 shadow">
                            <input
                                type="text"
                                name="busqueda"
                                placeholder="Buscar sala"
                                className="busqueda bg-primaryOrange text-secondaryWhite mx-2 placeholder-white text-xs focus:outline-none w-full"
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
                    <div className="flex gap-4 pl-10 py-5">
                        <div className="flex justify-center items-center rounded-full bg-slate-300 gap-2 w-24 h-6 cursor-pointer">
                            <div className="w-4 h-4 bg-green-500 rounded-full shadow"></div>
                            <button className="text-xs">Activas</button>
                        </div>
                        <div className="flex justify-center items-center rounded-full bg-slate-300 gap-2 w-24 h-6 cursor-pointer">
                            <div className="w-4 h-4 bg-red-500 rounded-full shadow"></div>
                            <button className="text-xs">Inactivas</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 px-8 pb-10 h-44 py-2 overflow-y-auto mb-2">
                        {filteredRooms.map((sala, index) => (
                            <div
                                className="flex gap-8 sm:gap-4 justify-between items-center"
                                key={index}
                            >
                                <div
                                    className={`w-4 h-3 mx-4 ${
                                        !sala.expired
                                            ? "bg-green-500"
                                            : "bg-red-500"
                                    } rounded-full`}
                                ></div>
                                <p className="text-xs text-start w-full">
                                    {`${sala.roomId} - ${
                                        sala.problem
                                    } | ${winnerPercent(
                                        sala.options
                                    )}% Votó: ${winnerOption(sala.options)}`}
                                </p>
                                <div className="flex justify-end w-1/4 gap-4 items-center">
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
                                                alt="corona"
                                                width={20}
                                                height={20}
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
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
