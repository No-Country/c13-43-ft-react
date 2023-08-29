import React from "react";
import Link from "next/link";

export const GoogleButton = () => {
    return (
        <Link href="/api/auth/signin">
            <button className='text-secondaryBlack font-dmsans font-medium border-primaryPurple border rounded-full gap-2 m-auto px-4 py-2 flex items-center justify-center'>
                <picture>
                    <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="logoGoogle" className='w-8 h-8 justify-center' />
                </picture>
                Entrar con google
            </button>
        </Link>
    )
}