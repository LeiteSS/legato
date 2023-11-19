import '../../Perfil_Usuario.css';
import './Perfil_Listas.css';

import SettingsIcon from '@mui/icons-material/Settings';
import TableMusics from '../../../../../../components/system/TableMusics/TableMusics';
import AvisoPerfil from '../../../../../../components/system/AvisoPerfil/AvisoPerfil';
import React from 'react';


const Perfil_Listas = ({ }) => {

    const tituloAviso = "Crie sua primeira lista";
    const conteudoAviso = "Com as listas é possivel organizar as transcrições de acordo à sua preferência e compartilhar à qualquer público. Clique em “+criar lista” para criar sua lista";

    return (

        <div className='container-usuario'>
            <div className='header-perfil'>


                <div className='titulo-perfil-usuario'>
                    <h2>Listas</h2>
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

export default Perfil_Listas;