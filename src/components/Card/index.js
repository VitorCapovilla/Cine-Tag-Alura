import styles from './Card.module.css'
import iconefav from './Favoritar.png'

const Card = (props) => {
    return (
        <div className={styles.Container}>
            <img src={props.capa} alt={props.titulo} className={styles.capa}/>
            <h2>{props.titulo}</h2>
            <img src={iconefav} alt="Favoritar Filme" className={styles.favoritar}/>
        </div>
    )
}

export default Card