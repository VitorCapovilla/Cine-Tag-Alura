import Cabecalho from 'components/Cabecalho';
import Rodape from 'components/Rodape';
import './Inicio.module.css';
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';

const Inicio = () => {
    return (
        <>
            <Cabecalho/>
            <Banner imagem="home"/>
            <Titulo>Teste</Titulo>
            <Rodape/>
        </>
    )
}

export default Inicio