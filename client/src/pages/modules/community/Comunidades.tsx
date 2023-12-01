import "./Comunidades.css";

import React from "react";
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import Avatar from "../../../components/system/Avatar/Avatar";
import Filters from "../../../components/system/Filters/Filters";
import Postagem from "../../../components/system/Postagem/Postagem";
import FiltersResponsivo from "../../../components/system/FiltersResponsivo/FiltersResponsivo";
import MenuHamburger from '../../../assets/Hamburger_menu.png';
import comunidadesData from "../../Home/comunidades.json";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const Comunidades = () => {

    const carousel = React.useRef(HTMLElement.arguments);
    const [width, setWidth] = useState(0)
    const [showFilter, setShowFilter] = useState(false);

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth + 500)
        
    }, []);

    const openFilter = () => {
        setShowFilter(true);
        console.log("teste")
    }

    const closeFilter = () => {
        setShowFilter(false);
    }

    const [setas, setSetas] = useState(true);

    const toggleSetas = () => {
        if (setas === true) {
            setSetas(false)
        } else {
            setSetas(true)
        }
    }


    return (
        <menu>
            <div className="container-comunidades">


                <Filters showHeaderCommunity={true} exibirGenero={true} />

                <div className="menu-hamburger" onClick={openFilter}>
                    <img src={MenuHamburger} alt="" />
                </div>
                <FiltersResponsivo exibirGenero={true} showHeaderCommunity={true} showMenuFiltro={showFilter} closeMenuFiltro={closeFilter} />

                <div className="content-comunidades">

                    <motion.div ref={carousel} className="list-imgs" whileTap={{ cursor: "grabbing" }}>
                        <motion.div className='inner'
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}>
                            {comunidadesData.map((comunidade, index) => (
                                <Link className='link-home' to={`/Comunidade`}>
                                    <Avatar key={index} avatarUrl={comunidade.comunidadeImg} name={comunidade.comunidadeNome} />
                                </Link>
                            ))}


                        </motion.div>
                    </motion.div>

                    <div className="comunidades-box">
                        <div className="title-header">
                            <h2>Discussões</h2>
                            <span onClick={toggleSetas} className="box-setas">

                                <div className="setas">
                                    Recomendado
                                    {setas ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                                </div>

                                <div className="dropdown-menu-comunidades-container">

                                    <div className={setas ? "dropdown-menu-comunidades-none" : "dropdown-menu-comunidades"}>
                                        <ul>
                                            <li>Recomendado</li>
                                            <li>Últimas publicações</li>
                                        </ul>
                                    </div>

                                </div>

                            </span>
                        </div>

                        <Postagem />
                        <Postagem />
                    </div>
                </div>
            </div>
        </menu>
    )
}


export default Comunidades;