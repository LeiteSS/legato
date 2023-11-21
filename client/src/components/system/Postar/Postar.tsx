import './Postar.css'

import React from 'react';

import ComunidadeAvatar from '../ImgsComunidade/ComunidadeAvatar/ComunidadeAvatar';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';

const Postar = () => {
    return (
        <>
            <div className='box-postar'>

                <div className='postar-box'>

                    <div className='img-usuario'>
                        <ComunidadeAvatar ComunidadeAvatarUrl="https://effigy.im/a/brantly.eth.svg" />
                    </div>

                    <div className='input-postar'>
                        <input type='text' className='postar' placeholder='Postar'></input>
                    </div>


                    <div className='icon-postar'>
                        <ImageOutlinedIcon className='icon' />
                    </div>

                    <div className='icon-postar'>
                        <AttachFileOutlinedIcon className='icon' />
                    </div>


                </div>


            </div>
        </>
    )
}

export default Postar;