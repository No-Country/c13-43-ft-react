import Image from "next/image";
import React from "react";

export const ModalVoteDone = ({ roomCode }) => {
  return (
    <main className="p-6">
      <div className="flex items-center justify-center">
        <Image src="/Images/check.png" alt="check" width={50} height={50} />
      </div>
      <h1 className="text-primaryPurple text-3xl text-center font-bold font-dmsans flex justify-center my-6">
        {" "}
        Votación realizada con exito{" "}
      </h1>
      <span className="flex justify-center">
        Votaste en la sala<b>&nbsp; {roomCode} </b>
      </span>
    </main>
  );
};
