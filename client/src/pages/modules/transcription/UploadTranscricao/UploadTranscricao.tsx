import React from 'react';

import './UploadTranscricao.css';
import '../UploadTab/UploadTab.css';

import UploadImage from "../../../../assets/upload-file.png";


const UploadTranscricao = () => {

    return (

        <main className="UploadTab-container">
            <form action="">
                <h2>Envie sua trancrição</h2>
                <div className="Corpo">
                    <h4>Tú enviarás uma trancrição de: </h4>
                    <div className="NearbyElements">
                        <div>
                            <label htmlFor="">Artista:</label>
                            <input type="text" placeholder="Buscar artistas..." />
                        </div>
                        <div>
                            <label htmlFor="">Musica:</label>
                            <input type="text" placeholder="Insira o nome da música" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="tipo">Tipo:</label>
                        <select id="tipo">
                            <option value="volvo">Cifra</option>
                            <option value="saab">Tablatura</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div className="NearbyElements">
                        <div>
                            <label htmlFor="">Afinação:</label>
                            <select id="tipo">
                                <option value="volvo">Cifra</option>
                                <option value="saab">Tablatura</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Dificuldade:</label>
                            <select id="tipo">
                                <option value="volvo">Cifra</option>
                                <option value="saab">Tablatura</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Capo:</label>
                            <select id="tipo">
                                <option value="volvo">Cifra</option>
                                <option value="saab">Tablatura</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Insira a <strong>cifra</strong> abaixo:</label>
                        <textarea name="" id="" placeholder="Entre com o texto de sua trancrição"></textarea>
                    </div>
                    <div>
                        <label htmlFor="arquivo" id='Arquivo'>
                            <img src={UploadImage} alt="" />
                            <p>Selecione ou arraste um arquivo</p>
                        </label>
                        <input type="file" name="arquivo" id="arquivo"/>
                    </div>

                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </main>
    )
}

export default UploadTranscricao;