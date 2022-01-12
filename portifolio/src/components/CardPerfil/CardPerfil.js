import '../../style/card.scss'
import './Card.scss'
import FotoPerfil from './perfil.png'

export function CardPerfil() {
  return (
    <div className='card card-perfil'>
      <div className='foto'>
        <img src={FotoPerfil}/>
      </div>
      <div className='descricao'>
        <h1>João Hugo Leda</h1>
        <span>Full stack developer </span>
      </div>
    </div>
  )
}