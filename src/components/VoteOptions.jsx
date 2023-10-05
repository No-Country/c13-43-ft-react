// Descripción: El componente "VoteOptions" es una representación genérica de opciones de votación que se pueden utilizar  
// en diversas aplicaciones y formularios que requieran la selección de opciones. Cada opción se muestra con un check 
// y su etiqueta correspondiente para que los usuarios elijan la opción que prefieran.

// Funcionamiento: Este componente facilita la presentación de múltiples opciones de selección en una lista. 
// Los usuarios pueden seleccionar una única opción haciendo clic en su botón de radio asociado. La selección de una 
// opción se refleja automáticamente en el estado de la aplicación o formulario en el que se utilice este componente, 
// lo que permite recopilar y procesar las respuestas de los usuarios de manera eficiente.

import React from 'react'

export const VoteOptions = ({ options, name, value }) => {

    return (
        <main>
            <div className='flex items-center gap-2 my-4'>
                <input type="radio" name={ name } value={ value } className='accent-primaryPurple focus:accent-primaryPurple w-4 h-4'/>
                <label className='font-semibold'>{ options }</label>
            </div>
            <hr/>
        </main>
    )
}
