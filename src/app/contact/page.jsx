// Descripción: Página de contacto con formulario para enviar mensajes. Muestra información de contacto de la empresa.
// El botón de envío se deshabilita si faltan datos. Incluye un indicador de carga mientras se procesa la solicitud.

// Funcionamiento: Los usuarios completan el formulario, hacen clic en "Enviar", se activa el indicador de carga, se 
// envían los datos al servidor y se muestra un mensaje de éxito o error.

import ContactUs from '@/components/ContactUs'
import React from 'react'

const page = () => {
  return <ContactUs />
}

export default page