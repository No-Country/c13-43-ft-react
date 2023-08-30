import React from 'react'
import Sidebar from '@/components/Sidebar'
import Votaciones from '@/components/Votaciones'
import Atajos from '@/components/Atajos'
const votaciones = () => {
    return (
        <div className="flex mt-16">
            <div className="w-1/4"></div>
            <Sidebar />
            <Votaciones />
            <Atajos/>
        </div>
    )
}

export default votaciones