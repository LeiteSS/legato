import "./Avatar.css";

const Avatar = ({ avatarUrl, name }:any) => {
    return(
        <div className='container-avatar'>
            <div className='perfil-box'>
                    <img className='perfil' src={avatarUrl} alt={name}></img>
                    <p>{name}</p>
            </div>
        </div>
    )
} 

export default Avatar;