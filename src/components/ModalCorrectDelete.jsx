import React from 'react'
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const ModalCorrectDelete = () => {

    const {data: session} = useSession();

  return (
    <div className='flex justify-center items-center' >
        <div className='flex flex-col items-center p-6 pb-10'>
            <div className='items-center flex flex-col p-6 pb-0 pt-0 text-center'>
                <Image src="/Images/CheckIcon.png" alt="green check" width={30} height={30} ></Image>
                <p className="pt-4 font-bold text-primaryPurple">Cuenta eliminada con exito!</p>
                <p className="pt-2 text-sm">Tu cuenta <b>{session.user.email}</b> ha sido eliminada.</p>
            </div>
        </div>
    </div>
    )
}

export default ModalCorrectDelete