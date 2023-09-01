import React from 'react';
import Image from 'next/image';

const Participants = ({nombre, stack, linkedin}) => {
    return (
        <div className='flex flex-col items-center'>
            <Image src="/Images/imagePerson.png" alt="closeIcon" width={100} height={100}></Image>
            <p className='pt-2 text-primaryPurple font-bold'>{nombre}</p>
            <div className='flex items-center'>
            <p className='font-semibold text-base text-secondaryBlack'>{stack}</p>
            <a href={linkedin} className='text-sm hover:scale-75 text-white text-center'>
            <Image src="/Images/about/linkedin.png" alt="Linkedin" width={30} height={30}></Image>
            </a>
            </div>
        </div>
    )
}

export default Participants;