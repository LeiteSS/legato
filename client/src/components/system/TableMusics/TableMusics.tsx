import './TableMusics.css';
import StarRating from '../../../components/advanced/StarRating/StarRating';
import { Link } from 'react-router-dom';
import React from 'react';


const TableMusics = ({ musicas, currentType, setTodos, setPartitura, setTab, setCifra }: { musicas: any, currentType: any, setTodos: () => void, setPartitura: () => void, setTab: () => void, setCifra: () => void }) => {
    return (
        <main>
            <div className='table-box'>
                <span className='table-filtros'>
                    <li
                        className={`type ${currentType === "Todas" ? "selected" : ""}`}
                        onClick={() => setTodos()}
                    >
                        Todas
                    </li>
                    <li
                        className={`type ${currentType === "Cifras" ? "selected" : ""}`}
                        onClick={() => setCifra()}
                    >
                        Cifras
                    </li>
                    <li
                        className={`type ${currentType === "Tablaturas" ? "selected" : ""}`}
                        onClick={() => setTab()}
                    >
                        Tablaturas
                    </li>
                    <li
                        className={`type ${currentType === "Partituras" ? "selected" : ""}`}
                        onClick={() => setPartitura()}
                    >
                        Partituras
                    </li>
                </span>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Artista</th>
                            <th>Música</th>
                            <th>Tipo</th>
                            <th>Avaliação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {musicas && musicas.length > 0 ? (
                            musicas
                                .filter((musica: any) => {
                                    switch (currentType) {
                                        case 'Todas':
                                            return true;
                                        case 'Cifras':
                                            return musica.tipo === 'Cifras';
                                        case 'Tablaturas':
                                            return musica.tipo === 'Tablaturas';
                                        case 'Partituras':
                                            return musica.tipo === 'Partituras';
                                        default:
                                            return false;
                                    }
                                })
                                .map((musica: any, index: number) => (
                                    <tr key={index}>
                                        <td><Link className='link-transcricao' to='/Transcricao'>{musica.artista}</Link></td>
                                        <td> <Link className='link-transcricao' to='/Transcricao'>{musica.musica}</Link></td>
                                        <td>{musica.tipo}</td>
                                        <td>
                                            <StarRating/>
                                        </td>
                                    </tr>
                                ))
                        ) : (
                            <div></div>
                        )}
                    </tbody>

                </table>
            </div>
        </main>
    )
}

export default TableMusics;