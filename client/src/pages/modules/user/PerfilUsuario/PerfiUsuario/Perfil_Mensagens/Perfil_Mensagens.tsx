import '../../Perfil_Usuario.css';
import './Perfil_Mensagens.css';
import Perfil from '../../../../../../components/system/Perfil/Perfil';
import SettingsIcon from '@mui/icons-material/Settings';
import TableMusics from '../../../../../../components/system/TableMusics/TableMusics';
import React from 'react';


const Perfil_Mensagens = ({ }) => {

    return (

        <div className='container-usuario'>
            <div className='header-perfil'>


                <div className='titulo-perfil-usuario'>
                    <h2 >Mensagens</h2>
                </div>


                <div className='box-seguidores'>
                    <span className='seguidores'>0 Seguidores</span>
                    <span className='seguindo'>0 Seguindo</span>
                    <SettingsIcon />
                </div>

            </div>
            <div className='border-bottom'></div>
            <div className='table-favorites'>
                <TableMusics className="table-box" />
            </div>

        </div>

    )
}

export default Perfil_Mensagens;