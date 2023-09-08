"use client";
import React, { useEffect, useState } from "react";
import { VoteOptions } from "./VoteOptions";
import { APIGetInRoom, APIVote } from "@/lib/APICalls";
import { useSession } from "next-auth/react";
import Loader from "./Loader";


export const ModalChooseTime = ({ code, callback }) => {
  const [ roomInfo, setRoomInfo ] = useState({});
  const [ titleOptions, setTitleOptions ] = useState([]);
  const { data: session } = useSession();
  const [ error, setError ] = useState( false );
  const [ loaderActive, setLoaderActive ] = useState( false );
  const userEmail = session.user?.email;

  useEffect(() => {
    const getRoomData = async (codeRoom) => {
      try {
        setLoaderActive( true );
        console.log('Loader activo');
        const data = await APIGetInRoom( codeRoom );
        setRoomInfo( data.roomData );
        setTitleOptions(Object.values(data.roomData.options).map(option => option));
        console.log('Loader desactivado');
        setLoaderActive( false );
      } catch (error) {
        console.error(error);
      }
    };

    if (code !== "") {
      getRoomData(code);
    }
  }, [code]);

  const getChooseOption = ( event ) =>{
    let opctionChoose;
    for (let index = 0; index < titleOptions.length; index++) {
      const name = index.toString();
      const element = event.target[ name ];
      if( element.checked ){
        setError(false);
        opctionChoose = element.value;
      }else{
        setError('Debes elegir una opción');
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
    }
    return opctionChoose;
  }

  const handleSubmit = async(event) =>{
    event.preventDefault();
    setLoaderActive( true );
    const opctionChoose = getChooseOption( event );
    const response = await APIVote( code, opctionChoose, userEmail );
    setLoaderActive( false );
    response ? callback() : console.log('Error de sintaxis');
  }

  return (
    <div>
      <Loader active ={ loaderActive }/>
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
      <form onSubmit={ handleSubmit } className="mt-2">
        {
          titleOptions.map((option)=>(
            <VoteOptions key={ option.id } options={ option.title } name={`value`} value={ option.id } />
          ))
        }

        <div className="my-2">
          {error && (
            <p className="font-medium font-dmsans text-red-600">{ error }</p>
          )}
        </div>

        <div className="flex justify-center items-center mt-8">
          <button className="bg-primaryPurple text-white font-semibold rounded-3xl px-4 py-2">
            Enviar votación
          </button>
        </div>
      </form>
    </div>
  );
};
