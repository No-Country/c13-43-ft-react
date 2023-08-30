'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Password = () => {
    const [openEye, setOpenEye] = useState(false);

    const ojo = {
        open: '/Images/password/open.png',
        close: '/Images/password/close.png'
    }

    return (
        <div className='my-8'>
            <label className='text-secondaryBlack font-dmsans font-medium'> CONTRASEÑA </label>
                <Image
                    width={ 25 }
                    height={ 25 } 
                    src={ openEye ? ojo.open : ojo.close } 
                    onClick={() => setOpenEye(!openEye)}
                    className='bottom-auto absolute cursor-pointer right-1/2'
                />
            <input className="w-full border-b border-secondaryBlack bg-slate-50 outline-none " type={ openEye ? "text" : "password"} name="password"/>
        </div>
    )
}

export default Password;
