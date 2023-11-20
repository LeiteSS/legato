import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

import './Comentario.css'
import React from 'react';

const Comentario = ({ User, userImg, Content, dataPubli }: any) => {
    return (
        <>
            <div className='container-comentario'>

                <img src={userImg} className='img-comment'></img>

                <div className='comment-con'>

                    <div className='header-comment'>

                        <h3 className='user-name'>{User} </h3>
                        <span className='data-publi'>. {dataPubli}</span>

                    </div>

                    <div className='content-box'>
                        <p>{Content}</p>
                    </div>

                    <div className='comment-action'>
                        <span className='like-box'><ThumbUpOffAltIcon /></span>

                        <span className='comentario-box'><i><MessageOutlinedIcon /></i><span> Responder</span></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comentario;