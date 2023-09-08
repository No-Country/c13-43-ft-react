import React from 'react'

export const VoteOptions = ({ options, name, value }) => {

    return (
        <main>
            <div className='flex items-center gap-2 my-4'>
                <input type="radio" name={ name } value={ value } className='accent-primaryPurple focus:accent-primaryPurple w-4 h-4'/>
                <label className='text-secondaryBlack'>{ options }</label>
            </div>
            <hr/>
        </main>
    )
}
