import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../../middlewares/UserContext';
import Logo from '../../../assets/logo.png';
import UserIcon from '../../../assets/user.svg';
import Acessibilidade from '../Acessibilidade/Acessibilidade';
import BarraPesquisa from '../BarraPesquisa/BarraPesquisa';
import ButtonArduino from '../btnArduino/btnArduino';

import './Header.css';

const Header = ({ openLoginModal }: { openLoginModal: () => void }) => {
    const { userState, userDispatch } = useUser();
    const { user } = userState;

    const [dropMenuProfile, setMenuProfile] = useState(false);

    const showMenuProfile = () => {
        setMenuProfile(!dropMenuProfile);
    };

    return (
        <>
            <Acessibilidade />
            <header className="container-header">
                <div className="menu-logo-pesquisa">
                    <div className="logo-box">
                        <a href="/">
                            <img src={Logo} alt="Logo legato" className="logo" />
                        </a>
                    </div>
                    <BarraPesquisa />


                    <div className="perfil-pessoal-responsivo">
                        {user ? (
                            <div>

                                <img className='avatar-header' src={user.urlIMG} alt="Foto do usuário" onClick={showMenuProfile} />

                                <div className={dropMenuProfile ? 'dropdown-menu-profile' : 'dropdown-menu-profile-none'}>
                                    <ul className=''>
                                        <Link to="/Explorar" className='link'>
                                            <li>Explorar</li>
                                        </Link>
                                        <Link to="/Comunidades" className='link'>
                                            <li>Comunidades</li>
                                        </Link>
                                        <Link to="/UploadTab" className='link'>
                                            <li>Upload</li>
                                        </Link>

                                        <Link to="/perfil" className='link'>
                                            <li>Meu Perfil</li>
                                        </Link>

                                        <Link to="/Perfil/EditarPerfil" className='link'>
                                            <li>Configurações</li>
                                        </Link>
                                        <li>Sair</li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <span className={!user ? "active-header" : "none-header"} onClick={openLoginModal}>
                                <img src={UserIcon} alt="Ícone de usuário" />
                            </span>
                        )}
                    </div>



                </div>

                <div className="menu-perfil">
                    <ul className="menu">
                        <li><a href="/Explorar">Explorar</a></li>
                        <li><a href="/Comunidades">Comunidades</a></li>
                        <li><a href="/UploadTabExplorar">Upload</a></li>
                        <li><ButtonArduino/></li>
                    </ul>

                    <div className="perfil-pessoal">
                        {user ? (
                            <div>

                                <img className='avatar-header' src={user.urlIMG} alt="Foto do usuário" onClick={showMenuProfile} />

                                <div className={dropMenuProfile ? 'dropdown-menu-profile' : 'dropdown-menu-profile-none'}>
                                    <ul className=''>
                                        <Link to="/Explorar" className='link'>
                                            <li>Explorar</li>
                                        </Link>
                                        <Link to="/Comunidades" className='link'>
                                            <li>Comunidades</li>
                                        </Link>
                                        <Link to="/UploadTab" className='link'>
                                            <li>Upload</li>
                                        </Link>

                                        <Link to="/perfil" className='link'>
                                            <li>Meu Perfil</li>
                                        </Link>

                                        <Link to="/Perfil/EditarPerfil" className='link'>
                                            <li>Configurações</li>
                                        </Link>
                                        <li>Sair</li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <span className={!user ? "active-header" : "none-header"} onClick={openLoginModal}>
                                <img src={UserIcon} alt="Ícone de usuário" />
                            </span>
                        )}
                    </div>
                </div>
            </header>

            <nav className="menu-responsivo">
                <ul className="menu">
                    <Link to="/Explorar" className='link'>
                        <li>Explorar</li>
                    </Link>
                    <Link to="/Comunidades" className='link'>
                        <li>Comunidades</li>
                    </Link>
                    <Link to="/UploadTabExplorar" className='link'>
                        <li>Upload</li>
                    </Link>
                </ul>
            </nav>
        </>
    );
};

export default Header;
