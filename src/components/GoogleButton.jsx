import React from "react";
import { signIn } from "next-auth/react";

export const GoogleButton = () => {
    const handleClickLogin = () => {
        signIn("google", { redirect: "/login/4128582" });
    };

    return (
        <button onClick={handleClickLogin} className='text-primaryPurple font-dmsans font-medium border-primaryPurple border rounded-full w-full py-1 flex items-center justify-center gap-4 md:gap-0.5 xl:gap-2 '>
            <picture>
                <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="logoGoogle" className='w-8 h-8 justify-center' />
            </picture>
            <span>Entrar con Google</span>
        </button>
    )
}