import style from './Banner.module.css'

const Banner = ({ imagem }) => {
    return(
        <div className={style.Capa} style={{ backgroundImage: `url('/imagens/banner-${imagem}.png')`}}>

        </div>
    )
}

export default Banner