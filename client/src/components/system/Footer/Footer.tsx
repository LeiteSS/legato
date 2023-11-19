
import './Footer.css';
import Logo from '../../../assets/logo.png';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer-row">
                    <span className="footer-list"> 
                        <a href="">Sobre nós</a>
                        <a href="">Contato</a>
                        <a href="/Cadastro">Crie sua conta</a>
                    </span>

                    <span>
                        <button className="btn-box">
                            <LanguageIcon/>
                            <span  className="btn-seta">
                                Português
                                <KeyboardArrowDownIcon/>
                            </span>
                        </button>
                    </span>
                </div>

                <div className="footer-row">
                    <span className="footer-list">
                        <a href="">Aviso Legal</a>
                        <a href="">Política de Privacidade</a>
                        <a href="">Termos de Uso</a>
                    </span>

                    <span className="footer-list">
                        <FacebookIcon className="footer-list-icons"/>
                        <InstagramIcon className="footer-list-icons"/>
                        <TwitterIcon className="footer-list-icons"/>
                        <YouTubeIcon className="footer-list-icons"/>
                    </span>

                </div>

                <div className="footer-row">

                    <img src={Logo} alt="Logo legato" className="logo"></img>

                    <span>São Paulo, 2023</span>

                    <span>MMXXIII</span>

                </div>
            </footer>
        </div>
    )
}

export default Footer