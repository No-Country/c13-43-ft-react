// Descripción: El componente "ProfileInfo" se encarga de mostrar y gestionar la información del perfil del usuario. Permite 
// al usuario editar su nombre, contraseña y eliminar su cuenta. También muestra la primera letra del nombre del usuario.

// Funcionamiento: El componente obtiene la información del usuario a través de la sesión activa.
// Permite al usuario editar su nombre y contraseña utilizando campos de entrada de texto. La edición se habilita al hacer 
// clic en el botón switch.

"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useSession } from "next-auth/react";
import ModalGeneral from '@/containers/ModalGeneral';
import ModalEliminarCuenta from './ModalEliminarCuenta';
import ModalSuccessChanges from './ModalSuccessChanges';
import Loader from './Loader';
import Handler from './Handler';
import { APIGetMe, APIUpdateMe } from '@/lib/APICalls';


const ProfileInfo = () => {

    const { data: session } = useSession();

    const [edit, setEdit] = React.useState(false)
    const [successfulSave, setSuccessfulSave] = React.useState(false)
    const [eliminarCuenta, setEliminarCuenta] = React.useState(false)
    const [loaderActive, setLoaderActive] = React.useState(false)
    const email = session.user?.email;
    const availableEdit = {
        true: "h-10 p-2 rounded-lg my-2 border border-blue-500 bg-white text-gray-900 focus:outline-none focus:ring focus:border-blue-500",
        false: "h-10 p-2 rounded-lg my-2 border border-gray-300 bg-gray-100 text-gray-600 cursor-not-allowed"
    }

    const [formData, setFormData] = React.useState({
        name: '',
        password: '',
    })

    useEffect( () => {
        const dbDatos =async () =>{
            try {
                setLoaderActive( true )
                const dataMe = await APIGetMe( email );
                const dbName = Object.values( dataMe )[1].name;
                const dbPassword = Object.values( dataMe )[1].password;
                console.log(Object.values( dataMe )[1]);
                setFormData({
                    name: dbName,
                    password: dbPassword
                })
                setLoaderActive( false );
            } catch (error) {
                console.error(error);
            }
        }
        dbDatos();
    
    }, [email])
    

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoaderActive(true);
        const update= await APIUpdateMe(email, formData);
        if (update.message){
            setLoaderActive(false);
            setSuccessfulSave(!successfulSave);
        }
        setLoaderActive(false);
    }

  return (
    <>
        <Loader active={loaderActive} />
        <div className='relative mx-auto profile flex justify-center w-auto p-0 md:w-1/2 md:px-4'>
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
                        className={availableEdit['false']} 
                        readOnly
                        name = "email"
                        value= { email } 
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
                        type="button"
                        className="text-red-500 text-center md:text-left text-sm font-semibold mt-3"
                        onClick = {() => setEliminarCuenta(!eliminarCuenta)}
                    > 
                        ELIMINAR CUENTA 
                    </button>
                    <button 
                        type="submit" 
                        className="absolute px-8 md:w-auto w-3/4 h-8 -bottom-6  md:-bottom-0 md:-right-2/3 text-secondaryWhite rounded-3xl bg-green-500"
                    > 
                        GUARDAR CAMBIOS 
                    </button>
                </form>
                <div className="relative flex justify-center items-center mr-4 md:mr-0 header-right w-16 h-16 rounded-full border"> 
                    <p className="font-semibold text-primaryPurple text-2xl"> {session.user.name.substring(0,2).toUpperCase()} </p>
                    <div 
                        className="absolute cursor-pointer flex justify-center items-center bottom-0 left-0 bg-gray-300 w-5 h-5 rounded-full"
                        onClick = {() => console.log("Aqui se debería poder subir una imagen")}
                        >
                        <Image src="/Images/Pencil.png" alt="edit" width={13} height={13} />
                    </div>
                </div>
            </div>
            <div className="absolute right-24 top-24 md:right-40 cursor-pointer">
                <Handler state={edit} setState={setEdit} />
            </div>
            <ModalGeneral state={eliminarCuenta} changeState={setEliminarCuenta}>
                <ModalEliminarCuenta state={eliminarCuenta} changeState={setEliminarCuenta} />
            </ModalGeneral>
            <ModalGeneral state={successfulSave} changeState={setSuccessfulSave}>
                <ModalSuccessChanges />
            </ModalGeneral>
        </div>
    </>
  )
}

export default ProfileInfo