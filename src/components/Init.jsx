import Image from 'next/image'
import React from 'react'

const Init = () => {
    return (
        <main className="flex justify-between mt-10 font-dmsans flex-col md:flex-row md:py-16 md:pl-16">
            <article className="my-10 h-auto w-full text-center md:w-1/2 md:text-left max-w-xl">
                <h2 className="text-5xl font-bold text-secondaryBlack pr-2 md:pr-10 leading-tight"> Votación simplificada, decisiones tomadas en conjunto </h2>
                <div className="text-secondaryBlack my-6 pr-2 md:pr-10">
                    <span className="text-lg"> 
                        Nuestra plataforma se enfoca en simplificar el proceso de 
                        votación y unir a las personas en la toma de decisiones....
                    </span>
                </div>
                <div>
                    <button className="bg-primaryPurple text-white font-semibold rounded-3xl px-4 py-2"> Empezar → </button>
                </div>
            </article>
            <div className="flex md:justify-end w-full md:w-1/2 justify-center h-auto">
                <Image 
                src="/Images/imgLogin.png" 
                alt="HomeImage" 
                className="object-cover md:rounded-l-3xl rounded-md md:rounded-r-none md:w-full h-96"
                width={400}
                height={400}
                />
            </div>
        </main>
    )
}

export default Init