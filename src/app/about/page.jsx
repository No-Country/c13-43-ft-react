import Participants from '@/components/Participants'
import React from 'react'

const participantes = [
    {nombre: "Alejandro Apellido", stack: 'Frontend', linkedin: 'https://www.linkedin.com/...'},
    {nombre: "Orlemar Apellido", stack: 'Tester', linkedin: 'https://www.linkedin.com/...'},
    {nombre: "Laura Apellido", stack: 'Frontend', linkedin: 'https://www.linkedin.com/...'},
    {nombre: "Martin Apellido", stack: 'Backend', linkedin: 'https://www.linkedin.com/...'},
    {nombre: "Pablo Apellido", stack: 'Backend', linkedin: 'https://www.linkedin.com/...'},
    {nombre: "Carla Apellido", stack: 'UX / UI', linkedin: 'https://www.linkedin.com/...'},
    {nombre: "Candelaria Apellido", stack: 'Backend', linkedin: 'https://www.linkedin.com/...'},
]

const about = () => {
    return (
        <div className='w-screen flex flex-col mt-10 items-center font-dmsans'>
            <div className='justify-center items-center flex flex-col max-w-3xl'>
                <h1 className='text-primaryPurple font-bold text-4xl items-center justify-center pb-6'>Conoce a Nuestro Team</h1>
                <h5 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatum quia sint, deserunt laborum quos in recusandae possimus rem mollitia nemo quis facere obcaecati praesentium eum doloremque. Praesentium, debitis modi!</h5>
            </div>
            <div className='mt-10 grid-cols-4 grid gap-x-52 gap-y-12 w-4/6'>
                {/* participante */}
                {participantes.map(participante => 
                <Participants 
                    nombre = {participante.nombre} 
                    stack = {participante.stack} 
                    linkedin = {participante.linkedin} />)
                }
            </div>
        </div>
    )
}

export default about
