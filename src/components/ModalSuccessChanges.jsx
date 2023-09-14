// Descripción: Este componente representa un modal que se muestra cuando los cambios se han guardado con éxito 
// en una aplicación. Muestra un ícono de verificación (una marca de verificación verde), un mensaje de confirmación 
// y una descripción que indica que los cambios se han guardado con éxito.

// Funcionamiento: Cuando se muestra este componente, se presenta un mensaje de confirmación de que los cambios se han
//  guardado con éxito. También se muestra un ícono de verificación verde para indicar que la operación se ha completado 
//  con éxito. Es una confirmación visual para el usuario de que sus cambios se han guardado correctamente 
//  en la aplicación.

import React from 'react'
import Image from 'next/image'

const ModalSuccessChanges = () => {
  return (
    <main>
        <div className="flex items-center justify-center">
            <Image src="/Images/check.png" alt="check" width={50} height={50} className='mb-6' />
        </div>
        <h1 className="text-primaryPurple font-dmsans font-bold text-3xl mb-4 text-center">
        {" "}
        ¡Cambios guardados!{" "}
        </h1>
        <span className="flex justify-center">
            Cambios guardados con éxito.
        </span>
    </main>
  )
}

export default ModalSuccessChanges