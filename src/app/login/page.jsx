import Navbar from '@/components/Navbar';
import React from 'react';

export const login = () => {
    return (
        <>
            <div className='inicio'>
                <div className='login'>
                <div className='tituloLogin'> Iniciar Sesión </div>
                    <form action="">
                        <div className='styleInput'>
                            <label> Email </label>
                            <input class="inputLogin" type="text" name="name"/>
                        </div>
                        
                        <div className='styleInput'>
                            <label class='labelLogin'> Contraseña </label>
                            <input class="inputLogin" type="text" name="name"/>
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