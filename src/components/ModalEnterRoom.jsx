"use client";
import { useState } from "react";
import Loader from "./Loader";
import { APICheckRoomStatus } from "@/lib/APICalls";

export const ModalEnterRoom = (callback) => {
  const [loaderActive, setLoaderActive] = useState(false);
  const [error, setError] = useState(false)

  const handelSubmit = async (event) => {
    event.preventDefault();
    setLoaderActive(true);
    const data = new FormData(event.currentTarget);
    const roomCode = data.get("code");
    const expiredRom = await APICheckRoomStatus(roomCode);
    console.log('expiracion total: ' + expiredRom);
    if (!expiredRom.expired) {
      setLoaderActive(false);
      callback.callback(roomCode);
    } else {
      setLoaderActive(false);
      setError(true);
    }
  };

  return (
    <main>
      <Loader active={loaderActive} />
      <div className="px-4">
        <h1 className="text-primaryPurple font-dmsans font-bold text-3xl mb-4 text-center">
          {" "}
          Entrar a la sala{" "}
        </h1>
        <form onSubmit={handelSubmit}>
          <div className="mt-10">
            <label
              className=" font-dmsans font-medium"
              htmlFor="code"
            >
              {" "}
              NOMBRE DE LA SALA O CÓDIGO{" "}
            </label>
            <input
              className="w-full border-b rounded-lg border-secondaryBlack bg-slate-50 dark:bg-darkNav px-2 h-8"
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
              Entrar →
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

//Linea 46 onClick={() => setChooseTime(!chooseTime)}
