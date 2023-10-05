// Descripción: Este componente representa un modal que permite al usuario eliminar su cuenta. Al confirmar la 
// eliminación, se elimina la cuenta del usuario y se muestra un mensaje de confirmación.

// Funcionamiento: Cuando el usuario confirma la eliminación de su cuenta haciendo clic en "CONFIRMAR", se muestra 
// un indicador de carga (Loader) y se realiza una llamada a la API para eliminar la cuenta del usuario utilizando 
// la función handleDelete. Si la eliminación de la cuenta es exitosa, se muestra un mensaje de confirmación 
// (ModalCorrectDelete) y el usuario es redirigido a la página de inicio de sesión (signOut). Si el usuario cancela 
// la acción, el modal se cierra haciendo clic en "CANCELAR".

import React from 'react'
import Loader from './Loader'
import { signOut, useSession } from 'next-auth/react'
import { APIDeleteUser } from '@/lib/APICalls'
import ModalCorrectDelete from './ModalCorrectDelete'
import ModalGeneral from '@/containers/ModalGeneral'

const ModalEliminarCuenta = ({state, changeState}) => {

    const { data: session } = useSession()
    const [loaderActive, setLoaderActive] = React.useState(false)
    const [correctDelete, setCorrectDelete] = React.useState(false)

    const handleDelete = async() => {
        setLoaderActive(true)
        const deleteUser = await APIDeleteUser( session.user?.email );   
        if(deleteUser.userDeleted){
            changeState( !state );
            setCorrectDelete( true );   
            setLoaderActive( false );
            signOut({ callbackUrl: '/'});
        }
        setLoaderActive( false );
    }

  return (
    <>
        <Loader active={loaderActive} />
        <div className='flex justify-center'>
            <div className='flex flex-col  items-center p-6'>
                <h1 className='text-primaryPurple font-dmsans font-bold text-3xl mb-4 text-center'>Eliminar la cuenta</h1>
                <div className='items-center flex flex-col p-6 pb-0 pt-0 text-center'>
                    <p> ¿<b> {session.user.name}, </b> Estás seguro de que deseas eliminar tu cuenta ? </p>
                </div>
                <div className="mt-8 flex justify-center gap-6">
                    <button 
                        className="font-semibold rounded-full w-45 flex justify-center items-center bg-red-600 px-4 py-2 text-secondaryWhite" 
                        onClick = {() => changeState(!state)}
                    >
                        CANCELAR
                    </button>
                    <button 
                        className="font-semibold rounded-full w-45 flex justify-center items-center bg-slate-300 px-4 py-2 text-primaryPurple"
                        onClick={handleDelete}
                    >
                        CONFIRMAR
                    </button>
                </div>
            </div>
            <ModalGeneral state={correctDelete} changeState={setCorrectDelete}>
                <ModalCorrectDelete />
            </ModalGeneral>
        </div>
    </>
  )
}

export default ModalEliminarCuenta