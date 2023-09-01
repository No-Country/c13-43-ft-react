import Image from 'next/image'
import React from 'react'

const ModalGeneral = ({ children, state, changeState}) => {
    return (
        <>
            { state &&
                <div className='w-screen h-screen flex items-center justify-center fixed top-0 left-0 backdrop-blur-sm'>
                    <main className='w-2/5 h-4/5 relative rounded shadow-lg bg-secondaryWhite p-12'>
                        <button 
                            className='absolute top-5 right-5 cursor-pointer'
                            onClick={() => changeState( !state )}
                        > 
                            <Image src='/Images/closeIcon.png' width={ 25 } height={ 25 } alt='cerrar'/>
                        </button>
                        {/* 'overflow-y-scroll h-full w-full' */}
                        <div className='overflow-y-scroll h-full w-full'>
                            { children }
                        </div>
                    </main>
                </div>
            }
        </>
    )
}

export default ModalGeneral
