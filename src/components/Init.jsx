import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Init = () => {
    return (
        <main className="flex justify-between mt-4 mx-2 md:mx-0 font-dmsans flex-col md:flex-row md:py-16 md:pl-16 mb-10">
            <section className="my-10 h-auto w-full text-center md:w-1/2 md:text-left">
                <h2 className="text-5xl font-bold text-secondaryBlack pr-2 md:pr-10 leading-tight"> Votación simplificada, decisiones tomadas en conjunto </h2>
                <div className="text-secondaryBlack my-6 pr-2 md:pr-10">
                    <span className="text-lg"> 
                        Nuestra plataforma se enfoca en simplificar el proceso de 
                        votación y unir a las personas en la toma de decisiones....
                    </span>
                </div>
                <div>
                    <Link href={'/login'}>
                        <button className="bg-primaryPurple text-white font-semibold rounded-3xl px-5 py-3">Empezar →</button>
                    </Link>  
                </div>
            </section>
            <div className="flex md:justify-end w-full md:w-1/2 justify-center h-auto">
                <Image 
                src="/Images/imgLogin.png" 
                alt="HomeImage" 
                className="object-cover rounded-4xl md:rounded-none md:rounded-l-5xl w-11/12 sm:w-10/12 md:w-full h-96"
                width={400}
                height={400}
                />
            </div>
        </main>
    )
}

export default Init