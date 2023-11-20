import React from 'react';
import './CriarComunidade.css';
import ClearIcon from "@mui/icons-material/Clear";
import HelpIcon from '@mui/icons-material/Help';
import Tooltip from '@mui/material/Tooltip';

const CriarComunidade = ({ showCriarComunidade, closeCriarComunidade }: { showCriarComunidade: boolean, closeCriarComunidade: () => void }) => {
    return (
        <main className={showCriarComunidade ? "login-background" : "login-background-none"}>
            <div className="criar-comunidade">
                <form action="">
                    <div className="header-criar-comunidade ">
                        <div className="box-header-comunidade">
                            <h2>Criar comunidade</h2>
                            <div className="icone-voltar-comunidade" onClick={closeCriarComunidade}>
                                <ClearIcon />
                            </div>
                        </div>
                    </div>
                    <div className="Corpo">

                        <h3>Nome:</h3>
                        <span className='info'>Nomes de comunidade não podem ser alterados.</span>
                        <input type="text" />

                        <h3>Privacidade Comunidade:</h3>

                        <label className='radio-criar-comunidade'>
                            <input type="radio" name="privacidade" value="privado" />
                            <span>
                                Público
                            </span>

                            <Tooltip title="Qualquer um pode ver, postar e comentar nesta comunidade">
                                <span className='info'>
                                    <HelpIcon className='info-question' />
                                </span>
                            </Tooltip>
                        </label>

                        <label className='radio-criar-comunidade'>
                            <input type="radio" name="privacidade" value="Restrito" />
                            <span>
                                Acesso Restrito
                            </span>
                            <Tooltip title="Qualquer pessoa pode visualizar esta comunidade, mas somente usuários aprovados podem postar">
                                <span className='info'>
                                    <HelpIcon className='info-question' />
                                </span>
                            </Tooltip>
                        </label>

                        <label className='radio-criar-comunidade'>
                            <input type="radio" name="privacidade" value="Restrito" />
                            <span>
                                Privado
                            </span>
                            <Tooltip title="Somente usuários aprovados podem ver e postar nesta comunidade">
                                <span className='info'>
                                    <HelpIcon className='info-question' />
                                </span>
                            </Tooltip>
                        </label>

                        <div className='box-btn-criar-comunidade'>
                            <input onClick={closeCriarComunidade} className='btn-criar-comunidade cancelar' type="button" value="Cancelar" />
                            <input className='btn-criar-comunidade' type="button" value="Criar" />
                        </div>

                    </div>
                </form>
            </div>
        </main>
    );
}

export default CriarComunidade;
