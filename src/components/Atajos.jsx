import React from "react";

const OptionCard = ({ text, details, image }) => {
    return (
    <div className="flex w-72 bg-terciaryWhite shadow p-4 rounded-3xl mb-4">
        <div className="h-20 w-20 flex items-center justify-center bg-blue-600 rounded-3xl">
        <img src={image} alt="algo" />
        </div>
        <div className="h-20 w-3/5 flex flex-col items-center justify-center font-dmsans">
        <h4 className="text-md">{text}</h4>
        <p className="text-xs">{details}</p>
        </div>
    </div>
    );
};

const Atajos = () => {
    return (
    <div className="w-fit box-border p-4 flex-col  rounded-3x1">
        <h2 className="font-dmsans text-secondaryBlack text-2xl mt-1.5 mb-4 font-semibold">
        Atajos
        </h2>
        <div className="flex-col items-center justify-center">
        <OptionCard
            text={"Entrar a sala"}
            details={"15 min. ago"}
            image={"/Images/resultados/resultados-ImagePlaceholder.png"}
        ></OptionCard>
        <OptionCard
            text={"Crear sala"}
            details={"15 min. ago"}
            image={"/Images/resultados/resultados-ImagePlaceholder.png"}
        ></OptionCard>
        </div>
    </div>
    );
};

export default Atajos;
