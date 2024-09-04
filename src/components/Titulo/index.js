import style from './Titulo.module.css'

const Titulo = (props) => {
    return(
        <div className={style.Texto}>
            <h1>{props.children}</h1>
        </div>
    )   
}

export default Titulo