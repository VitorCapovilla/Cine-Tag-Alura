import { Link } from 'react-router-dom'
import styles from './CabecalhoLink.module.css'

const CabecalhoLink = (props) => {
    return (
        <Link to={props.url} className={styles.Link}>
            {props.children}
        </Link>
    )
}

export default CabecalhoLink