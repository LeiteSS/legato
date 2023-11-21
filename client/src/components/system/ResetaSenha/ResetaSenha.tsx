import './ResetaSenha.css';

import React from 'react';
import ClearIcon from "@mui/icons-material/Clear";

const ResetaSenha = ({ showResetarSenha, closeResetarSenha }: { showResetarSenha: boolean, closeResetarSenha: () => void }) => {
    return (
        <>
            <main className={showResetarSenha ? "login-background" : "login-background-none"}>
                <div className="Login">
                    <form action="">
                        <div className="header-login">
                            <div className="box-header">
                                <h2>Resetar Senha</h2>
                                <div className="icone-voltar" onClick={closeResetarSenha}>
                                    <ClearIcon />
                                </div>
                            </div>
                        </div>
                        <div className="Corpo">
                            <span className='info'>
                                As instruções de redefinição de senha serão enviadas para o seu endereço de e-mail cadastrado.
                            </span>

                            <h3>Username ou Email:</h3>

                            <input type='text'/>

                            <input className='btn-resetar-senha' type="button" value="Enviar"/>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default ResetaSenha;