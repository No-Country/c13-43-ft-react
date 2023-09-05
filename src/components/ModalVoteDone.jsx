import Image from 'next/image'
import React from 'react'

export const ModalVoteDone = () => {
    return (
        <main>
            <div className='flex items-center justify-center'>
                <Image src='/Images/check.png' width={ 50 } height={ 50 }/>
            </div>
            <h1 className='text-primaryPurple text-5xl text-center font-bold font-dmsans flex justify-center my-6'> Votación realizada con exito </h1>
            <span className='flex justify-center'>Votaste en la sala<b>&nbsp; hola </b></span>
        </main>
    )
}

