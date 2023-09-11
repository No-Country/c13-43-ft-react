"use client";
import React, { useEffect, useState } from "react";
import { VoteOptions } from "./VoteOptions";
import { APIGetInRoom } from "@/lib/APICalls";
import Loader from "./Loader";

export const ModalChooseTime = ({ code, callback }) => {

  const [roomInfo, setRoomInfo] = useState({});
  const [loaderActive, setLoaderActive] = useState(false);

  const opciones = [
    { id: 1, opcion: "Viernes 20 de septiembre - 22h" },
    { id: 2, opcion: "Sabado 21 de septiembre - 22h" },
    { id: 3, opcion: "Domimngo 22 de Septiembre - 22h" },
    { id: 4, opcion: "Domingo 27 de Septiembre - 22h" },
  ];

  const testFunction = () => {
    setLoaderActive(true)
    setTimeout(() => {
      setLoaderActive(false)
      callback();
    }, 2000);
  };

  useEffect(() => {
    const getRoomData = async (codeRoom) => {
      try {
        const data = await APIGetInRoom(codeRoom);
        setRoomInfo(data.roomData);
      } catch (error) {
        console.error(error);
      }
    };

    if (code !== "") {
      getRoomData(code);
    }
  }, [code]);

  return (
    <>
      <Loader active={loaderActive} />
      <div className="px-6">
        <h1 className="text-primaryPurple text-5xl font-bold font-dmsans flex justify-center">
          {" "}
          Tiempo de elegir!{" "}
        </h1>
        <p className="text-secondaryBlack font-dmsans flex justify-center my-4">
          {" "}
          Te han invitado a votar: <b> &nbsp; {roomInfo.problem} </b>{" "}
        </p>
        <div className="flex gap-2">
          <span className="text-secondaryBlack font-dmsans font-medium">
            ESTADO
          </span>
          <div className="flex justify-center items-center rounded-full bg-slate-300 w-20 gap-2 h-6 cursor-pointer">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <button className="text-xs">Activa</button>
          </div>
        </div>
        <main className="mt-2">
          {opciones.map((option) => (
            <VoteOptions key={option.id} options={option} />
          ))}

          <div className="flex justify-center items-center mt-8">
            <button
              className="bg-primaryPurple text-white font-semibold rounded-3xl px-4 py-2"
              onClick={testFunction}
            >
              Enviar votación
            </button>
          </div>
        </main>
      </div>
    </>
  );
};
