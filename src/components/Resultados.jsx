import React from "react";

const Resultados = () => {
    return (
        <div className="flex flex-col px-3 font-dmsans w-2/5">
            <div className="flex flex-col text-center sm:text-left pb-3 px-3">
                <h2 className="text-4xl font-bold text-secondaryBlack pt-3">Resultados</h2>
                <p className="text-sm md:text-md w-3/4 py-3">Acá los resultados de tu votación más reciente: &nbsp;
                    <b>Festejo de mi cumple 🎂 Cuento con ustedes!</b>
                </p>
            </div>
            <div className="flex justify-center sm:justify-normal">
                <div className="flex flex-col items-start bg-primaryPurple rounded-lg px-5 py-7 gap-5 min-w-fit">
                    <div>
                        <img className="w-1/2 md:w-9/12" src="../Images/resultados/resultados-ImagePlaceholder.png"/>
                    </div>
                    <span className="text-3xl md:text-4xl text-white font-bold">80%</span>
                    <p className="text-sm md:text-xl text-white font-bold">Sábado 21 de septiembre</p>
                </div>
                <div className="flex flex-col justify-center gap-8 px-5">
                    <div className="flex flex-col bg-secondaryWhite shadow p-3 rounded-lg">
                        <span className="text-3xl md:text-4xl text-primaryPurple font-bold">7</span>
                        <span className="text-sm md:text-xl text-primaryPurple font-bold">Comentarios</span>
                    </div>
                    <div className="flex flex-col shadow p-3 rounded-lg">
                        <span className="text-3xl md:text-4xl text-primaryPurple font-bold">20%</span>
                        <span className="text-sm md:text-xl text-primaryPurple font-bold">No asistiré</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center sm:justify-normal pt-8 ml-1">
                <button className="text-lg bg-primaryPurple text-white font-bold rounded-3xl px-4 py-2">Ver respuestas</button>
            </div>
        </div>
    )
}

export default Resultados;