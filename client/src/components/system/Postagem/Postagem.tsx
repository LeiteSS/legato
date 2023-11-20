import './Postagem.css';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { Link } from 'react-router-dom';
import React from 'react';


const Postagem = () => {
    return (
        <>
            <section className="container-postagem">

                <div className="box-Postagem">

                    <div className="titulos-box">
                        <h3>Titulo da discussão</h3>
                        <span className="subtitulo"> em <Link className='link-comunidade' to='/Comunidade'><span className="comunidades"> Comunidades</span></Link> enviado por <span className="autor"> User2123</span>
                        </span>
                    </div>

                    <div className="content-box">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div className='acoes-box'>

                        <span className='like-box'><ThumbUpOffAltIcon/></span>
                        
                        <span className='comentario-box'><i><MessageOutlinedIcon/></i><span>1 comentário</span></span>

                        <span className='compartilhar-box'><ShareOutlinedIcon/>Compartilhar</span>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Postagem;