// Descripción: Provee a la aplicación un contexto general para utilizar el tema de la preferencia del usuario Dark/Light

"use client"
import React from 'react'
import { ThemeProvider } from 'next-themes'

const Providers = ({children}) => {
  return (
    <ThemeProvider attribute='class'>{children}</ThemeProvider>
  )
}

export default Providers
