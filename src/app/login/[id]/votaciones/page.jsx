import React from "react";
import Votaciones from "@/components/Votaciones";
import Atajos from "@/containers/Atajos";

const VotacionesPage = () => {

    return (
        <div className="flex flex-col items-center test:items-start test:flex-row justify-around xl:justify-end mt-16 xl:mr-40">
            <Votaciones />
            <div className='mt-5'>
                <Atajos />
            </div>
        </div>
    )
}

export default VotacionesPage;
