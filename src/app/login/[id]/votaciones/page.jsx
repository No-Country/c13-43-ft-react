import React from 'react'
import Sidebar from '@/containers/Sidebar'
import Votaciones from '@/components/Votaciones'
import Atajos from '@/containers/Atajos'

const VotacionesPage = () => {

    return (
        <div className="flex mt-16">
            <div className="w-1/4"></div>
            <Votaciones />
            <Atajos />
        </div>
    )
}

export default VotacionesPage