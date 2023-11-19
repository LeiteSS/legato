

import './ComunidadeAvatar.css';


const ComunidadeAvatar = ({ComunidadeAvatarUrl}:any, ) => {
    return(
        <>
            <div className="Comunidade-avatar-box">
                <img src={ComunidadeAvatarUrl} alt="Avatar da Comunidade" className="avatar-image"/>
            </div>
        </>
    )
}

export default ComunidadeAvatar;