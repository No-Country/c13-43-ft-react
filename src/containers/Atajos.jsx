'use client'
import React, { useState } from "react";
import OptionCard from "../components/OptionCard";
import ModalCreate from "@/components/ModalCreate";
import ModalGeneral from "./ModalGeneral";
import { ModalEnterRoom } from "@/components/ModalEnterRoom";

const Atajos = () => {

  const [stateModalCreate, setStateModalCreate] = React.useState(false);
  const [enterRoom, setEnterRoom] = useState( false );

  return (
    <div className="w-fit box-border p-4 flex-col  rounded-3x1">
      <h2 className="font-dmsans text-secondaryBlack text-3xl mt-1.5 mb-4 font-semibold">
        Atajos
      </h2>
      <div className="flex-col items-center justify-center">
        <OptionCard
          action={() => setEnterRoom( !enterRoom )}
          text={"Entrar a sala"}
          details={"15 min. ago"}
          image={"/Images/atajos/atajo-1.png"}
        />
        <OptionCard
          text={"Crear sala"}
          details={"15 min. ago"}
          image={"/Images/atajos/atajo-2.png"}
          action = {() => setStateModalCreate(!stateModalCreate)}
        />
      </div>
      <ModalGeneral
        state = { stateModalCreate }
        changeState = { setStateModalCreate }>
        <ModalCreate 
          state = { stateModalCreate }
          changeState = { setStateModalCreate }
        />
      </ModalGeneral>
      <ModalGeneral
        state = { enterRoom }
        changeState = { setEnterRoom }
      >
        <ModalEnterRoom/>
      </ModalGeneral>
    </div>
  );
};

export default Atajos;
