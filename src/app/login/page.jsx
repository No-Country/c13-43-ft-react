import React from 'react';

export const login = () => {
    return (
        <>
            <div className='inicio flex gap-40 py-12 px-32'>
                <div className='login'>
                    <div className='text-secondaryBlack text-5xl font-bold font-dmsans flex justify-center'> Iniciar Sesión </div>
                    <form action="">
                        <div className='styleInput'>
                            <label className='font-dmsans'> Email </label>
                            <input className="inputLogin" type="text" name="name"/>
                        </div>
                        
                        <div className='styleInput'>
                            <label className='labelLogin font-zendots'> Contraseña </label>
                            <input className="inputLogin" type="text" name="name"/>
                        </div>

                        <button className='buttonLogin'> Ingresar </button>

                        <div className='separator'>
                            <hr/>
                                <span>Or</span>
                            <hr/>
                        </div>

                        <button className='buttonGoogle'> 
                            <picture>
                                <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="logoGoogle"/>
                            </picture>
                            Entrar con google 
                        </button>
                    </form>
                </div>

                <div>
                    <p>imagen</p>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}

export default login