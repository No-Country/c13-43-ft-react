import React from "react";
import { signIn } from "next-auth/react";

export const GoogleButton = () => {
    const handleClickLogin = () => {
        signIn("google", { callbackUrl: '/login/1234' });
    };

    return (
        <button onClick={handleClickLogin} className='text-primaryPurple font-dmsans font-medium border-primaryPurple border rounded-full w-full gap-2 py-1 flex items-center justify-center'>
            <picture>
                <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="logoGoogle" className='w-8 h-8 justify-center' />
            </picture>
            Entrar con google
        </button>
    )
}