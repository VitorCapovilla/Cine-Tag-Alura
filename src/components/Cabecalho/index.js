import { Link } from 'react-router-dom';
import logo from './logo.png';
import style from './Cabecalho.module.css';
import CabecalhoLink from 'components/CabecalhoLink';


const Cabecalho = () => {
    return(
        <header className={style.Cabecalho}>
            <Link to='./'>
                <img src={logo} alt="Logo do CineTag"></img>
            </Link>
            <nav>
                <CabecalhoLink url="./">Home</CabecalhoLink>
                <CabecalhoLink url="./Favoritos">Favoritos</CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho