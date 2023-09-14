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