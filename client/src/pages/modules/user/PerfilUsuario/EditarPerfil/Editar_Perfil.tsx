import './Editar_Perfil.css';

import Aside_Editar_Perfil from './Aside_Editar_Perfil/Aside_Editar_Perfil';
import React from 'react';


const Editar_Perfil = ({ }) => {
    return (
        <main className='EditarPerfil'>

            <Aside_Editar_Perfil/>
            
            <div className='Cadastro'>
                <form action="">
                    <h2>Editar Perfil</h2>
                    <div className='Corpo'>
                        <h3>Informações pessoais</h3>
                        <div className='Two-input'>
                            <div>
                                <label htmlFor="">Nome</label>
                                <input type="text" placeholder='Nome de Usuario' />
                            </div>
                            <div>
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder='usuario@gmail.com' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Bio</label>
                            <textarea placeholder='Escreva sua Bio'>

                            </textarea>
                        </div>
                        <h3>Informações da conta</h3>
                        <div>
                            <label htmlFor="">Senha</label>
                            <input type="password" />
                        </div>
                        <input type="submit" value="Atualizar" />
                    </div>
                </form>

            </div>
        </main>
    )
}

export default Editar_Perfil;