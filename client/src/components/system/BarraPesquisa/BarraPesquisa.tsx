import './BarraPesquisa.css'

import SearchIcon from '@mui/icons-material/Search';

const BarraPesquisa = () => {
    return (
        <>
            <div className="barra-pesquisa-box">
                <input type="text" placeholder="Pesquise uma música" className="barra-pesquisa"></input>
                <button className="search-icon"><SearchIcon /></button>

            </div>
        </>
    )
}

export default BarraPesquisa;