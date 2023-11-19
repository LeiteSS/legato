

import './ComunidadeTitulo.css';


const ComunidadeTitulo = ({ComunidadeTituloUrl}:any, ) => {
    return(
        <>
            <div className="Comunidade-titulo-box">
                <img src={ComunidadeTituloUrl} alt="Avatar do titulo" className="title-image"/>
            </div>
        </>
    )
}

export default ComunidadeTitulo;