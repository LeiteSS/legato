import './Header.css';
import { useUser } from '../../../middlewares/UserContext';
import Logo from '../../../assets/logo.png';
import UserIcon from '../../../assets/user.svg';
import Acessibilidade from '../Acessibilidade/Acessibilidade';
import BarraPesquisa from '../BarraPesquisa/BarraPesquisa';

import { Link } from 'react-router-dom';


const Header = ({ openLoginModal }: { openLoginModal: () => void }) => {
    const { userState, userDispatch } = useUser();
    const { user } = userState;

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

                </div>

                <div className="menu-perfil">

                    <ul className="menu">
                        <li><a href="/Explorar">Explorar</a></li>
                        <li><a href="/Comunidades">Comunidades</a></li>
                        <li><a href="/UploadTab">Upload</a></li>
                    </ul>

                    <div className="perfil-pessoal">
                        <div className="perfil-pessoal">
                            {user ? (
                                <Link to="/perfil">
                                    <img className='avatar-header' src={user.urlIMG} alt="Foto do usuário" />
                                </Link>
                            ) : (
                                <span className={!user ? "active-header" : "none-header"} onClick={openLoginModal} ><img src={UserIcon}></img></span>
                            )}
                        </div>
                    </div>

                </div>

            </header>

            <nav className="menu-responsivo">

                <ul className="menu">
                    <li><a href="/Explorar">Explorar</a></li>
                    <li><a href="/">Comunidades</a></li>
                    <li>Upload</li>
                </ul>

            </nav>
        </>
    )
}

export default Header;