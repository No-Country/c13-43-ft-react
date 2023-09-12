'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Options from './Options';
import { APIGetRoomOptions } from '@/lib/APICalls';
import Loader from "./Loader";

const arrOptions = [
    {opcion: 'Viernes 20 de Septiembre - 22h', votos: '5 de 10 votaron esta opcion'},
    {opcion: 'Jueves 19 de Septiembre - 18h', votos: '2 de 10 votaron esta opcion'},
    {opcion: 'Domingo 22 de Septiembre - 20h', votos: '0 de 10 votaron esta opcion'},
    {opcion: 'Viernes 20 de Septiembre - 12h', votos: '3 de 10 votaron esta opcion'}
]

const ModalResults = ({ roomId, problem, participants }) => {
    const [finishResults, setFinishResults] = useState([]);
    const [ loaderActive, setLoaderActive ] = useState( false );

    useEffect(() => {
        const results = async() =>{
            try {
                setLoaderActive( true );
                const arrayResults = await APIGetRoomOptions( roomId );
                setFinishResults( arrayResults );
                setLoaderActive( false )
                console.log(arrayResults);
            } catch (error) {
                
            }
        }

        results();
    }, [])
    

    return (
        <>
            <Loader active ={ loaderActive }/>
            <div className='flex justify-center items-center font-dmsans'>
                <div className='flex flex-col items-center p-2 pb-10'>
                    <div className='items-center flex flex-col p-6 pb-0 pt-0'>
                        <h2 className='text-primaryPurple font-dmsans font-bold text-3xl mb-3'>Resultados</h2>
                        <p className='mb-4'>Acá los resultados de tu votación más reciente: <br/> <span className='font-semibold'>{ problem }</span></p>
                        <div className='items-center flex flex-col w-full mt-1'>
                            {finishResults.map((option, index) => <Options key={option.id} opcion={option.title} percentage = { option.percentage } timesVoted ={ option.timesVoted } participants={ participants } />)}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ModalResults;