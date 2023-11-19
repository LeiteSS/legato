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


const Home = () => {

    const carousel = React.useRef(HTMLElement.arguments);
    const [width, setWidth] = useState(0)
    const [showFilter, setShowFilter] = useState(false);
    const [musicas, setMusicas] = useState<{ artista: string; musica: string; tipo: string; avaliacao: string; }[]>([]);


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

    const artistsUrls = [{
        url: "https://i.scdn.co/image/ab67616100005174e9348cc01ff5d55971b22433",
        name: "Beatles"
    },
    {
        url: "https://s2.glbimg.com/dM9cq_LH67iIUqE6cRlTfz5sJ3g=/620x465/s2.glbimg.com/iPMxmXl_eZo8-q6IudQW_A4RGT4=/620x465/s.glbimg.com/jo/g1/f/original/2016/08/18/metallica_foto.jpg",
        name: "Metallica"
    },
    {
        url: "https://i.scdn.co/image/ab6761610000e5ebdd353edbce04267bff979de6",
        name: "Polyphia"
    },
    {
        url: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/06/Chico-Buarque-por-Francisco-Proner-.jpg",
        name: "Chico Buarque"
    }
        ,
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrH3Aw3FhbxhpgvA9q_gJRst7bHa29r6sYyg&usqp=CAU",
        name: "Roger Waters"
    }
    ]

    const communitiesUrls = [
        "https://clipart-library.com/images_k/transparent-bass-guitar/transparent-bass-guitar-23.png",
        "https://images.emojiterra.com/google/android-12l/512px/1f3b8.png",
        "https://www.clipartmax.com/png/middle/3-31605_size-guitar-icon-png.png",
        "https://cdn-icons-png.flaticon.com/512/4472/4472584.png",
        "https://t3.ftcdn.net/jpg/04/79/81/76/360_F_479817672_BpTyGX9qAl3rs9mHqvQUsyWXTJrkLUII.jpg"
    ]

    return (
        <main className="home-container">
            <Filters showHeaderCommunity={false} exibirGenero={true} />

            <div className="menu-hamburger" onClick={openFilter}>
                <img src={MenuHamburger} alt="" />
            </div>
            <FiltersResponsivo exibirGenero={true}  showHeaderCommunity={false} showMenuFiltro={showFilter} closeMenuFiltro={closeFilter} />
            <div className="content content-escuro">
                <div className="title-header">
                    <h2>Músicas mais acessadas</h2>
                    <a href="/Explorar"><h5>Ver top</h5></a>
                </div>
                <div className="container-home">
                    <TableMusics musicas={musicas} currentType={filtroTipo} setTodos={filtroTodas} setPartitura={filtroPartituras} setTab={filtroTablaturas} setCifra={filtroCifras}></TableMusics>
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
                            {communitiesUrls.map((artista, index) => (
                                <Avatar key={index} avatarUrl={artista} />
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

            </div>

        </main>
    )
}

export default Home;