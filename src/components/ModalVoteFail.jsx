// Descripción: Este componente representa un modal que se muestra cuando un usuario intenta votar en una sala donde 
// ya ha votado previamente o es el administrador de la sala. Muestra un ícono de advertencia,
//  un mensaje de error y una explicación de por qué no se puede realizar la votación.

// Funcionamiento: Cuando se muestra este componente, se presenta un mensaje de error en rojo indicando que el usuario 
// ya ha votado en esa sala o que es el administrador de la sala y no puede votar en su propia sala. Además, se muestra 
// un ícono de advertencia (un signo de exclamación) para indicar que se ha producido un error. Este componente sirve 
// para informar al usuario sobre la razón por la cual no se pudo realizar la votación y proporciona una retroalimentación 
// visual clara.

import Image from "next/image";
import React from "react";

export const ModalVoteFail = () => {
    return (
        <main className="p-6">
            <div className="flex items-center justify-center">
                <Image
                    src="/Images/exclamation.svg"
                    width={50}
                    height={50}
                    alt="cerrar"
                    className="mb-6"
                />
            </div>
            <h1 className="text-red-600 font-dmsans font-bold text-3xl mb-4 text-center">
                {" "}
                Ya has votado en esta sala o eres el administrador {" "}
            </h1>
        </main>
    );
};
