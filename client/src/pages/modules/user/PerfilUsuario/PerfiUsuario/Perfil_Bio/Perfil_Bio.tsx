import './Perfil_Bio.css';

import { useUser } from '../../../../../../middlewares/UserContext';

import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '../../../../../../components/system/Avatar/Avatar';
import React from 'react';


const Perfil_Bio = () => {
    const { userState } = useUser();
    const { user } = userState;

    const communitiesUrls = [
        "https://clipart-library.com/images_k/transparent-bass-guitar/transparent-bass-guitar-23.png",
        "https://images.emojiterra.com/google/android-12l/512px/1f3b8.png",
        "https://www.clipartmax.com/png/middle/3-31605_size-guitar-icon-png.png",
        "https://cdn-icons-png.flaticon.com/512/4472/4472584.png",
        "https://t3.ftcdn.net/jpg/04/79/81/76/360_F_479817672_BpTyGX9qAl3rs9mHqvQUsyWXTJrkLUII.jpg"
    ]

    return (
        <>
            <main className='container-usuario'>
                <div className='header-perfil'>




                    <div className='titulo-perfil-usuario'>
                        <h2 >Bio</h2>
                        <a href="/EditarPerfil"><button className='btn-bio'><AddIcon /><span>Editar Bio</span></button></a>
                    </div>


                    <div className='box-seguidores'>
                        <span className='seguidores'>0 Seguidores</span>
                        <span className='seguindo'>0 Seguindo</span>
                        <a className='settings-icon' href='/Perfil/EditarPerfil'><SettingsIcon /></a>
                    </div>

                </div>
                <div className='border-bottom'></div>

                <div className='box-membro'>
                    <span>Membro desde de { }</span>
                </div>



                <div className='bio'>
                    {user ? (
                        user.bio
                    ) :
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia assumenda earum, vero numquam odit cupiditate ipsa alias minima tenetur eaque quasi nobis nisi ab sequi vitae unde eveniet laudantium voluptate.</span>}
                </div>

                <div>
                    <div className="titulo">
                        <h2>Minhas Comunidades</h2>
                    </div>
                </div>

                <div className="list-communities">
                    {communitiesUrls.map((artista, index) => (
                        <Avatar key={index} avatarUrl={artista} />
                    ))}
                </div>

            </main>
        </>
    )
}

export default Perfil_Bio;