import React from 'react'
import ModalSalaEliminada from "./ModalSalaEliminada";
import ModalGeneral from '@/containers/ModalGeneral';

export default function ModalEliminarSala({state, changeState}) {

    const [outputDelete, setOutputDelete] = React.useState(false)

    return (
        <div className='flex justify-center'>
            <div className='flex flex-col  items-center p-6 pb-10'>
                <div className='items-center flex flex-col p-6 pb-0 pt-0 text-center'>
                    <p>¿Estás seguro de que deseas eliminar la sala <br /> <span className="font-bold">  029484 - Viaje   |    Mar del Plata </span> ? </p>
                </div>
                <div className="mt-8 flex gap-6">
                    <button 
                        className="rounded-full bg-slate-400 px-4 py-2 text-secondaryWhite"
                        onClick={() => changeState(!state)}
                    >
                        CANCELAR
                    </button>
                    <button 
                        className="rounded-full bg-red-500 px-4 py-2 text-secondaryWhite" 
                        onClick = {() => setOutputDelete(!outputDelete)}
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