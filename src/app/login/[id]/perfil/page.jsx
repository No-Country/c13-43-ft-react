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
        <div className="profile h-auto mx-auto w-4/5 md:absolute md:right-0 flex flex-col md:flex-row">
            <ProfileInfo />
            <ProfileConfig />
        </div>
    </>
    )
}

export default Perfil