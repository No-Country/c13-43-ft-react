// Descripción: El componente "Options" se utiliza para mostrar información detallada sobre una opción en una votación.
// Recibe como propiedades el nombre de la opción, el porcentaje de votos que ha recibido y la cantidad de votos que ha 
// obtenido en relación al total de participantes en la votación.

// Funcionamiento: El componente renderiza el nombre de la opción y crea una barra de progreso que representa el 
// porcentaje de votos que ha recibido esa opción. También muestra la cantidad de votos específicos que ha obtenido 
// y la cantidad total de participantes que han votado en la elección. Esto permite a los usuarios ver fácilmente la 
// popularidad de cada opción en la votación.

import React from "react";

const Options = ({ opcion, percentage, timesVoted, participants }) => {
    return (
        <div className="w-full mb-5">
            <div className="flex mb-3">
                <p className="font-semibold">{opcion}</p>
            </div>
            <div className="w-full h-2 border border-primaryPurple rounded mb-2">
                <div
                    className="h-full bg-primaryPurple rounded"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <p className="text-sm">
                {timesVoted} de {participants} votaron esta opción{" "}
            </p>
        </div>
    );
};

export default Options;
