import Cabecalho from 'components/Cabecalho';
import Rodape from 'components/Rodape';
import './Inicio.module.css';
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import Card from 'components/Card';

const Inicio = () => {
    return (
        <>
            <Cabecalho/>
            <Banner imagem="home"/>
            <Titulo>Teste</Titulo>
            <Card id="1" capa="" titulo="teste"/>
            <Rodape/>
        </>
    )
}

export default Inicio