// Descripción: Componente que representa un interruptor de estado con un diseño visual. Cambia de estado cuando se hace 
// click.

// Funcionamiento: Al hacer clic en el componente, cambia su estado y muestra una marca de verificación o una cruz 
// según el estado. Ideal para alternar opciones de selección.

import React from 'react'
import Image from 'next/image'

const Handler = ({state, setState}) => {
  return (
    <div className="h-6 w-10 bg-primaryPurple rounded-2xl relative flex items-center cursor-pointer" onClick={() => setState(!state)}>
        <div className={`h-5 w-5 rounded-full bg-secondaryGray absolute ${state ? 'right-0.5' : 'left-0.5'} flex items-center justify-center`}>
            <Image src={`${state ? '/Images/CheckIcon.png' : '/Images/closeIcon.png'}`} alt="✓" width={10} height={10} />
        </div>
    </div>
  )
}

export default Handler