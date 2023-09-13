import Image from "next/image";
import React from "react";

const SinVotaciones = () => {
    return (
        <div className="flex flex-col items-center justify-center font-dmsans bg-white rounded-2xl m-24 h-full py-6 shadow">
            <div className="flex items-center ">
                <Image src="../Images/sinvotaciones/sinvotaciones-ImagePlaceholder.png" alt="noVotaciones" width={40} height={40} />
            </div>
            <div className="flex flex-col items-center mt-5 gap-5 text-center">
                <h2 className="text-2xl font-bold text-black">Sin votaciones</h2>
                <p className="text-lg text-center max-w-md">Todavía no creaste ninguna votación o no tienes votaciones recientes</p>
            </div>
        </div>
    )
}

export default SinVotaciones