import Link from "next/link";
import React from "react";
import ImagePrincipal from "./ImagePrincipal";

const Init = () => {
    return (
        <main className="flex justify-between items-center mx-2 md:mx-0 font-dmsans flex-col md:flex-row md:py-8 mb-4 sm:mb-0 md:h-100">
            <section className="my-10 h-auto w-full text-center md:w-1/2 md:text-left md:pl-16">
                <h1 className="text-5xl font-bold leading-tight xl:mr-2"> Votación simplificada, decisiones tomadas en conjunto </h1>
                <div className="my-6 pr-2 md:pr-4 xl:pr-10">
                    <p className="text-lg md:w-10/12"> 
                        Nuestra plataforma se enfoca en simplificar el proceso de 
                        votación y unir a las personas en la toma de decisiones.
                    </p>
                </div>
                <div>
                    <Link href={'/login'}>
                        <button className="bg-primaryPurple text-white font-semibold rounded-3xl px-5 py-3">Empezar →</button>
                    </Link>  
                </div>
            </section>
            <div className="md:w-1/2 h-full mt-8">
                <ImagePrincipal />
            </div>
        </main>
    )
}

export default Init;
