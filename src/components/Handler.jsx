import React from 'react'
import Image from 'next/image'

const Handler = ({state, setState}) => {
  return (
    <div className="h-6 w-10 bg-primaryPurple rounded-2xl relative flex items-center" onClick={() => setState(!state)}>
        <div className={`h-5 w-5 rounded-full bg-secondaryGray absolute ${state ? 'right-0.5' : 'left-0.5'} flex items-center justify-center`}>
            <Image src={`${state ? '/Images/CheckIcon.png' : '/Images/CloseIcon.png'}`} alt="✓" width={10} height={10} />
        </div>
    </div>
  )
}

export default Handler