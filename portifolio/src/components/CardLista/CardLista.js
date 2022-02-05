import '../../style/card.scss'
import './CardLista.scss'

export function CardLista(...props) {
  return (
    <div className='card card-lista'>
      <span className='titulo'>Educação</span>

      <ul>
        <li>
          <div className='item'>
            <span>Rocketseat</span>
            <span>01/2022 - atualmente</span>
            <span>Ignite Pro</span>
          </div>
        </li>
        <li>
          <div className='item'>
            <span>Fatec Ourinhos</span>
            <span>02/2021 - 12/2021</span>
            <span>Ciência de Dados</span>
          </div>
        </li>
        <li>
          <div className='item'>
            <span>Etec</span>
            <span>02/2018 - 12/2020</span>
            <span>Informática</span>
          </div>
        </li>
      </ul>
      
    </div>
  )
}