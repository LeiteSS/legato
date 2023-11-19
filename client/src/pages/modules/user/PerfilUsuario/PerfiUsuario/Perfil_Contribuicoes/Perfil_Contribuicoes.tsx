import '../../Perfil_Usuario.css';
import './Perfil_Contribuicoes.css';

import AvisoPerfil from '../../../../../../components/system/AvisoPerfil/AvisoPerfil';

import SettingsIcon from '@mui/icons-material/Settings';
import TableMusics from '../../../../../../components/system/TableMusics/TableMusics';
import React from 'react';


const Perfil_Contribuicoes = ({ }) => {

    const tituloAviso = "Publique sua primeira transcrição";
    const conteudoAviso = "Esta seção está vazia porque você ainda não enviou nenhuma guia.Crie sua primeira aba para ajudar outros músicos a aprender suas músicas favoritas.";

    return (
        <div className='container-usuario'>
            <div className='header-perfil'>


                <div className='titulo-perfil-usuario'>
                    <h2>Contribuições</h2>
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

export default Perfil_Contribuicoes;