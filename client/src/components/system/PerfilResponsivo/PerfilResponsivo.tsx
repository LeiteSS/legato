import React, { useState } from 'react'
import './PerfilResponsivo.css';

import { useUser } from '../../../middlewares/UserContext';

import ClearIcon from "@mui/icons-material/Clear";
import './PerfilResponsivo';



const PerfilResponsivo = ({ showMenuFiltro, closeMenuFiltro, onSelectItem }: { showMenuFiltro: boolean, closeMenuFiltro: () => void, onSelectItem: any }) => {
    const { userState } = useUser();
    const { user } = userState;

    const [selectedItem, setSelectedItem] = useState('Perfil');

    const handleSelectItem = (item: any) => {
        setSelectedItem(item);
        onSelectItem(item);
    };
    return (
        <>
            <div className={showMenuFiltro ? 'perfil-filter' : 'perfil-filter-none'}>
                <aside className='fundo'>
                    <span>
                        <div className='imagem-perfil'>
                            <ClearIcon className='close-icon' onClick={closeMenuFiltro} />
                            <img src={user ? user.urlIMG : "https://effigy.im/a/brantly.eth.svg"}  className='avatar-perfil avatar-perfil-sidemenu' />
                            <p>{user ? user.name : "Usuário"}</p>
                        </div>
                        <ul className='nav-perfil'>
                            <li>
                                <a

                                    onClick={() => handleSelectItem('Perfil')}
                                    className={selectedItem === 'Perfil' ? 'selected' : ''}
                                >
                                    Perfil
                                </a>
                            </li>
                            <li>
                                <a

                                    onClick={() => handleSelectItem('Favoritos')}
                                    className={selectedItem === 'Favoritos' ? 'selected' : ''}
                                >
                                    Favoritos
                                </a>
                            </li>
                            <li>
                                <a

                                    onClick={() => handleSelectItem('Listas')}
                                    className={selectedItem === 'Listas' ? 'selected' : ''}
                                >
                                    Listas
                                </a>
                            </li>
                            <li>
                                <a

                                    onClick={() => handleSelectItem('Contribuições')}
                                    className={selectedItem === 'Contribuições' ? 'selected' : ''}
                                >
                                    Contribuições
                                </a>
                            </li>
                            {/*<li>
                                <a

                                    onClick={() => handleSelectItem('Mensagens')}
                                    className={selectedItem === 'Mensagens' ? 'selected' : ''}
                                >
                                    Mensagens
                                </a>
    </li>*/}
                        </ul>
                    </span>
                </aside>
            </div>
        </>
    )
}

export default PerfilResponsivo;