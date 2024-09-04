import Cabecalho from 'components/Cabecalho';
import Rodape from 'components/Rodape';
import './Inicio.module.css';
import Banner from 'components/Banner';

const Inicio = () => {
    return (
        <>
            <Cabecalho/>
            <Banner imagem="home"/>
            <Rodape/>
        </>
    )
}

export default Inicio