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
                <h1 className='font-bold text-4xl text-primaryPurple'>Eliminar la cuenta</h1>
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