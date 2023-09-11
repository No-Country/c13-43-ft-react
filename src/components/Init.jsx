import Link from "next/link";
import React from "react";
import ImagePrincipal from "./ImagePrincipal";

const Init = () => {
    return (
        <main className="flex justify-between mt-4 mx-2 md:mx-0 font-dmsans flex-col md:flex-row md:py-10 mb-10 sm:mb-0">
            <section className="my-10 h-auto w-full text-center md:w-1/2 md:text-left mx-auto">
                <h1 className="text-5xl font-bold text-secondaryBlack pr-2 md:pr-4 xl:pr-10 leading-tight"> Votación simplificada, decisiones tomadas en conjunto </h1>
                <div className="text-secondaryBlack my-6 pr-2 md:pr-4 xl:pr-10">
                    <p className="text-lg"> 
                        Nuestra plataforma se enfoca en simplificar el proceso de 
                        votación y unir a las personas en la toma de decisiones....
                    </p>
                </div>
                <div>
                    <Link href={'/login'}>
                        <button className="bg-primaryPurple text-white font-semibold rounded-3xl px-5 py-3">Empezar →</button>
                    </Link>  
                </div>
            </section>
                <ImagePrincipal />
        </main>
    )
}

export default Init;
