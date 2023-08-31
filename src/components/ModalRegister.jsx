import React from 'react';
import Password from './Password';

const ModalRegister = () => {
    return (
        <main className=' '>
            <h1 className='text-secondaryBlack text-5xl font-bold font-dmsans flex justify-center'> Registrate </h1>
            <form action="">
                <div className='my-6'>
                    <label className='text-secondaryBlack font-dmsans font-medium'> NOMBRE Y APELLIDO </label>
                    <input className="w-full border-b border-secondaryBlack bg-slate-50 outline-none " type="text" name="nombre" id='nombre'/>
                </div>

                <div className='my-6'>
                    <label className='text-secondaryBlack font-dmsans font-medium'> EMAIL </label>
                    <input className="w-full border-b border-secondaryBlack bg-slate-50 outline-none " type="email" name="email" id='email'/>
                </div>

                <Password
                    nameLabel = 'CONTRASEÑA'
                    name = 'password'
                />

                <Password
                    nameLabel = 'REPETIR CONTRASEÑA'
                    name = 'password2'
                />
                
                <button className='bg-primaryPurple text-secondaryWhite font-dmsans font-medium w-full py-2 rounded-full'> INGRESAR </button>

                {/* <button className='text-primaryPurple font-dmsans font-medium border-primaryPurple border rounded-full w-full py-2'> INICIAR SESIÓN </button> */}
            </form>
        </main>
    )
}

export default ModalRegister;
