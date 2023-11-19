import '../../Perfil_Usuario.css';
import './Perfil_Favoritos.css';

import AvisoPerfil from '../../../../../../components/system/AvisoPerfil/AvisoPerfil';
import SettingsIcon from '@mui/icons-material/Settings';
import TableMusics from '../../../../../../components/system/TableMusics/TableMusics';
import React from 'react';


const Perfil_Favoritos = ({ }) => {

    const tituloAviso = "Favorite sua primeira múscia";
    const conteudoAviso = "Vá favoritando as múscicas que você mais gosta e elas aparecerão aqui!";


    return (

        <div className='container-usuario'>
            <div className='header-perfil'>


                <div className='titulo-perfil-usuario'>
                    <h2 >Favoritos</h2>
                </div>


                <div className='box-seguidores'>
                    <span className='seguidores'>0 Seguidores</span>
                    <span className='seguindo'>0 Seguindo</span>
                    <a className='settings-icon' href='/Perfil/EditarPerfil'><SettingsIcon /></a>
                </div>

            </div>
            <div className='border-bottom'></div>
            <div className='table-favorites'>
                <TableMusics className="table-box" />
            </div>

            <div>
                <AvisoPerfil titulo={tituloAviso} conteudo={conteudoAviso} />
            </div>

        </div>

    )
}

export default Perfil_Favoritos;