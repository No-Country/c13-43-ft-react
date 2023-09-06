import React from 'react';
import Image from 'next/image';
import Options from './Options';

const arrOptions = [
    {opcion: 'Viernes 20 de Septiembre - 22h', votos: '5 de 10 votaron esta opcion'},
    {opcion: 'Jueves 19 de Septiembre - 18h', votos: '2 de 10 votaron esta opcion'},
    {opcion: 'Domingo 22 de Septiembre - 20h', votos: '0 de 10 votaron esta opcion'},
    {opcion: 'Viernes 20 de Septiembre - 12h', votos: '3 de 10 votaron esta opcion'}
]

const ModalResults = () => {

    return (
        <div className='flex justify-center items-center font-dmsans'>
            <div className='flex flex-col items-center p-2 pb-10'>
                <div className='items-center flex flex-col p-6 pb-0 pt-0'>
                    <h2 className='text-primaryPurple font-dmsans font-bold text-3xl mb-3'>Resultados</h2>
                    <p className='mb-4'>Acá los resultados de tu votación más reciente: <br/> <span className='font-semibold'>Festejo de mi cumple 🎂 Cuento con ustedes!</span></p>
                    <div className='items-center flex flex-col w-full mt-1'>
                        {arrOptions.map((option, index) => <Options key={index} opcion={option.opcion} votos={option.votos} />)}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ModalResults;