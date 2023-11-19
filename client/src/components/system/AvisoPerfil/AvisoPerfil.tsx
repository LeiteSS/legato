import "./AvisoPerfil.css";

const AvisoPerfil = ({ titulo, conteudo } : any) => {

    return (
        <>
            <div className="box-AvisoPerfil">
                <div className="container-titulo">
                    <h2>{titulo}</h2>
                </div>

                <div className="container-conteudo">
                    <p>{conteudo}</p>
                </div>
            </div>
        </>
    )
}

export default AvisoPerfil;