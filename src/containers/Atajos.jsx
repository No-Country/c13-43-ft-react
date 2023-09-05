"use client"
import React from "react";
import ModalGeneral from "./ModalGeneral";
import OptionCard from "../components/OptionCard";
import ModalCreate from "@/components/ModalCreate";

const Atajos = () => {

  const [stateModalJoin, setStateModalJoin] = React.useState(false);
  const [stateModalCreate, setStateModalCreate] = React.useState(false);

  return (
    <div className="w-fit box-border p-4 flex-col  rounded-3x1">
      <h2 className="font-dmsans text-secondaryBlack text-3xl mt-1.5 mb-4 font-semibold">
        Atajos
      </h2>
      <div className="flex-col items-center justify-center">
        <OptionCard
          text={"Entrar a sala"}
          details={"15 min. ago"}
          image={"/Images/avatar/uno.png"}
          action = {() => setStateModalJoin(!stateModalJoin)}
        />
        <OptionCard
          text={"Crear sala"}
          details={"15 min. ago"}
          image={"/Images/sinvotaciones/sinvotaciones-ImagePlaceholder.png"}
          action = {() => setStateModalCreate(!stateModalCreate)}
        />
      </div>
      <ModalGeneral
        state = { stateModalJoin }
        changeState = { setStateModalJoin }>     {/*Reemplazar por el modal correcto*/}
      </ModalGeneral>
      <ModalGeneral
        state = { stateModalCreate }
        changeState = { setStateModalCreate }>
        <ModalCreate 
          state = { stateModalCreate }
          changeState = { setStateModalCreate }
        />
      </ModalGeneral>
    </div>
  );
};

export default Atajos;
