import React, { useState } from "react";

import './Comunidade.css';

import Wallpaper from '../../../assets/wallpaper.jpg';
import Postar from '../../../components/system/Postar/Postar';
import Postagem from '../../../components/system/Postagem/Postagem';
import SideMenuComunidade from '../../../components/system/SideMenuComunidade/SideMenuComunidade';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import ComunidadeTitulo from '../../../components/system/ImgsComunidade/ComunidadeTitulo/ComunidadeTitulo';

const Comunidade = () => {
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

                <img className="background" src={Wallpaper} alt="" />

                <div className='header-comunidade'>

                    <div className='header-box'>

                        <div className='img-comunidade'><ComunidadeTitulo ComunidadeTituloUrl="https://effigy.im/a/brantly.eth.svg" /></div>

                        <div className='titulo-box'><h1>Titulo</h1></div>

                        <div onClick={toggleBtn} className='btn-comunidade-box'>
                            <button className='btn-comunidade'>{btnMembro ? "Unir-se" : "Membro"}</button>
                        </div>
                        <div className='icon-drop'> <MoreHorizIcon onClick={showDropdown} /></div>

                    </div>

                </div>

                <section className='content-comununidade'>

                    <div className='feed-comunidade'>

                        <Postar />

                        <Postagem />

                        <Postagem />

                        <Postagem />

                    </div>

                    <div className='sideMenu-comunidade'>
                        <SideMenuComunidade />
                    </div>



                </section>

            </main>

        </>
    )
}


export default Comunidade;