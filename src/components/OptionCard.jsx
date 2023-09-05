import React from 'react'


const OptionCard = ({ text, details, image }) => {
    return (
        <div className="flex w-72 bg-terciaryWhite shadow p-4 rounded-3xl mb-4">
        <div className="h-20 w-20 flex items-center justify-center rounded-3xl">
            <img src={image} alt="atajos" />
        </div>
        <div className="h-20 w-3/5 flex flex-col items-center justify-center font-dmsans">
            <h4 className="text-lg">{text}</h4>
            <p className="text-sm">{details}</p>
        </div>
        </div>
    );
};


export default OptionCard