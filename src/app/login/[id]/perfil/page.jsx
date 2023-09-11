import React from 'react'
import ProfileInfo from '@/components/ProfileInfo'
import ProfileConfig from '@/components/ProfileConfig'

const perfil = () => {
    return (
    <div className="profile h-auto mx-auto w-4/5 md:absolute md:right-0 flex flex-col md:flex-row">
        <ProfileInfo />
        <ProfileConfig />
    </div>
    )
}

export default perfil

