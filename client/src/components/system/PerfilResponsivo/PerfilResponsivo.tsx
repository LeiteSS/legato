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
                <div className='imagem-perfil imagem-perfil-position'>
                    <img src={user ? user.urlIMG : "https://effigy.im/a/brantly.eth.svg"} />
                    <p>{user ? user.name : "Usuário"}</p>
                </div>
                <aside className='fundo'>
                    <span>


                        <ul className='nav-perfil'>
                            <li className='close-icon-li'>
                                <a

                                    onClick={() => handleSelectItem('Perfil')}
                                    className={selectedItem === 'Perfil' ? 'selected' : ''}
                                >
                                    Perfil
                                </a>
                                <ClearIcon className='close-icon' onClick={closeMenuFiltro} />
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