"use client";
import React from "react";
import Atajos from "@/containers/Atajos";
import Resultados from "@/components/Resultados";
import SinVotaciones from "@/components/SinVotaciones";

export default function Panel() {

  return (
    <div className="flex flex-col items-center test:items-start test:flex-row justify-around xl:justify-end mt-16 xl:mr-40">
      {true ? <Resultados /> : <SinVotaciones />}
      <div className='mt-5'>
        <Atajos />
      </div>
    </div>
  );
}
