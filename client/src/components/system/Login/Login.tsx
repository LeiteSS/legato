import React from 'react';
import './Login.css';
import ClearIcon from "@mui/icons-material/Clear";
import { User } from '../../../models/modules/user/User';
import { useNavigate } from 'react-router-dom';
import getState from '../../../config/state';
import authenticateUser from '../../../hooks/modules/user/authenticate/authenticateUserHook';
import { setToken } from '../../../config/auth';

const Login = ({ showLoginModal, closeLoginModal, openResetaSenha }: { showLoginModal: boolean, closeLoginModal: () => void, openResetaSenha: () => void}) => {
    const [user, setUser] = React.useState<User>();
    const [passwordShown, setPasswordShown] = React.useState(false);
  
    const navigate = useNavigate();
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      console.log(event.target.name)
      setUser({ ...user!, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = async () => {
    
      const userLogin = await getState(setUser);
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      const userResponse = await authenticateUser(userLogin?.email!, userLogin?.password!);

      if (userResponse) {
        setToken(userResponse!.token!);
        
        navigate('/users');
        closeLoginModal()
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
                            <input name="email" type="email" placeholder="E-mail" onChange={handleChange} />
                            <div className="redirecionamento">
                                <label>Senha</label> <a className='esqueceu-senha' onClick={openResetaSenha}>Esqueceu a senha?</a>
                            </div>
                            <input name="password" type="password" placeholder="Senha" onChange={handleChange}/>
                            <input type="button" value="Entrar" onClick={handleSubmit} />
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