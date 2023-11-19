import './SideMenuMobile.css';
{/*import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';*/}
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';

const SideMenuMobile = () => {
    const [showMenu, setMenu] = useState(false);

    const showDropdown = () => {
        if(showMenu == false){
            setMenu(true);
        }else{
            setMenu(false);
        }
        
    }


    return (
        <>
            <div className='side-menu-mobile-background'>
                <div className="side-menu-mobile">

                <MoreHorizIcon onClick={showDropdown} className='icon-drop'/>

                    <ul className={showMenu ? 'dropdown-menu' : 'dropdown-menu-none'}>
                        {/*<h2>Mais opções</h2>*/}

                        <li><FileDownloadOutlinedIcon />Salvar em lista</li>
                        <li><FavoriteBorderOutlinedIcon />Favoritar Cifra</li>
                        <li><ModeEditOutlinedIcon />Corrigir Cifra</li>
                        <li><ShareOutlinedIcon />Compartilhar</li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default SideMenuMobile;