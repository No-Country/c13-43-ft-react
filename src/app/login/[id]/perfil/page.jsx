// Descripción: Es la página del perfil de usuario, donde se muestra información relacionada al usuario (editable) y
// algunos controladores para el funcionamiento y la accesibilidad de la aplicación.

"use client"
import React from 'react'
import ProfileInfo from '@/components/ProfileInfo'
import ProfileConfig from '@/components/ProfileConfig'
import Loader from '@/components/Loader'

const Perfil = () => {

    const [loaderActive, setLoaderActive] = React.useState(true)

    setTimeout(() => {
        setLoaderActive(false)
    }, 2000);

    return (
    <>
        <Loader active={loaderActive} />
        <div className="h-auto w-full items-center flex flex-col md:flex-row md:justify-center mt-20 xl:mt-10">
            <ProfileInfo />
        </div>
    </>
    )
}

export default Perfil