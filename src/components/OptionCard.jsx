import React from 'react'
import Image from "next/image";


const OptionCard = ({ text, details, image }) => {
    return (
        <div className="flex w-72 bg-terciaryWhite shadow p-4 rounded-3xl mb-4">
        <div className="h-20 w-20 flex items-center justify-center bg-blue-600 rounded-3xl">
            <Image src={image} alt="atajo" width={30} height={30} />
        </div>
        <div className="h-20 w-3/5 flex flex-col items-center justify-center font-dmsans">
            <h4 className="text-lg">{text}</h4>
            <p className="text-sm">{details}</p>
        </div>
        </div>
    );
};


export default OptionCard