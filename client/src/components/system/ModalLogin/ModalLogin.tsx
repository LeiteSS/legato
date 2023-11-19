import './ModalLogin.css'

const ModalLogin = () => {
    return (
        <>

            <div className="modal">
                <div className="topo-modal">
                    <h2>Entrar</h2>
                </div>
                <div>
                    <div className="box-input">
                        <label>Email ou nome do usuário</label>
                        <input type="text" />
                    </div>
                    <div className="box-input">
                        <span className="senha"><label>Senha</label><span>Esqueceu a senha</span></span>
                        <input type="text" />
                    </div>
                    <div className="box-btn">
                        <button>Entrar</button>
                    </div>
                    <div className="box-cadastra-se">
                        <span className="nao-tem-conta">Não tem uma conta?</span>
                        <span className="cadastra-se">Cadastra-se</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ModalLogin;