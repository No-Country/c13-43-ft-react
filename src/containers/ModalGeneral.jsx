import Image from "next/image";
import React from "react";

const ModalGeneral = ({ children, state, changeState }) => {
  return (
    <>
      {state && (
        <div className="w-screen h-screen flex items-center justify-center fixed top-0 left-0 backdrop-blur-sm">
          <main className="modalGeneral w-2/5 h-auto relative rounded shadow-lg bg-secondaryWhite py-12">
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
            <div className="h-full w-full px-12">{children}</div>
          </main>
        </div>
      )}
    </>
  );
};

export default ModalGeneral;
