import React, { useState } from 'react';
import Wallpaper from '../../../assets/wallpaper.jpg';
import './Perfil.css';
import Avatar from '../Avatar/Avatar';
import { useUser } from '../../../middlewares/UserContext';

const Perfil = ({ onSelectItem }: { onSelectItem: any }) => {
    const { userState } = useUser();
    const { user } = userState;

    const [selectedItem, setSelectedItem] = useState('Perfil');

    const handleSelectItem = (item: any) => {
        setSelectedItem(item);
        onSelectItem(item);
    };

    return (
        <>
            <img className="background" src={Wallpaper} alt="" />
            <aside>
                <div className='imagem-perfil imagem-perfil-position'>
                    <img src={user ? user.urlIMG : "https://effigy.im/a/brantly.eth.svg"} />
                    <p>{user ? user.name : "Usuário"}</p>
                </div>
                <span className='span-perfil'> 
                    <ul>
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
        </>
    );
};

export default Perfil;
