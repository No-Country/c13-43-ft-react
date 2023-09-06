"use client"
import React from 'react'
import Atajos from '@/containers/Atajos'
import Resultados from '@/components/Resultados'
import { NextAuthOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import SinVotaciones from '@/components/SinVotaciones'
import { redirect } from 'next/navigation'


export default async function Panel() {

    const session = await getServerSession(NextAuthOptions)
    // const [component, setComponent] = React.useState(true)


    
    return (
        <div className="flex items-center mt-16 gap-10">
            <div className="w-1/4"></div>
            {true ? <Resultados /> : <SinVotaciones />}
            <Atajos />
        </div>
    )
}
