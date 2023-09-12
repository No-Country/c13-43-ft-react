"use client";
import { useState } from "react";
import Loader from "./Loader";
import { APICheckRoomStatus } from "@/lib/APICalls";

export const ModalEnterRoom = (callback) => {
  const [ loaderActive, setLoaderActive ] = useState( false );
  const [error, setError] = useState( false )

  const handelSubmit = async (event) => {
    event.preventDefault();
    setLoaderActive( true );
    const data = new FormData(event.currentTarget);
    const roomCode = data.get("code");
    const expiredRom = await APICheckRoomStatus( roomCode );
    console.log('expiracion total: '+ expiredRom);
    if(!expiredRom.expired){
      setLoaderActive( false );
      callback.callback(roomCode);
    }else{
      setLoaderActive( false );
      setError(true);
    }
  };

  return (
    <main>
      <Loader active ={ loaderActive }/>
      <h1 className="text-primaryPurple text-5xl font-bold font-dmsans flex justify-center">
        {" "}
        Entrar a la sala{" "}
      </h1>
      <form onSubmit={handelSubmit}>
        <div className="mt-10">
          <label
            className="text-secondaryBlack font-dmsans font-medium"
            htmlFor="code"
          >
            {" "}
            NOMBRE DE LA SALA O CODIGO{" "}
          </label>
          <input
            className="w-full border-b border-secondaryBlack bg-slate-50 outline-none "
            type="text"
            name="code"
            id="code"
          />
        </div>

          {error && (
            <p className="font-medium font-dmsans text-center text-red-600 my-6"> Sala vencida o no existe </p>
          )}

          <div className="flex justify-center items-center mt-6">
            <button className="bg-primaryPurple text-white font-semibold rounded-3xl px-4 py-2">
              Empezar →
            </button>
          </div>
        </form>
      </main>
  );
};

//Linea 46 onClick={() => setChooseTime(!chooseTime)}
