'use client'
import React from 'react';
import Image from 'next/image';

export const ChangeLi = ({ img, nombre, isActive, onClick }) => {
    return (
        <li
            className={`panelLi py-4 pl-6 rounded-tl-3xl rounded-bl-3xl ${isActive ? 'active' : ''}`}
            onClick={onClick}
        > 
            <a href="#" className='text-primaryOrange flex gap-6 pl-2'>
                <div className='flex justify-center items-center'>
                    <Image src={ img } width={ 20 } height={ 20 } className='open absolute hidden' alt='image'/>
                    <Image src={ img } width={ 20 } height={ 20 } className='close absolute hidden' alt='image'/>
                </div>
                <span className='font-dmsans font-medium '> { nombre } </span>
            </a>
        </li>
    )
}
