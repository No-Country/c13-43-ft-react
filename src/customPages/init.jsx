import React from 'react'

export const Init = () => {
    return (
        <main className="flex justify-between p-16 flex-col md:flex-row">
            <article className="my-10 h-auto w-full text-center md:w-1/2 md:text-left">
                <h2 className="text-5xl font-semibold text-primaryPurple"> Votación simplificada, decisiones tomadas en conjunto </h2>
                <div className="text-primaryPurple my-6 pr-10">
                    <span className="text-lg"> 
                        Nuestra plataforma se enfoca en simplificar el proceso de 
                        votación y unir a las personas en la toma de decisiones. 
                    </span>
                </div>
                <div>
                    <button className="bg-primaryPurple text-white font-semibold rounded-3xl px-4 py-2"> Empezar → </button>
                </div>
            </article>
            <div className="flex justify-center w-full md:w-1/2 aspect-square">
                <img 
                src="https://images.pexels.com/photos/4669141/pexels-photo-4669141.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="HomeImage" 
                className="object-cover w-2/3 h-2/3 rounded-3xl"
                />
            </div>
        </main>
    )
}

export default Init
