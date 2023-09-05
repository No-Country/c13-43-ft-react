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
        state = { stateModalJoin }
        changeState = { setStateModalJoin }>     
        {/*Reemplazar por el modal correcto*/}
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
