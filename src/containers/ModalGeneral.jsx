// Descripción: El componente ModalGeneral es una ventana emergente reutilizable que se utiliza en la aplicación web para mostrar contenido adicional o opciones al usuario. 
// Puede contener diferentes tipos de contenido, como formularios, mensajes de confirmación o detalles adicionales.

// Funcionamiento:

// El componente acepta tres propiedades: children, state y changeState.
// children: Permite incluir cualquier contenido deseado dentro del modal. Puede ser cualquier elemento o componente que se desee mostrar al usuario.
// state: Un valor booleano que determina si el modal está activado o desactivado. Cuando state es true, se muestra el modal; cuando es false, se oculta.
// changeState: Una función que se utiliza para cambiar el estado del modal. Cuando se llama a esta función con un valor opuesto al estado actual, el modal se activa o desactiva

import Image from "next/image";
import React from "react";

const ModalGeneral = ({ children, state, changeState }) => {
  return (
    <>
      {state && (
        <div className="w-screen h-screen flex items-center justify-center fixed top-0 left-0 backdrop-blur-sm z-10">
          <main className="mx-4 sm:mx-0 min-h-fit min-w-fit w-full sm:w-4/5 md:w-3/5 xl:w-2/5 h-auto relative rounded-3xl shadow bg-secondaryWhite dark:bg-darkBlack dark:border dark:border-white  py-4 sm:py-2">
            <button
              className="absolute top-0 pt-3 pr-3 right-0 cursor-pointer"
              onClick={() => changeState(!state)}
            >
              <Image
                src="/Images/closeIcon.png"
                width={25}
                height={25}
                alt="cerrar"
              />
            </button>
            <div className="h-full w-full p-4">{children}</div>
          </main>
        </div>
      )}
    </>
  );
};

export default ModalGeneral;
