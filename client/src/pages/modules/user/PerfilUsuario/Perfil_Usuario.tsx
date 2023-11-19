import React, { useState } from 'react';
import './Perfil_Usuario.css';
import { useUser } from '../../../../middlewares/UserContext';
import MenuHamburger from '../../../../assets/Hamburger_menu.png';
import Perfil from '../../../../components/system/Perfil/Perfil';
import PerfilResponsivo from '../../../../components/system/PerfilResponsivo/PerfilResponsivo';

import Perfil_Bio from './PerfiUsuario/Perfil_Bio/Perfil_Bio';
import Perfil_Favoritos from './PerfiUsuario/Perfil_Favoritos/Perfil_Favoritos';
import Perfil_Listas from './PerfiUsuario/Perfil_Listas/Perfil_Listas';
import Perfil_Contribuicoes from './PerfiUsuario/Perfil_Contribuicoes/Perfil_Contribuicoes';

const Perfil_Usuario = () => {
    const [showFilter, setShowFilter] = useState(false);
    const { userState } = useUser();

    const openFilter = () => { setShowFilter(true); }

    const closeFilter = () => { setShowFilter(false); }

    const [selectedItem, setSelectedItem] = useState('Perfil');

    const handleSelectItem = (item: any) => {
        setSelectedItem(item);
    };



    return (
        <div className='Perfil_usuario'>
            <Perfil onSelectItem={handleSelectItem} />
            <PerfilResponsivo onSelectItem={handleSelectItem} showMenuFiltro={showFilter} closeMenuFiltro={closeFilter} />
            <div className={"menu-hamburger-perfil"} onClick={openFilter}>
                <img src={MenuHamburger} alt="" />
            </div>


            {selectedItem === 'Perfil' && <Perfil_Bio />}
            {selectedItem === 'Favoritos' && <Perfil_Favoritos />}
            {selectedItem === 'Listas' && <Perfil_Listas />}
            {selectedItem === 'Contribuições' && <Perfil_Contribuicoes />}
            {/*selectedItem === 'Mensagens' && <Perfil_Mensagens />*/}
        </div>
    );
};

export default Perfil_Usuario;
