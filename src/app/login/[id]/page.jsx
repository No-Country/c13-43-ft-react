import React from 'react'
import Atajos from '@/components/Atajos'
import Resultados from '@/components/Resultados'
import { NextAuthOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'


export default async function Panel() {
    const session = await getServerSession(NextAuthOptions)

    return (
        <div className="flex items-center mt-16 gap-10">
            <div className="w-1/4"></div>
            <Resultados />
            <Atajos />
        </div>
    )
}
