"use client";
import React, { useEffect, useState } from "react";
import { VoteOptions } from "./VoteOptions";
import { APIGetInRoom } from "@/lib/APICalls";

export const ModalChooseTime = ({ code, callback }) => {
  const [roomInfo, setRoomInfo] = useState({});
  const [titleOptions, setTitleOptions] = useState([]);
  
  const testFunction = () => {
    callback();
  };

  useEffect(() => {
    const getRoomData = async (codeRoom) => {
      try {
        const data = await APIGetInRoom(codeRoom);
        setRoomInfo(data.roomData);
        setTitleOptions(Object.values(data.roomData.options).map(option => option.title));
      } catch (error) {
        console.error(error);
      }
    };

    if (code !== "") {
      getRoomData(code);
    }
  }, [code]);

  return (
    <div>
      <h1 className="text-primaryPurple text-center text-5xl font-bold font-dmsans flex justify-center">
        {" "}
        Tiempo de elegir!{" "}
      </h1>
      <p className="text-secondaryBlack text-center font-dmsans flex justify-center my-4">
        {" "}
        Te han invitado a votar: <b> &nbsp; { roomInfo.problem } </b>{" "}
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
      <form  className="mt-2">
        {
          titleOptions.map((title, index)=>(
            <VoteOptions key={ index } options={ title } />
          ))
        }

        <div className="flex justify-center items-center mt-8">
          <button
            className="bg-primaryPurple text-white font-semibold rounded-3xl px-4 py-2"
            onClick={testFunction}
          >
            Enviar votación
          </button>
        </div>
      </form>
    </div>
  );
};
