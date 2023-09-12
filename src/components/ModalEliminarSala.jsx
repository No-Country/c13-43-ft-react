import React from 'react'
import ModalSalaEliminada from "./ModalSalaEliminada";
import ModalGeneral from '@/containers/ModalGeneral';
import Loader from '@/components/Loader';
import { APIDeleteRoom } from '@/lib/APICalls';

export default function ModalEliminarSala({code, title, state, changeState}) {

    const [outputDelete, setOutputDelete] = React.useState(false)
    const [loaderActive, setLoaderActive] = React.useState(false)

    const handleDelete = async() => {
        setLoaderActive(true)
        await APIDeleteRoom(code)
        setLoaderActive(false)
        setOutputDelete(!outputDelete)
        location.reload()
    }           // --> Ayuda para cerrar ambos modales

    return (
        <>
            <Loader active={loaderActive} />
            <div className='flex justify-center'>
                <div className='flex flex-col  items-center p-6 gap-4'>
                    <h1 className='font-bold text-3xl text-primaryPurple'>Eliminar la sala</h1>
                    <div className='items-center flex flex-col p-6 pb-0 pt-0 text-center'>
                        <p>¿Estás seguro de que deseas eliminar la sala <br /> <span className="font-bold"> {`${code} - ${title}`}</span> ? </p>
                    </div>
                    <div className="mt-4 flex justify-center gap-6">
                        <button 
                            className="font-semibold rounded-full w-45  bg-red-600 px-4 py-2 text-secondaryWhite" 
                            onClick = {() => changeState(!state)}
                        >
                            CANCELAR
                        </button>
                        <button 
                            className="font-semibold rounded-full w-45 first-letter: bg-slate-300 px-4 py-2 text-primaryPurple"
                            onClick={handleDelete}
                        >
                            CONFIRMAR
                        </button>
                    </div>
                </div>
                <ModalGeneral state = { outputDelete } changeState = { setOutputDelete }>
                    <ModalSalaEliminada code={code} />
                </ModalGeneral>
            </div>
        </>
    )
}