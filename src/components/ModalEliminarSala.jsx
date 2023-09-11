import React from 'react'
import ModalSalaEliminada from "./ModalSalaEliminada";
import ModalGeneral from '@/containers/ModalGeneral';

export default function ModalEliminarSala({state, changeState}) {

    const [outputDelete, setOutputDelete] = React.useState(false)

    return (
        <div className='flex justify-center'>
            <div className='flex flex-col  items-center p-6 gap-4'>
                <h1 className='font-bold text-3xl text-primaryPurple'>Eliminar la sala</h1>
                <div className='items-center flex flex-col p-6 pb-0 pt-0 text-center'>
                    <p>¿Estás seguro de que deseas eliminar la sala <br /> <span className="font-bold">  029484 - Viaje   |    Mar del Plata </span> ? </p>
                </div>
                <div className="mt-4 flex justify-center gap-6">
                    <button 
                        className="font-semibold rounded-full w-45  bg-red-600 px-4 py-2 text-secondaryWhite" 
                        onClick = {() => setOutputDelete(!outputDelete)}
                    >
                        CANCELAR
                    </button>
                    <button 
                        className="font-semibold rounded-full w-45 first-letter: bg-slate-300 px-4 py-2 text-primaryPurple"
                        onClick={() => changeState(!state)}
                    >
                        CONFIRMAR
                    </button>
                </div>
            </div>
            <ModalGeneral state = { outputDelete } changeState = { setOutputDelete }>
                <ModalSalaEliminada />
            </ModalGeneral>
        </div>
)
}