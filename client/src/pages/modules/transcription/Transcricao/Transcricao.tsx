import React, { useRef } from "react";
import { useParams } from "react-router-dom";

import "./Transcricao.css";
import SideMenu from "../../../../components/system/SideMenu/SideMenu";
import Cifra from "../../../../components/system/Cifra/Cifra";
import Comentario from "../../../../components/system/Comentario/Comentario";

import musicaData from '../../../Home/musicas.json';
import comentariosData from './comentarios.json';

const Transcricao = () => {
    const { artista, musica } = useParams();

    if (musica === undefined) {
        return <div>Música não encontrada</div>;
    }

    const musicaAtual = musicaData.find(
        (musicaData) => 
        musicaData.artista === artista && 
        musicaData.musica.toLowerCase() === musica.toLowerCase()
    );

    if (!musicaAtual) {
        return <div>Música não encontrada</div>;
    }

    const commentsSectionRef = useRef<HTMLDivElement | null>(null);

    const scrollToComments = () => {
        if (commentsSectionRef.current) {
            commentsSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main className="container-transcricao">
            <div className="box-cifra">
                <div className="side-menu" >
                    <SideMenu imgArtista={musicaAtual.imgArtista} scrollToComments={scrollToComments} />
                </div>

                <div>
                    <Cifra nome={musicaAtual.musica} artista={musicaAtual.artista} conteudo={musicaAtual.cifra} video={musicaAtual.musicaVideo} />
                </div>
            </div>

            <div className="container-comentarios" ref={commentsSectionRef}>
                <h2 className="title-comentarios">Comentários</h2>

                {comentariosData.map((comentario, index) => (
                    <Comentario
                        key={index}
                        User={comentario.autor}
                        userImg={comentario.userImg}
                        Content={comentario.content}
                        dataPubli={comentario.dataPubli}
                    />
                ))}
            </div>
        </main>
    );
}

export default Transcricao;
