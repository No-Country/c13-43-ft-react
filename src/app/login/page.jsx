import React from 'react';
import { GoogleButton } from '@/components/GoogleButton';

export const login = () => {
    return (
        <>
            <div className='flex gap-40 pt-16 pl-32'>
                <div className='flex-colum justify-center w-1/2'>
                    <h1 className='text-secondaryBlack text-5xl font-bold font-dmsans flex justify-center'> Iniciar Sesión </h1>
                    <form action="">
                        <div className='my-8'>
                            <label className='text-secondaryBlack font-dmsans font-medium'> Email </label>
                            <input className="pt-1 w-full border-b border-secondaryBlack bg-slate-50 outline-none " type="email" name="email"/>
                        </div>
                        
                        <div className='my-8'>
                            <label className='text-secondaryBlack font-dmsans font-medium'> Contraseña </label>
                            <input className="pt-1 w-full border-b border-secondaryBlack bg-slate-50 outline-none " type="password" name="password"/>
                        </div>

                        <button className='bg-primaryPurple text-secondaryWhite font-dmsans font-medium w-full mb-8 py-2 rounded-full'> Ingresar </button>

                        <div className='flex gap-4 mb-8'>
                            <hr className='flex-grow border-secondaryBlack mt-3'/>
                                <span className='text-secondaryBlack font-dmsans font-medium'>Or</span>
                            <hr className='flex-grow border-secondaryBlack mt-3'/>
                        </div>

                        <GoogleButton />

                    </form>
                </div>

                <div className="flex md:justify-end w-full md:w-1/2 justify-center h-auto">
                    <img 
                    src="/Images/imgLogin.png" 
                    alt="HomeImage" 
                    className='h-3/2'
                    // className="object-cover md:rounded-l-3xl rounded-md md:rounded-r-none md:w-full h-96"
                    />
                </div>
            </div>
        </>
    )
}

export default login