import React from "react";

import './Comunidade.css';

import Wallpaper from '../../../assets/wallpaper.jpg';
import Postar from '../../../components/system/Postar/Postar';
import Postagem from '../../../components/system/Postagem/Postagem';
import SideMenuComunidade from '../../../components/system/SideMenuComunidade/SideMenuComunidade';

import ComunidadeTitulo from '../../../components/system/ImgsComunidade/ComunidadeTitulo/ComunidadeTitulo';

const Comunidade = () => {

    return (
        <>

            <main className='container-comunidade'>

                <img className="background" src={Wallpaper} alt="" />

                <div className='header-comunidade'>

                    <div className='header-box'>

                        <div className='img-comunidade'><ComunidadeTitulo ComunidadeTituloUrl="https://effigy.im/a/brantly.eth.svg" /></div>

                        <div className='titulo-box'><h1>Titulo</h1></div>

                        <div className='btn-comunidade-box'><button className='btn-comunidade'>Unir-se</button></div>

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
                        <SideMenuComunidade/>
                    </div>



                </section>

            </main>

        </>
    )
}


export default Comunidade;