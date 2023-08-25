import React from 'react'
import Atajos from '@/components/Atajos'
import Resultados from '@/components/Resultados'

const Panel = () => {
    return (
        <div className="flex items-center mt-16 gap-10">
            <div className="w-1/4"></div>
            <Resultados />
            <Atajos />
        </div>
    )
}

export default Panel
