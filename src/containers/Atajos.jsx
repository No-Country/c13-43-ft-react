'use client'
import React, { useState } from "react";
import OptionCard from "../components/OptionCard";
import ModalGeneral from "./ModalGeneral";
import { ModalEnterRoom } from "@/components/ModalEnterRoom";

const Atajos = () => {
  const [enterRoom, setEnterRoom] = useState( false );

  return (
    <div className="w-fit box-border p-4 flex-col  rounded-3x1">
      <h2 className="font-dmsans text-secondaryBlack text-3xl mt-1.5 mb-4 font-semibold">
        Atajos
      </h2>
      <div className="flex-col items-center justify-center">
        <OptionCard
          onClick={() => setEnterRoom( !enterRoom )}
          text={"Entrar a sala"}
          details={"15 min. ago"}
          image={"/test"}
        />
        <OptionCard
          text={"Crear sala"}
          details={"15 min. ago"}
          image={"/test"}
        />
      </div>
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
