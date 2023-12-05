import './arduinoModal.css'

import React, { useState, useEffect } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import firebase from "./firebase";
import { getDatabase, ref, onValue, off } from 'firebase/database';

import SurroundSoundIcon from '@mui/icons-material/SurroundSound';

const MensagemFrequencia = ({ frequencia }) => {
  let mensagem = '';

  if (frequencia >= 0 && frequencia <= 150) {
    mensagem = 'Muito baixo';
  } else if (frequencia > 150 && frequencia <= 300) {
    mensagem = 'Baixo';
  } else if (frequencia > 300 && frequencia <= 450) {
    mensagem = 'Intermediário';
  } else if (frequencia > 450 && frequencia <= 600) {
    mensagem = 'Alto';
  } else if (frequencia > 600) {
    mensagem = 'Muito alto';
  }

  return <div className="mensagem-frequencia">{mensagem}</div>;
};

const ArduinoModal = ({ showArduinoModal, closeArduinoModal }) => {
  const [frequencia, setFrequencia] = useState();

  useEffect(() => {
    const database = getDatabase(firebase);
    const sensorRef = ref(database, '/Sensor/soundData');

    const handleValueChange = (snapshot: any) => {
      try {
        const valorFrequencia = snapshot.val();
        setFrequencia(valorFrequencia);
        console.log('Valor da frequência:', valorFrequencia);
      } catch (error) {
        console.error('Erro ao processar valor do Firebase:', error);
      }
    };

    onValue(sensorRef, handleValueChange);

    return () => {
      off(sensorRef, 'value', handleValueChange);
    };
  }, []);

  const getIconColorClass = (frequencia:any) => {
    if (frequencia >= 0 && frequencia <= 150) {
      return 'icone-verde-claro';
    } else if (frequencia > 150 && frequencia <= 300) {
      return 'icone-verde-escuro';
    } else if (frequencia > 300 && frequencia <= 450) {
      return 'icone-amarelo';
    } else if (frequencia > 450 && frequencia <= 600) {
      return 'icone-laranja';
    } else if (frequencia > 600) {
      return 'icone-vermelho';
    }
  };

  return (
    <main className={showArduinoModal ? "login-background" : "login-background-none"}>
      <div className="arduino-modal">
        <form action="">
          <div className="header-arduino-modal">
            <div className="box-header-arduino">
              <h2>Sensor de som</h2>
              <div className="icone-voltar-comunidade" onClick={closeArduinoModal}>
                <ClearIcon />
              </div>
            </div>
          </div>
          <div className="Corpo">

            <div className="frequencia-box">

              < SurroundSoundIcon className={`icone-som ${getIconColorClass(frequencia)}`}  />
              <span className="sensor-value">{frequencia}</span>
              <span className="sensor-value"><MensagemFrequencia  frequencia={frequencia} /></span>

            </div>

            <div className='box-btn-criar-comunidade'>
              <input onClick={closeArduinoModal} className='btn-criar-comunidade cancelar' type="button" value="Cancelar" />
              <input className='btn-criar-comunidade' type="button" value="buscar" />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default ArduinoModal;
