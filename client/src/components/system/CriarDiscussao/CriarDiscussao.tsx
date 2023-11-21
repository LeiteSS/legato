import './CriarDiscussao.css'

import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import ClearIcon from "@mui/icons-material/Clear";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const CriarDiscussao = ({ showCriarDiscussao, closeCriarDiscussao }: { showCriarDiscussao: boolean, closeCriarDiscussao: () => void }) => {
    const [conteudo, setConteudo] = useState('');

    return (
        <>
            <main className={showCriarDiscussao ? "login-background" : "login-background-none"}>
                <div className="criar-comunidade">
                    <form action="">
                        <div className="header-criar-comunidade ">
                            <div className="box-header-comunidade">
                                <h2>Postar</h2>
                                <div className="icone-voltar-comunidade" onClick={closeCriarDiscussao}>
                                    <ClearIcon />
                                </div>
                            </div>
                        </div>
                        <div className="Corpo">
                            <div className="selecionar-comunidade">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png" alt="" />
                                <input placeholder='Escolher uma comunidade' />
                                <KeyboardArrowDownIcon />
                            </div>

                            <h3>Título:</h3>
                            <input placeholder='Título' type="text" />

                            <h3>Conteúdo:</h3>
                            <ReactQuill
                                className='quill-container'
                                modules={{
                                    toolbar: [
                                        [{ 'header': [1, 2, false] }],
                                        ['bold', 'italic', 'underline', 'link'],
                                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                        ['clean'],
                                    ],
                                }}
                                placeholder="Digite seu conteúdo aqui..."
                            />

                            <div className='box-btn-criar-comunidade'>
                                <input onClick={closeCriarDiscussao} className='btn-criar-comunidade cancelar' type="button" value="Cancelar" />
                                <input className='btn-criar-comunidade' type="button" value="Postar" />
                            </div>


                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}


export default CriarDiscussao;