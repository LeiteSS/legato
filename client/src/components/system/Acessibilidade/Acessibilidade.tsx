
import { useState } from 'react';
import './Acessibilidade.css'
import { useTheme } from './useTheme';

const Acessibilidade = () => {
    const [theme, handleChange] = useTheme('light');
    const [fontSize, setFontSize] = useState(1);

    const changeFontSize = (size: string) => {
        if (size == "aumentar") {
            setFontSize(() => fontSize <= 1.3 ? fontSize + 0.02 : fontSize);
        }
        else if(size == "diminuir"){
            setFontSize(() => fontSize >= 0.90 ? fontSize - 0.01 : fontSize);
        }
        document.documentElement.style.fontSize = `${fontSize}rem`;

    }

    return (
        <div className="Acessibilidade">
            <span>
                <ul>
                    <li><a href="/Acessibilidade">Acessibilidade</a></li>
                    <li><a onClick={()=>changeFontSize("diminuir")}>A -</a></li>
                    <li><a onClick={()=>changeFontSize("aumentar")}>A +</a></li>
                    <label className="switch">
                        <input type="checkbox" onChange={handleChange} />
                        <span className="slider">Alto Contraste</span>
                    </label>
                </ul>
            </span>
        </div>
    )
}

export default Acessibilidade;