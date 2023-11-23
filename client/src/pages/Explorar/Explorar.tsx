import React, { useEffect, useState } from 'react';

import Filters from "../../components/system/Filters/Filters";
import TableMusics from "../../components/system/TableMusics/TableMusics";
import Paginacao from '../../components/system/Paginacao/Paginacao';

import musicasData from "./musicas.json";


const Explorar = () => {
    const [musicas, setMusicas] = useState<{ artista: string; musica: string; tipo: string; avaliacao: string; }[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        setMusicas(musicasData);
    }, []);


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentMusicas = musicas.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber: any) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(musicas.length / itemsPerPage);

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

    return (
        <main className="home-container explorar-container">
            <Filters showHeaderCommunity={false} exibirGenero={true} />
            <div className="content">
                <div className="title-header">
                    <h2>Explore nosso catálogo</h2>
                    <a href="">
                        <h5>Mais populares</h5>
                    </a>

                </div>
                
                {musicas.length > 0 ? (
                    <>
                        <TableMusics musicas={currentMusicas} currentType={filtroTipo} setTodos={filtroTodas} setPartitura={filtroPartituras} setTab={filtroTablaturas} setCifra={filtroCifras} basePath="/Transcricao" />
                        {totalPages > 1 && (
                            <Paginacao
                                currentPage={currentPage}
                                totalItems={musicas.length}
                                itemsPerPage={itemsPerPage}
                                onPageChange={handlePageChange}
                                totalPages={totalPages}
                            />
                        )}
                    </>
                ) : (
                    <p>Nenhuma música encontrada.</p>
                )}
            </div>
        </main>
    );
};

export default Explorar;