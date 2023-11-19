import React, { useRef } from "react";

import "./Transcricao.css";
import SideMenu from "../../../../components/system/SideMenu/SideMenu";
import Cifra from "../../../../components/system/Cifra/Cifra";
import Comentario from "../../../../components/system/Comentario/Comentario";


import musicaData from './musicas.json';
import comentariosData from './comentarios.json';



const Transcricao = () => {
    const musicaId = 1;

    const musica = musicaData.find(musica => musica.id === musicaId);

    if (!musica) {
        return <div>Música não encontrada</div>;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
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
                    <SideMenu scrollToComments={scrollToComments} />
                </div>

                <div>
                    <Cifra nome={musica.nome} artista={musica.artista} conteudo={musica.cifra} />
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
