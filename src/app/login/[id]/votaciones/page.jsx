// Descripción: Corresponde a la ruta votaciones, es la ruta donde se muestra el historial de salas creadas y participadas
// con algunoos íconos para interactuar con la aplicación

import React from "react";
import Votaciones from "@/components/Votaciones";

const VotacionesPage = () => {

    return (
        <div className="w-full xl:w-full flex test:justify-center absolute right-0 mt-20 xl:mt-10">
            <Votaciones />
        </div>
    )
}

export default VotacionesPage;
