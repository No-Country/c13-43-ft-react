import React from "react";

const OptionCard = ({ text, details, image }) => {
  return (
    <div className="flex w-72 bg-white p-4 rounded-3xl mb-4">
      <div className="h-20 w-20 flex items-center justify-center bg-blue-600 rounded-3xl">
        <img src={image} alt="" />
      </div>
      <div className="h-20 w-3/5 flex flex-col items-center justify-center font-dmsans">
        <h4 className="text-lg">{text}</h4>
        <p className="text-sm">{details}</p>
      </div>
    </div>
  );
};

const Atajos = () => {
  return (
    <div className="w-fit box-border p-4 flex-col  rounded-3x1">
      <h2 className="font-dmsans text-secondaryBlack text-3xl my-1.5">
        Atajos
      </h2>
      <div className="flex-col items-center justify-center">
        <OptionCard
          text={"Entrar a sala"}
          details={"15 min. ago"}
          image={"test"}
        ></OptionCard>
        <OptionCard
          text={"Crear sala"}
          details={"15 min. ago"}
          image={"test"}
        ></OptionCard>
      </div>
    </div>
  );
};

export default Atajos;