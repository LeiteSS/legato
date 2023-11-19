import { useState } from 'react';

import './PerfilArtista.css';

import MenuHamburger from '../../../assets/Hamburger_menu.png';
import Filters from '../../../components/system/Filters/Filters';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarraPesquisa from '../../../components/system/BarraPesquisa/BarraPesquisa';
import FiltersResponsivo from '../../../components/system/FiltersResponsivo/FiltersResponsivo';
import React from 'react';




const Perfil_Artista = () => {
    const [favorited, setFavorited] = useState(false);
    const [showFilter, setShowFilter] = useState(false);

    const openFilter = () => { setShowFilter(true) };

    const closeFilter = () => { setShowFilter(false) };

    return (
        <main className='Perfil_Artista'>
            <img className="background" src={"https://www.rockbizz.com.br/wp-content/uploads/2016/03/Beatles.jpg"} alt="" />


            <div className='artist-name-box'>
                <h1 className='artist-name'>The Beatles</h1>
                <span className='seguidores-artista'><span className='value-seguidores'>300 </span>Seguindo</span>
            </div>


            <div className='container-artista'>

                <Filters showHeaderCommunity={false} exibirGenero={false} />
                <FiltersResponsivo exibirGenero={false} showHeaderCommunity={false} showMenuFiltro={showFilter} closeMenuFiltro={closeFilter} />

                <div className="menu-hamburger" onClick={openFilter}>
                    <img src={MenuHamburger} alt="" />
                </div>

                <div className='box-artist'>

                    <div className='content-artist'>

                        <div className='title-artist'>
                            <div className='box-title'>
                                <h1>Músicas mais acessadas</h1>
                                <div className='icons-artist'>
                                    <li onClick={() => setFavorited(!favorited)}>
                                        {favorited ? <FavoriteIcon className='favoritar' /> : <FavoriteBorderIcon className='favoritar-borda' />}
                                        Seguir
                                    </li>
                                </div>
                            </div>
                        </div>

                        <div className='mais-acessadas'>
                            <li><span>1.</span>Here Comes the Sun</li>
                            <li><span>2.</span>Hey Jude</li>
                            <li><span>3.</span>Let it Be</li>
                            <li><span>4.</span>Come Together</li>
                            <li><span>5.</span>Something</li>
                        </div>

                        <div className='title-artist'>
                            <div className='box-title'>
                                <h1>Pesquisar Músicas</h1>
                            </div>
                        </div>

                        <BarraPesquisa />
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Perfil_Artista;