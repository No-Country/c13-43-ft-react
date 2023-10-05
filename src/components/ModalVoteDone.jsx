// Descripción: Este componente representa un modal que se muestra cuando un usuario ha completado una 
// votación en una sala. Muestra un ícono de verificación, un mensaje de confirmación y la información de la 
//  sala en la que se realizó la votación.

// Funcionamiento: Cuando se muestra este componente, se presenta un mensaje de confirmación de que la votación 
// se ha completado con éxito. También se muestra un ícono de verificación verde para indicar que la operación se ha 
// completado con éxito. Además, se muestra la información de la sala en la que se realizó la votación, incluido el 
// código de la sala. Es una confirmación visual para el usuario de que su voto se ha registrado con éxito en la sala 
// especificada.


import Image from "next/image";
import React from "react";

export const ModalVoteDone = ({ roomCode }) => {
  return (
    <main className="p-6">
      <div className="flex items-center justify-center">
        <Image src="/Images/check.png" alt="check" width={50} height={50} className="mb-6" />
      </div>
      <h1 className="text-primaryPurple font-dmsans font-bold text-3xl mb-4 text-center">
        {" "}
        Votación realizada con éxito{" "}
      </h1>
      <span className="flex justify-center">
        Votaste en la sala:<b>&nbsp; {roomCode} </b>
      </span>
    </main>
  );
};
