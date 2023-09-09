"use client"
import React from 'react'
import Image from 'next/image'
import { useSession } from "next-auth/react";
import ModalGeneral from '@/containers/ModalGeneral';
import ModalEliminarCuenta from './ModalEliminarCuenta';
import Handler from './Handler';


const ProfileInfo = () => {

    const { data: session } = useSession();

    const [eliminarCuenta, setEliminarCuenta] = React.useState(false)
    const [edit, setEdit] = React.useState(false)

    const availableEdit = {
        true: "h-10 p-2 rounded-lg my-2 border border-blue-500 bg-white text-gray-900 focus:outline-none focus:ring focus:border-blue-500",
        false: "h-10 p-2 rounded-lg my-2 border border-gray-300 bg-gray-100 text-gray-600 cursor-not-allowed"
    }

    const [formData, setFormData] = React.useState({
        name: session.user.name,
        email: session.user.email,
        password: '*******',
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
    }

  return (
    <div className='relative mx-auto profile flex justify-center w-1/2 px-4'>
        <div className="header flex w-full justify-between p-4">
            <form onSubmit={handleSubmit} className="flex flex-col w-3/4">
                <h1 className="font-bold text-3xl my-3"> Perfil </h1>
                <h2 className="font-bold text-xl my-2"> Editar perfil </h2>
                <label htmlFor="name" className="font-semibold text-sm"> NOMBRE Y APELLIDO </label>
                <input 
                    type="text" 
                    className={availableEdit[`${edit}`]} 
                    readOnly={!edit}
                    name = "name"
                    value = {formData.name} 
                    onChange={handleChange} 
                />
                <hr className="flex-grow border-secondaryBlack mb-2" />
                <label htmlFor="email" className="font-semibold text-sm"> EMAIL </label>
                <input 
                    type="text" 
                    className={availableEdit[`${edit}`]} 
                    readOnly={!edit}
                    name = "email"
                    value= {formData.email} 
                    onChange={handleChange} 
                />
                <hr className="flex-grow border-secondaryBlack mb-2" />
                <label htmlFor="password" className="font-semibold text-sm"> CONTRASEÑA </label>
                <input 
                    type="password" 
                    className={availableEdit[`${edit}`]}
                    readOnly={!edit}
                    name = "password"
                    value = {formData.password} 
                    onChange={handleChange} 
                />
                <hr className="flex-grow border-secondaryBlack mb-2" />
                <button 
                    className="text-red-500 text-left text-sm font-semibold mt-3"
                    onClick = {() => setEliminarCuenta(!eliminarCuenta)}
                > 
                    ELIMINAR CUENTA 
                </button>
                <button 
                    type="submit" 
                    className="absolute px-8 w-auto h-8 bottom-0 -right-2/3 text-secondaryWhite rounded-3xl bg-green-500"
                > 
                    GUARDAR CAMBIOS 
                </button>
            </form>
            <div className="relative flex justify-center items-center header-right w-16 h-16 rounded-full border"> 
                <p className="font-semibold text-primaryPurple text-2xl"> {session.user.name.substring(0,2).toUpperCase()} </p>
                <div 
                    className="absolute cursor-pointer flex justify-center items-center bottom-0 left-0 bg-gray-300 w-5 h-5 rounded-full"
                    onClick = {() => console.log("Aqui se debería poder subir una imagen")}
                    >
                    <Image src="/Images/Pencil.png" alt="edit" width={13} height={13} />
                </div>
            </div>
        </div>
        <div className="absolute top-24 right-40 cursor-pointer">
            <Handler state={edit} setState={setEdit} />
        </div>
        <ModalGeneral state={eliminarCuenta} changeState={setEliminarCuenta}>
            <ModalEliminarCuenta state={eliminarCuenta} changeState={setEliminarCuenta} />
        </ModalGeneral>
    </div>
  )
}

export default ProfileInfo