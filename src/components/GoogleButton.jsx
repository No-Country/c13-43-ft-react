// Nombre del Componente: GoogleButton

// Descripción: Este componente representa un botón que permite a los usuarios iniciar sesión con su cuenta de Google. 
// Cuando se hace clic en el botón, se llama a la función handleClickLogin, que inicia el proceso de inicio de sesión 
// con Google utilizando la biblioteca o función signIn.

// Funcionamiento:

// Cuando se hace clic en el botón "Entrar con Google", se activa el evento onClick y se llama a la función
// handleClickLogin.

// La función handleClickLogin utiliza la función signIn para iniciar sesión con Google y redirigir al usuario 
// a la página de inicio de sesión con un código de redirección específico ("/login/4128582").


import React from "react";
import { signIn } from "next-auth/react";


export const GoogleButton = () => {
    const handleClickLogin = () => {
        signIn("google", { redirect: "/login/4128582" });
    };

    return (
        <button onClick={handleClickLogin} className='text-primaryPurple dark:bg-secondaryWhite font-dmsans font-medium border-primaryPurple border rounded-full w-full py-1 flex items-center justify-center gap-4 md:gap-0.5 xl:gap-2 '>
            <picture>
                <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="logoGoogle" className='w-8 h-8 justify-center' />
            </picture>
            <span>Entrar con Google</span>
        </button>
    )
}