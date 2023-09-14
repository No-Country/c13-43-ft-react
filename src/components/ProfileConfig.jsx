"use client"
import React from 'react'
import Handler from './Handler'
import ThemeButton from "./ThemeButton";

const ProfileConfig = () => {

    const [notif, setNotif] = React.useState(false)
    const [email, setEmail] = React.useState(false)

  return (
    <div className="flex flex-col pr-20 mx-auto mt-16">
        <h1 className="font-bold text-2xl mb-4">Configuración</h1>
        <div className="flex gap-4 my-3 font-semibold text-sm">
            <Handler state={notif} setState={setNotif} />
            <p> NOTIFICACIONES </p>
        </div>
        <div className="flex gap-4 my-3 font-semibold text-sm">
            <Handler state={email} setState={setEmail} />
            <p> AVISAR POR EMAIL </p>
        </div>
        <div className="flex gap-4 my-3 font-semibold text-sm">
            <ThemeButton/>
            <p> DARK MODE </p>
        </div>
    </div>
  )
}

export default ProfileConfig