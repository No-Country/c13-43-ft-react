// Descripción: El componente "ThemeButton" es un botón que permite al usuario alternar entre el modo claro y el modo oscuro en la aplicación. 
// Cambia la apariencia de la interfaz de usuario en función del tema seleccionado.

// Funcionamiento:

// Utiliza el hook useTheme de la biblioteca "next-themes" para acceder al estado actual del tema y la función para cambiarlo.
// El botón muestra un icono de sol (SunIcon) cuando el tema actual es oscuro (modo oscuro) y un icono de luna 
// cuando el tema es claro (modo claro).
// Al hacer clic en el botón, se llama a la función setTheme con el tema opuesto al actual, lo que cambia la apariencia 
// de la aplicación al tema seleccionado.

"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import {SunIcon, MoonIcon} from '@heroicons/react/24/solid'

    const ThemeButton = () => {
        const {resolvedTheme, setTheme} = useTheme()

  return (
    <button 
    aria-label='Toggle Dark Mode'
    type='button'
    className='flex items-center justify-center rounded-lg px-2'
    onClick={()=> setTheme(resolvedTheme === "dark" ? "light" : "dark" )}>
      {resolvedTheme === "dark" ? (
        <SunIcon className='h-5 w-5 text-orange-300'/>
      ) : (
        <MoonIcon className='h-5 w-5 text-slate-800'/>
      )} 
    </button>
  )
}

export default ThemeButton;