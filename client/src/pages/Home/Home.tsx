import React from 'react';
import { useEffect, useState } from 'react';

import './Home.css';

import Filters from "../../components/system/Filters/Filters";
import FiltersResponsivo from '../../components/system/FiltersResponsivo/FiltersResponsivo';
import TableMusics from "../../components/system/TableMusics/TableMusics";
import Avatar from "../../components/system/Avatar/Avatar";
import MenuHamburger from '../../assets/Hamburger_menu.png';
import { motion } from "framer-motion";

import musicasData from './musicas.json';
import artistasData from './artistas.json';
import comunidadesData from './comunidades.json';

const Home = () => {

    const carousel = React.useRef(HTMLElement.arguments);
    const [width, setWidth] = useState(0)
    const [showFilter, setShowFilter] = useState(false);
    const [musicas, setMusicas] = useState<any[]>([]);

    useEffect(() => {
        setMusicas(musicasData);
    }, []);


    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth + 500)
        return setMusicas(musicasData);
    }, []);



    const openFilter = () => {
        setShowFilter(true);
        console.log("teste")
    }

    const closeFilter = () => {
        setShowFilter(false);
    }

    const [filtroTipo, setFiltroTipo] = useState("Todas");

    const filtroTodas = () => {
        setFiltroTipo("Todas")
    }

    const filtroPartituras = () => {
        setFiltroTipo("Partituras")
    }

    const filtroTablaturas = () => {
        setFiltroTipo("Tablaturas")
    }

    const filtroCifras = () => {
        setFiltroTipo("Cifras")
    }

    const artistsUrls = artistasData.map(artista => ({
        url: artista.artistaImg,
        name: artista.artistaNome
    }));

    const communitiesUrls = comunidadesData.map(comunidade => comunidade.comunidadeImg);

    return (
        <main className="home-container">
            <Filters showHeaderCommunity={false} exibirGenero={true} />

            <div className="menu-hamburger" onClick={openFilter}>
                <img src={MenuHamburger} alt="" />
            </div>
            <FiltersResponsivo exibirGenero={true} showHeaderCommunity={false} showMenuFiltro={showFilter} closeMenuFiltro={closeFilter} />
            <div className="content content-escuro">
                <div className="title-header">
                    <h2>Músicas mais acessadas</h2>
                    <a href="/Explorar"><h5>Ver top</h5></a>
                </div>
                <div className="container-home">
                    <TableMusics musicas={musicas} currentType={filtroTipo} setTodos={filtroTodas} setPartitura={filtroPartituras} setTab={filtroTablaturas} setCifra={filtroCifras} basePath="/Transcricao"></TableMusics>
                </div>

                <div className="container-home">
                    <div className="title-header">
                        <h2>Artistas mais acessados</h2>
                        <a href=""><h5>Ver top</h5></a>
                    </div>
                    <motion.div ref={carousel} className="list-imgs" whileTap={{ cursor: "grabbing" }}>
                        <motion.div className='inner'
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}>
                            {artistsUrls.map((artista, index) => (
                                <Avatar key={index} avatarUrl={artista.url} name={artista.name} />
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                <div className="container-home">
                    <div className="title-header">
                        <h2>Conheça às nossas comunidades</h2>
                        <a href="/Comunidades"><h5>Ir para comunidades</h5></a>
                    </div>
                    <motion.div ref={carousel} className="list-imgs" whileTap={{ cursor: "grabbing" }}>
                        <motion.div className='inner'
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}>
                            {comunidadesData.map((comunidade, index) => (
                                <Avatar key={index} avatarUrl={comunidade.comunidadeImg} name={comunidade.comunidadeNome} />
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

            </div>

        </main>
    )
}

export default Home;