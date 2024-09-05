import Cabecalho from 'components/Cabecalho';
import Rodape from 'components/Rodape';
import './Inicio.module.css';
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import Card from 'components/Card';
import videos from 'json/db.json';
import styles from './Inicio.module.css';

const Inicio = () => {
    return (
        <>
            <Cabecalho/>
            <Banner imagem="home"/>
            <Titulo>Teste</Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id}></Card>
                })}
            </section>
            <Rodape/>
        </>
    )
}

export default Inicio