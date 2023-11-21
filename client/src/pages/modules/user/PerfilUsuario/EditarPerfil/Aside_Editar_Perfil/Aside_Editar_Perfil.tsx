import './Aside_Editar_Perfil.css';

import React from 'react';

import Usericon from '../../../../../../assets/user.svg'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LockIcon from '../../../../../../assets/LockIcon.png';
import UserXIcon from '../../../../../../assets/UserXIcon.png';
import ExitIcon from '../../../../../../assets/ExitIcon.png';

const Aside_Editar_Perfil = () => {
    return (
        <>

            <aside className='Side-Options'>
                <ul className='Box-Options'>
                    <p>Geral </p>
                    <li>
                        <img src={Usericon} height='24px'/>
                        Editar Conta
                    </li>
                    <li>
                        <NotificationsIcon/>
                        Notificações
                    </li>
                </ul>
                <ul className='Box-Options'>
                    <p>Configurações</p>
                    <li>
                        <img src={LockIcon} alt="Lock Icon" />
                        Privacidade
                    </li>
                    <li>
                        <img src={UserXIcon} alt="User Icon" />
                        Excluir conta
                    </li>
                    <li>
                        <img src={ExitIcon} alt="User Icon" />
                        Sair
                    </li>
                </ul>

            </aside>

        </>
    )
}

export default Aside_Editar_Perfil;