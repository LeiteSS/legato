import React, { useState } from 'react';
import { useUser } from '../../../middlewares/UserContext';
import usersData from './users.json';

import './Login.css';
import ClearIcon from "@mui/icons-material/Clear";

const Login = ({ showLoginModal, closeLoginModal }: { showLoginModal: boolean, closeLoginModal: () => void }) => {
    const { userDispatch } = useUser();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event: any) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        const user = usersData.find((user) => user.username === username && user.password === password);

        if (user) {
            userDispatch({ type: 'LOGIN', payload: user }); 
            closeLoginModal();
        } else {
            alert('Usuário ou senha incorretos');
        }
    };

    return (
        <>
            <main className={showLoginModal ? "login-background" : "login-background-none"}>
                <div className="Login">
                    <form action="">
                        <div className="header-login">
                            <div className="box-header">
                                <h2>Entrar</h2>
                                <div className="icone-voltar" onClick={closeLoginModal}>
                                    <ClearIcon />
                                </div>
                            </div>
                        </div>
                        <div className="Corpo">
                            <label htmlFor="">Email ou nome de usuário:</label>
                            <input type="text" value={username} onChange={handleUsernameChange} />
                            <div className="redirecionamento">
                                <label htmlFor="">Senha</label> <a href="">Esqueceu a senha?</a>
                            </div>
                            <input type="password" value={password} onChange={handlePasswordChange}/>
                            <input type="button" value="Entrar" onClick={handleLogin} />
                            <div className="redirecionamento">
                                <p>Não tem conta?</p> <a href="/Cadastro">Cadastre-se</a>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};


export default Login;