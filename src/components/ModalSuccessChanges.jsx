import React from 'react'
import Image from 'next/image'

const ModalSuccessChanges = () => {
  return (
    <main>
        <div className="flex items-center justify-center">
            <Image src="/Images/check.png" alt="check" width={50} height={50} />
        </div>
        <h1 className="text-primaryPurple text-3xl text-center font-bold font-dmsans flex justify-center my-6">
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