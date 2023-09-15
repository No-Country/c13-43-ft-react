// Descripción: El componente "Participants" se utiliza para mostrar información detallada sobre un participante en una 
// sección de presentación de miembros de un equipo o grupo. Recibe como propiedades el nombre del participante, 
// su rol en el equipo, un enlace a su perfil de LinkedIn, la columna de inicio en la cuadrícula y una imagen de su retrato.

// Funcionamiento: El componente renderiza la información del participante, incluyendo su nombre, rol y un enlace a su 
// perfil de LinkedIn. También muestra la imagen de retrato del participante en un formato circular. La posición en la 
// cuadrícula se controla mediante las propiedades "colStart" y "rowStart", lo que permite organizar visualmente a los 
// participantes en la sección de presentación del equipo o grupo.

import React from 'react';
import Image from 'next/image';


const Participants = ({ nombre, rol, linkedin, colStart, headshot }) => {
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
      <div className='flex justify-center w-28 h-28 mx-auto overflow-hidden rounded-full'>
        <Image src={headshot} alt="headshot" width={300} height={300} className='object-cover' />
      </div>
      <div className='flex flex-col items-center mt-2'>
        <p className='text-lg font-semibold text-center text-primaryPurple'>{nombre}</p>
        <div className='flex items-center justify-center gap-2'>
          <p className='font-medium text-base'>{rol}</p>
          <a href={linkedin} target='blank'>
            <Image className='max-w-none' src="/Images/about/linkedin.png" alt="Linkedin logo" width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Participants;