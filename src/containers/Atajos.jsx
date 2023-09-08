"use client";
import React, { useState } from "react";
import OptionCard from "../components/OptionCard";
import ModalCreate from "@/components/ModalCreate";
import ModalGeneral from "./ModalGeneral";
import { ModalEnterRoom } from "@/components/ModalEnterRoom";
import { ModalChooseTime } from "@/components/ModalChooseTime";
import { ModalVoteDone } from "@/components/ModalVoteDone";

const Atajos = () => {
  const [stateModalCreate, setStateModalCreate] = React.useState(false);
  const [enterRoom, setEnterRoom] = useState(false);
  const [chooseTime, setChooseTime] = useState(false);
  const [voteDone, setVoteDone] = useState(false);
  const [code, setCode] = useState("");

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
        <ModalCreate
          state={stateModalCreate}
          changeState={setStateModalCreate}
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

//<ModalGeneral state={modalActive} changeState={setModalActive}>
//        <ModalChooseTime code={"484848"} />
//      </ModalGeneral>
//
//      <ModalGeneral state={modalActive} changeState={setModalActive}>
//        <ModalVoteDone roomCode={"484848"} />
//      </ModalGeneral>
