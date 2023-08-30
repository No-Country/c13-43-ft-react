import React from "react";

const SinVotaciones = () => {
    return (
        <div className="flex flex-col items-center justify-center font-dmsans bg-white rounded-2xl">
            <div className="flex items-center">
                <img src="../Images/sinvotaciones/sinvotaciones-ImagePlaceholder.png"/>
            </div>
            <div className="flex flex-col items-center mt-5 gap-5 text-center">
                <h2 className="text-2xl font-bold text-black">Sin votaciones</h2>
                <p className="text-lg text-center max-w-md">Todavía no creaste ninguna votación o no tienes votaciones recientes</p>
            </div>
        </div>
    )
}

export default SinVotaciones