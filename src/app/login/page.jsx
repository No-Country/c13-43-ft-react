"use client"
import React from 'react';
import { GoogleButton } from '@/components/GoogleButton';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Password from '@/components/Password';

export const login = () => {
    // const { data: session } = useSession();
    const router = useRouter();
    const [error, setError] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const signInResponse = await signIn("credentials", {
            email: data.get("email"),
            password: data.get("password"),
            redirect: false,
        });

        if (signInResponse && !signInResponse.error) {
            router.push("/login/1234");
        } else {
            console.log("Error: ", signInResponse);
            setError("Tu email o contraseña es incorrecto")
        }
    };

    return (
        <>
            <div className='flex gap-40 pt-16 pl-32'>
                <div className='flex-colum justify-center w-1/2'>
                    <h1 className='text-secondaryBlack text-5xl pb-6 font-bold font-dmsans flex justify-center'> Iniciar sesión </h1>
                    <form onSubmit={handleSubmit}>
                        <div className='my-8'>
                            <label className='text-secondaryBlack font-dmsans font-medium' htmlFor="email"> EMAIL </label>
                            <input className="pt-1 w-full border-b border-secondaryBlack bg-slate-50 outline-none " type="email" name="email" id="email"/>
                        </div>
                        
                        {/* <div className='my-8'>
                            <label className='text-secondaryBlack font-dmsans font-medium'> CONTRASEÑA </label>
                            <input className="pt-1 w-full border-b border-secondaryBlack bg-slate-50 outline-none " type="password" name="password"/>
                        </div> */}
                        <Password nombre="CONTRASEÑA" name="password" />

                        <button type="submit" className='bg-primaryPurple text-secondaryWhite font-dmsans font-medium w-full mb-8 py-2 rounded-full'> INGRESAR </button>

                        <div className='flex gap-4 mb-8'>
                            <hr className='flex-grow border-secondaryBlack mt-3'/>
                                <span className='text-secondaryBlack font-dmsans font-semibold'>OR</span>
                            <hr className='flex-grow border-secondaryBlack mt-3'/>
                            
                        </div>

                    </form>
                    <GoogleButton />
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