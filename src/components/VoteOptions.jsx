import React from 'react'

export const VoteOptions = ({ options }) => {

    return (
        <main>
            <div className='flex items-center gap-2 my-4'>
                <input type="checkbox" className='accent-primaryPurple focus:accent-primaryPurple w-4 h-4'/>
                <label >{ options.opcion }</label>
            </div>
            <hr/>
        </main>
    )
}
