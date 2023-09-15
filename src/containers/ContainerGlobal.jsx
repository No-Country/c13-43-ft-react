// Descripción: Este container da formato a cada uno de los componentes que recibe como hijo, para unificar los aspectos
// dentro de la aplicación y ser más agradable a la vista.

import React from "react";

const ContainerGlobal = ({children}) => {
    return (
        <div className="container-global">
            {children}
        </div>
    )
}

export default ContainerGlobal;