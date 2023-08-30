import React from 'react';
import Image from 'next/image';

const Participants = ({nombre, stack, linkedin}) => {
    return (
        <div className='flex flex-col items-center'>
            <Image src="/Images/imagePerson.png" alt="closeIcon" width={100} height={100}></Image>
            <p className='pt-2 text-primaryPurple font-bold'>{nombre}</p>
            <p className='font-semibold text-base text-secondaryBlack'>{stack}</p>
            <p className='text-sm text-secondaryBlack'>{linkedin}</p>
        </div>
    )
}

export default Participants;