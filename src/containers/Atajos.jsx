import React from "react";
import OptionCard from "../components/OptionCard";

const Atajos = () => {
  return (
    <div className="w-fit box-border p-4 flex-col  rounded-3x1">
      <h2 className="font-dmsans text-secondaryBlack text-3xl mt-1.5 mb-4 font-semibold">
        Atajos
      </h2>
      <div className="flex-col items-center justify-center">
        <OptionCard
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
    </div>
  );
};

export default Atajos;
