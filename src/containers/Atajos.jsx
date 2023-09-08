"use client";
import Image from "next/image";
import React, { useState } from "react";
import OptionCard from "../components/OptionCard";
import ModalCreate from "@/components/ModalCreate";
import ModalGeneral from "./ModalGeneral";
import { ModalEnterRoom } from "@/components/ModalEnterRoom";
import { ModalChooseTime } from "@/components/ModalChooseTime";
import { ModalVoteDone } from "@/components/ModalVoteDone";
import ModalCopiar from "@/components/ModalCopiar";

const Atajos = () => {
  const [stateModalCreate, setStateModalCreate] = React.useState(false);
  const [enterRoom, setEnterRoom] = useState(false);
  const [createRoom, setCreateRoom] = useState(false);
  const [chooseTime, setChooseTime] = useState(false);
  const [voteDone, setVoteDone] = useState(false);
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

  const closeChooseTimeModal = () => {
    setChooseTime(!chooseTime);
    setVoteDone(!voteDone);
  };

  return (
    <div className="w-fit box-border p-4 flex-col  rounded-3x1">
      <h2 className="font-dmsans text-secondaryBlack text-3xl mt-1.5 mb-4 font-semibold">
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

      <ModalGeneral state={stateModalCreate} changeState={setStateModalCreate}>
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
    </div>
  );
};

export default Atajos;
