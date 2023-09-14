// Descripción: El componente Atajos es una parte de la aplicación web que proporciona atajos a las funcionalidades clave. 
// Permite a los usuarios acceder rápidamente a opciones como entrar a una sala existente o crear una nueva sala de votación.

// Funcionamiento: Cuando un usuario interactúa con los atajos, se activan distintos modales, cada uno con una función 
// específica:

// Al seleccionar "Entrar a sala", se abre un modal que permite al usuario ingresar un código de sala para unirse a 
// una votación existente.
// Al seleccionar "Crear sala", se abre un modal que guía al usuario a través del proceso de creación de una nueva sala 
// de votación. Una vez que se completa la creación con éxito, se muestra un mensaje de confirmación con un código de sala.

"use client";
import React, { useState } from "react";
import OptionCard from "../components/OptionCard";
import ModalCreate from "@/components/ModalCreate";
import ModalGeneral from "./ModalGeneral";
import { ModalEnterRoom } from "@/components/ModalEnterRoom";
import { ModalChooseTime } from "@/components/ModalChooseTime";
import { ModalVoteDone } from "@/components/ModalVoteDone";
import ModalCopiar from "@/components/ModalCopiar";
import { ModalVoteFail } from "@/components/ModalVoteFail";

const Atajos = () => {
    const [stateModalCreate, setStateModalCreate] = React.useState(false);
    const [enterRoom, setEnterRoom] = useState(false);
    const [chooseTime, setChooseTime] = useState(false);
    const [voteDone, setVoteDone] = useState(false);
    const [voteFail, setVoteFail] = useState(false);
    const [creadoExitoso, setCreadoExitoso] = useState(false);
    const [code, setCode] = useState("");
    const [shareCode, setShareCode] = useState("");

    const closeModalCreate = (callbackCode) => {
        setStateModalCreate(!stateModalCreate);
        setShareCode(callbackCode);
        setCreadoExitoso(!creadoExitoso);
    };

    const closeEnterRoomModal = (callbackCode) => {
        setEnterRoom(!enterRoom);
        setCode(callbackCode);
        setChooseTime(!chooseTime);
    };

    const closeChooseTimeModal = (todoOk) => {
        setChooseTime(!chooseTime);
        console.log(todoOk);
        if (todoOk) {
            setVoteDone(!voteDone);
        } else {
            setVoteFail(!voteFail);
        }
    };

    return (
        <div className="w-fit box-border p-4 flex-col  rounded-3x1">
            <h2 className="font-dmsans text-3xl mt-1.5 mb-4 font-semibold">
                Atajos
            </h2>
            <div className="flex-col items-center justify-center">
                <OptionCard
                    action={() => setEnterRoom(!enterRoom)}
                    text={"Entrar a sala"}
                    image={"/Images/atajos/atajo-1.png"}
                />
                <OptionCard
                    text={"Crear sala"}
                    image={"/Images/atajos/atajo-2.png"}
                    action={() => setStateModalCreate(!stateModalCreate)}
                />
            </div>

            <ModalGeneral
                state={stateModalCreate}
                changeState={setStateModalCreate}
            >
                <ModalCreate callback={closeModalCreate} />
            </ModalGeneral>

            <ModalGeneral state={creadoExitoso} changeState={setCreadoExitoso}>
                <ModalCopiar
                    image={"/Images/CheckIcon.png"}
                    title={"Sala creada con éxito!"}
                    content={"Tu código de sala es:"}
                    code={shareCode}
                />
            </ModalGeneral>

            <ModalGeneral state={enterRoom} changeState={setEnterRoom}>
                <ModalEnterRoom callback={closeEnterRoomModal} />
            </ModalGeneral>

            <ModalGeneral state={chooseTime} changeState={setChooseTime}>
                <ModalChooseTime code={code} callback={closeChooseTimeModal} />
            </ModalGeneral>

            <ModalGeneral state={voteDone} changeState={setVoteDone}>
                <ModalVoteDone roomCode={code} />
            </ModalGeneral>

            <ModalGeneral state={voteFail} changeState={setVoteFail}>
                <ModalVoteFail />
            </ModalGeneral>
        </div>
    );
};

export default Atajos;
