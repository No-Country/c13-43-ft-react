import React from 'react'
import Image from 'next/image'

const about = () => {
    return (
        <div className='w-screen flex flex-col mt-10 items-center font-dmsans'>
            <div className='justify-center items-center flex flex-col max-w-3xl'>
                <h1 className='text-primaryPurple font-bold text-4xl items-center justify-center pb-6'>Conoce a Nuestro Team</h1>
                <h5 className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatum quia sint, deserunt laborum quos in recusandae possimus rem mollitia nemo quis facere obcaecati praesentium eum doloremque. Praesentium, debitis modi!</h5>
            </div>
            <div className='mt-10 grid-cols-4 grid gap-x-52 gap-y-12'>
                {/* participante */}
                <div className='flex flex-col items-center'>
                    <Image src="/Images/imagePerson.png" alt="closeIcon" width={100} height={100}></Image>
                    <p className='pt-2 text-primaryPurple font-bold'>Martin Apellido</p>
                    <p className='font-semibold text-base text-secondaryBlack'>Fullstack Dev</p>
                    <p className='text-sm text-secondaryBlack'>LinkedIn link</p>
                </div>

                   {/* participante */}
                   <div className='flex flex-col items-center'>
                    <Image src="/Images/imagePerson.png" alt="closeIcon" width={100} height={100}></Image>
                    <p className='pt-2 text-primaryPurple font-bold'>Laura Apellido</p>
                    <p className='font-semibold text-base text-secondaryBlack'>Frontend Dev</p>
                    <p className='text-sm text-secondaryBlack'>LinkedIn link</p>
                </div>

                   {/* participante */}
                   <div className='flex flex-col items-center'>
                    <Image src="/Images/imagePerson.png" alt="closeIcon" width={100} height={100}></Image>
                    <p className='pt-2 text-primaryPurple font-bold'>Alejo Apellido</p>
                    <p className='font-semibold text-base text-secondaryBlack'>Frontend Dev</p>
                    <p className='text-sm text-secondaryBlack'>LinkedIn link</p>
                </div>


                   {/* participante */}
                   <div className='flex flex-col items-center'>
                    <Image src="/Images/imagePerson.png" alt="closeIcon" width={100} height={100}></Image>
                    <p className='pt-2 text-primaryPurple font-bold'>Candelaria Apellido</p>
                    <p className='font-semibold text-base text-secondaryBlack'>Fullstack Dev</p>
                    <p className='text-sm text-secondaryBlack'>LinkedIn link</p>
                </div>


                   {/* participante */}
                   <div className='flex flex-col items-center'>
                    <Image src="/Images/imagePerson.png" alt="closeIcon" width={100} height={100}></Image>
                    <p className='pt-2 text-primaryPurple font-bold'>Pablo Apellido</p>
                    <p className='font-semibold text-base text-secondaryBlack'>Fullstack Dev</p>
                    <p className='text-sm text-secondaryBlack'>LinkedIn link</p>
                </div>


                   {/* participante */}
                   <div className='flex flex-col items-center'>
                    <Image src="/Images/imagePerson.png" alt="closeIcon" width={100} height={100}></Image>
                    <p className='pt-2 text-primaryPurple font-bold'>Orle Apellido</p>
                    <p className='font-semibold text-base text-secondaryBlack'>Tester QA</p>
                    <p className='text-sm text-secondaryBlack'>LinkedIn link</p>
                </div>


                   {/* participante */}
                   <div className='flex flex-col items-center'>
                    <Image src="/Images/imagePerson.png" alt="closeIcon" width={100} height={100}></Image>
                    <p className='pt-2 text-primaryPurple font-bold'>Carla Apellido</p>
                    <p className='font-semibold text-base text-secondaryBlack'>Diseñadora UX-UI</p>
                    <p className='text-sm text-secondaryBlack'>LinkedIn link</p>
                </div>
            </div>
        </div>
    )
}

export default about