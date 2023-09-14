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
