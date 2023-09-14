"use client"
import React from 'react'
import Image from 'next/image';


const OptionCard = ({ text, details, image, action }) => {
    return (
        <div className="flex w-72 bg-tertiaryWhite shadow p-4 rounded-3xl mb-4 cursor-pointer" onClick={action} >
            <div className=" w-20 flex items-center justify-center rounded-3xl">
                <Image src={image} alt="atajo" width={100} height={50} />
            </div>
            <div className="h-20 w-3/5 flex flex-col items-center justify-center font-dmsans">
                <h4 className="text-lg">{text}</h4>
                <p className="text-sm">{details}</p>
            </div>
        </div>
    );
};


export default OptionCard