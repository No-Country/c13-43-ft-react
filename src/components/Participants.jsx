import React from 'react';
import Image from 'next/image';


const Participants = ({ nombre, rol, linkedin, colStart }) => {
    const colStartClasses = [
      'col-start-1',
      'col-start-2',
      'col-start-3',
      'col-start-4',
      'col-start-5',
      'col-start-6',
      'col-start-7',
    ];
    
    const rowStartClasses = ['row-start-1', 'row-start-2'];
  const index = colStartClasses.indexOf(colStart);

  return (
    <div className={`col-span-2 ${colStartClasses[index]} ${rowStartClasses[index % 2]}`}>
      <div className='flex justify-center'>
        <Image src="/Images/about/imagePerson.png" alt="headshot" width={100} height={100} />
      </div>
      <div className='flex flex-col items-center mt-2'>
        <p className='text-lg font-semibold text-center text-primaryPurple'>{nombre}</p>
        <div className='flex items-center justify-center gap-2'>
          <p className='font-medium text-base text-secondaryBlack'>{rol}</p>
          <a href={linkedin}>
            <Image src="/Images/about/linkedin.png" alt="Linkedin logo" width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Participants;