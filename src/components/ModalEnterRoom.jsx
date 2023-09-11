"use client";
import React from 'react';
import Loader from './Loader';

export const ModalEnterRoom = (callback) => {

  const [loaderActive, setLoaderActive] = React.useState(false)

  const handelSubmit = async (event) => {
    setLoaderActive(true)
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setTimeout(() => {
      setLoaderActive(false)
      const roomCode = data.get("code");
      callback.callback(roomCode);
    }, 3500);
  };

  return (
    <>
      <Loader active={loaderActive} />
      <main className="p-6">
        <h1 className="text-primaryPurple text-5xl font-bold font-dmsans flex justify-center">
          {" "}
          Entrar a la sala{" "}
        </h1>
        <form onSubmit={handelSubmit}>
          <div className="my-10">
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

          <div className="flex justify-center items-center">
            <button className="bg-primaryPurple text-white font-semibold rounded-3xl px-4 py-2">
              Empezar →
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

//Linea 46 onClick={() => setChooseTime(!chooseTime)}
