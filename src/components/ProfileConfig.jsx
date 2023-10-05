// Descripción: El componente "ProfileConfig" es responsable de mostrar la configuración del perfil del usuario. 
// Permite al usuario realizar cambios en las notificaciones, recibir notificaciones por correo electrónico y 
// habilitar o deshabilitar el modo oscuro.

// Funcionamiento: El componente muestra una serie de opciones de configuración en forma de listas. Cada opción tiene una 
// etiqueta de texto y un interruptor (representado por el componente "Handler") que el usuario puede activar o desactivar. 

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
            <ThemeButton/>
            <p> DARK MODE </p>
        </div>
    </div>
  )
}

export default ProfileConfig