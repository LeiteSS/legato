import { useState } from 'react';
import './SideMenuComunidade.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';

const SideMenuComunidade = () => {
    const [setas, setSetas] = useState([true, true, true]);

    const toggleSeta = (index:any) => {
        const newSetas = [...setas];
        newSetas[index] = !newSetas[index];
        setSetas(newSetas);
    };

    return (
        <>
            <div className='menu-comunidade-box'>
                <div className='menu-card'>
                    <h2>Sobre a comunidade </h2>
                    <div className='card-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem similique quod ullam et nihil quo quos mollitia, officiis fuga fugit maxime atque fugiat temporibus libero commodi sunt harum autem doloribus!</div>
                </div>

                <div className='menu-card'>
                    <h2>Regras</h2>
                    <div className='regras-box'>
                        {['Respeito às regras da plataforma', 'Seja civilizado', "outra regra"].map((regra, index) => (
                            <div className='regra' key={index}>
                                <div className='regra-box'>
                                    <div>
                                        <span className='regra-numero'>{index + 1}.</span>
                                        <span className='regra-title'>{regra}</span>
                                    </div>
                                    <div className='box-setas' onClick={() => toggleSeta(index)}>
                                        {setas[index] ? <KeyboardArrowDownIcon className='seta-baixo' />
                                            : <KeyboardArrowUpIcon className='seta-cima' />}
                                    </div>
                                </div>
                                <span className={setas[index] ? 'regra-content' : 'regra-content actvite'}>Seja bacana com o próximo :)</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideMenuComunidade;
