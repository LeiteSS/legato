import React, { useState } from 'react';
import Wallpaper from '../../../assets/wallpaper.jpg';
import './Perfil.css';
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

            <div className='img-perfil-box'>
                <img className='img-perfil' src={user ? user.urlIMG : "https://effigy.im/a/brantly.eth.svg"} alt="" />
                <p>{user ? user.name : "Usuário"}</p>
            </div>
            <aside className='nav-perfil'>

                <span>
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
