import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './Discussao.css';

import comentariosData from "../../../pages/modules/transcription/Transcricao/comentarios.json";

import SideMenuComunidade from '../../../components/system/SideMenuComunidade/SideMenuComunidade';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';


import Comentario from "../Comentario/Comentario";

const Discussao = () => {
    const [showMenu, setMenu] = useState(false);

    const showDropdown = () => {
        if (showMenu == false) {
            setMenu(true);
        } else {
            setMenu(false);
        }
    }

    const [btnMembro, setBtnMembro] = useState(true);

    const toggleBtn = () => {
        if (btnMembro === false) {
            setBtnMembro(true)
        } else (
            setBtnMembro(false)
        )
    }

    return (
        <>

            <main className='container-comunidade'>


                <section className='content-comununidade'>

                    <div className='feed-comunidade'>


                        <div className="box-postagem-discussao">

                            <div className="titulos-box-discussao">
                                <div className="titulo-box-discussao">
                                    <img className="img-discussao" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/1200px-Solid_black.svg.png" />
                                    <h3>Titulo da discussão</h3>

                                </div>
                                <span className="subtitulo-discussao"> <div className="point"><span>.</span></div>  enviado por
                                    <Link to="/Perfil_Visitante"><span className="autor"> User2123</span></Link>
                                </span>
                            </div>

                            <div className="content-discussao">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>



                            <div className='acoes-box'>

                                <span className='like-box'><ThumbUpOffAltIcon /></span>

                                <span className='comentario-box'><i><MessageOutlinedIcon /></i><span>1 comentário</span></span>

                                <span className='compartilhar-box'><ShareOutlinedIcon />Compartilhar</span>
                            </div>

                        </div>

                        <h2>Comentários</h2>

                        {comentariosData.map((comentario, index) => (
                            <Comentario
                                key={index}
                                User={comentario.autor}
                                userImg={comentario.userImg}
                                Content={comentario.content}
                                dataPubli={comentario.dataPubli}
                            />
                        ))}


                    </div>

                    <div className='sideMenu-comunidade'>
                        <SideMenuComunidade />
                    </div>



                </section>

            </main>

        </>
    )
}


export default Discussao;