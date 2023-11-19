import './BtnVersao.css';

import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useState } from 'react';

const BtnVersao = () => {
    const [dropMenu, setMenu] = useState(false);

    const showMenu = () =>{
        if(dropMenu == false){
            setMenu(true);
        }else{
            setMenu(false);
        }
        
    }

    return (
        <>
            <section>
                <button onClick={showMenu} className='btn-versao'><span>Versão principal</span><ArrowDropDownOutlinedIcon /></button>

                <div className={dropMenu ? 'dropdown-menu-versoes' : 'dropdown-menu-versoes-none'}>

                    <ul className='lista-filtros'>
                        <li className='filtro-atual'>Cifras</li>
                        <li>Letra</li>
                        <li>Partitura</li>
                        <li>Tab de Baixo</li>
                        <li>Tab de Bateria</li>
                    </ul>

                    <ul className='lista-versoes'>
                        <span>Versões</span>
                        <li>Versão Principal</li>
                        <li>Simplificada</li>
                        <li>Solo</li>
                        <li>Introdução</li>
                    </ul>

                </div>
            </section>

        </>
    )
}

export default BtnVersao;