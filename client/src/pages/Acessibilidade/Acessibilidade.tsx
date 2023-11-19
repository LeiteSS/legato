import React from 'react';
import "./styles.css"

const Acessibilidade_Pagina = () => {

    return (
        <main className="container-Acessibilidade">
            <div className="box-Texto">
                <div className="titulos-box">
                    <h3>Acessibilidade</h3>
                </div>
                <div className="content-box">
                    <p>Este site foi desenvolvido para que pessoas com deficiência visual, baixa visão, daltonismo, deficiência auditiva e mobilidade reduzida possam navegar por meio de recursos como alto contraste, aumento de fonte, teclas de atalho, tradução para a Língua Brasileira de Sinais e navegação por teclado.Para aumentar a fonte, é só clicar no símbolo de A+ em nossa barra de acessibilidade. Caso queira voltar ao tamanho de fonte original, é só clicar em A-.Se for necessário, você também pode usar o zoom nativo do seu navegador, pressionando as teclas “Ctrl” e “+” para aumentar todo o site e “Ctrl” e “-“ para diminuir. Para voltar ao padrão, pressione “Ctrl” e “0”.
                        Teclas de atalho por navegadores
                        <div>
                            Internet Explorer e Google Chrome:
                            “Alt” + “1” - ir para o conteúdo
                            “Alt” + “2” - ir para o menu
                            “Alt” + “3” - ir para o rodapé
                            Firefox:
                            “Alt” + “Shift” + “número”
                            Opera:
                            “Shift” + “Escape” + “número”
                            Safari e OmniWeb:
                            “Ctrl” + “número”
                            Navegação por tabulação
                            Use a tecla Tab para navegar por elementos que recebem ação do usuário no site, tais como links, botões, campos de formulário e outros na ordem em que eles são apresentados na página, e Shift + Tab para retornar. Use as setas direcionais para acessar as informações textuais.
                            Sugestões de programas disponíveis para pessoas com deficiência
                            Nitrous Voice Flux: controla o computador por voz;
                            NVDA: software livre para ler tela – vários idiomas (Windows);
                            YeoSoft Text: leitor de tela em inglês e português;
                            Jaws for Windows: leitor de tela – vários idiomas;
                            Virtual Vision: leitor de telas em português do Brasil;
                            DOSVOX: sistema para deficientes visuais (Windows ou Linux);
                            Talckback: leitor de tela disponível em smartphones Android;
                            VLibras: ferramentas gratuitas que traduz conteúdos digitais (texto, áudio e vídeo) em Português para Libras.
                        </div>
                    </p>
                </div>
            </div>
        </main>
    )
}


export default Acessibilidade_Pagina;