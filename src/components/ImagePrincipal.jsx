// Descripción: Componente que muestra una imagen principal de forma responsive en una página.

// Funcionamiento: El componente renderiza una imagen que se ajusta al ancho y alto específicos. Ideal para mostrar 
// imágenes destacadas en una página web.

import React from 'react'
import Image from 'next/image';

const ImagePrincipal = () => {
    return (
        <div className="flex md:justify-end w-full justify-center max-h-full max-w-96 h-full">
        <Image 
            src="/Images/imgLogin.png" 
            alt="HomeImage" 
            className='object-cover rounded-4xl md:rounded-none md:rounded-l-5xl w-11/12 sm:w-10/12 md:w-full'
            width={1000}
            height={350}
        />
    </div>
    )
}

export default ImagePrincipal;
