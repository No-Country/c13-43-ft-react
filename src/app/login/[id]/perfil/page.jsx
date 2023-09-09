import React from 'react'
import ProfileInfo from '@/components/ProfileInfo'
import ProfileConfig from '@/components/ProfileConfig'

const perfil = () => {
    return (
    <div className="profile h-auto w-4/5 absolute right-0 flex">
        <ProfileInfo />
        <ProfileConfig />
    </div>
    )
}

export default perfil

