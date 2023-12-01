import './FiltesResponsivo.css'
import React, { useState } from 'react';
import ClearIcon from "@mui/icons-material/Clear";
import CriarComunidade from '../CriarComunidade/CriarComunidade';
import CriarDiscussao from '../CriarDiscussao/CriarDiscussao';
import GridViewIcon from '@mui/icons-material/GridView';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import UserIcon from '../../../assets/user.svg';

const FiltersResponsivo = ({ showHeaderCommunity, showMenuFiltro, exibirGenero, closeMenuFiltro }: { showHeaderCommunity: boolean, showMenuFiltro: boolean, exibirGenero: boolean, closeMenuFiltro: () => void }) => {

    const [showCriarComunidade, setshowCriarComunidade] = useState(false);

    const openCriarComunidade = () => {
        setshowCriarComunidade(true);
    }

    const closeCriarComunidade = () => {
        setshowCriarComunidade(false);
    }

    const [showCriarDiscussao, setshowCriarDiscussao] = useState(false);


    const openCriarDiscussao = () => {
        setshowCriarDiscussao(true);
    }

    const closeCriarDiscussao = () => {
        setshowCriarDiscussao(false);
    }
    return (
        <main className={showMenuFiltro ? 'filter-background' : 'filter-background-none'}>
            <div className='menu-filtro' >

                <div className="box-filtro">

                    <div className={showHeaderCommunity ? 'header-comunidades block' : 'header-none'}>
                        <li><div className="icons-communities"><GridViewIcon /></div><p>Todas as Comunidades</p></li>
                        <li><img src={UserIcon} className="icons-communities" /><p>Minhas Comunidades</p></li>
                        <li onClick={openCriarComunidade}><span className='btn-comunidades'><ChatBubbleOutlineIcon /><button>Criar Comunidade</button></span></li>
                        <li onClick={openCriarDiscussao}><span className='btn-comunidades'><ChatBubbleOutlineIcon /><button>Criar discussão</button></span></li>
                        <CriarComunidade showCriarComunidade={showCriarComunidade} closeCriarComunidade={closeCriarComunidade} />
                        <CriarDiscussao showCriarDiscussao={showCriarDiscussao} closeCriarDiscussao={closeCriarDiscussao}/>
                    </div>

                    <h3 className="titulos">Filtros <ClearIcon className="close-filter" onClick={closeMenuFiltro} /></h3>

                    <div className="block">
                        <h4 className="tilte-block">Dificuldade</h4>

                        <div className="item-filtro">
                            <input type="checkbox"></input>
                            <label>Iniciante</label>
                        </div>

                        <div className="item-filtro">
                            <input type="checkbox"></input>
                            <label>Intermediário</label>
                        </div>

                        <div className="item-filtro">
                            <input type="checkbox"></input>
                            <label>Avançando</label>
                        </div>
                    </div>

                    <div className="block">
                        <h4 className="tilte-block">Instrumeto</h4>

                        <div className="item-filtro">
                            <input type="checkbox"></input>
                            <label>Violão/Guitarra</label>
                        </div>

                        <div className="item-filtro">
                            <input type="checkbox"></input>
                            <label>Baixo</label>
                        </div>

                        <div className="item-filtro">
                            <input type="checkbox"></input>
                            <label>Piano</label>
                        </div>

                        <div className="item-filtro">
                            <input type="checkbox"></input>
                            <label>Ukulele</label>
                        </div>

                        <div className="item-filtro">
                            <input type="checkbox"></input>
                            <label>Bateria</label>
                        </div>

                    </div>
                    <div className={exibirGenero ? "block" : "block-none"}>
                        <h4 className="tilte-block">Genêro</h4>

                        <div className="item-filtro">
                            <input type="checkbox"></input>
                            <label>Rock</label>
                        </div>

                        <div className="item-filtro">
                            <input type="checkbox"></input>
                            <label>Pop</label>
                        </div>

                        <div className="item-filtro">
                            <input type="checkbox"></input>
                            <label>Gospel</label>
                        </div>

                        <div className="item-filtro">
                            <input type="checkbox"></input>
                            <label>Sertanejo</label>
                        </div>

                        <div className="item-filtro">
                            <input type="checkbox"></input>
                            <label>Clássico</label>
                        </div>

                    </div>


                </div>


            </div>
        </main>
    )
}

export default FiltersResponsivo;