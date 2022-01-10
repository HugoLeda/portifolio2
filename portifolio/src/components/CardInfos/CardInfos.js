import '../../style/card.scss'
import './CardInfos.scss'

import mapPin from '../../assets/map-pin.svg'
import folder from '../../assets/folder.svg'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import twitter from '../../assets/twitter.svg'
import globe from '../../assets/globe.svg'
import mail from '../../assets/mail.svg'

export function CardInfos() {
  return(
    <div className='card infos'>
      <div className='linha'>
        <img src={mapPin} />
        <span>
          Brasil
        </span>
      </div>
      <div className='linha'>
      <img src={folder} />
        <span>
          Estudante
        </span>
      </div>
      <div className='linha'>
      <img src={github} />
        <span>
          HugoLeda
        </span>
      </div>
      <div className='linha'>
      <img src={linkedin} />
        <span>
          Joao Hugo Leda
        </span>
      </div>
      <div className='linha'>
      <img src={globe} />
        <span>
          https://github.com/hugoleda
        </span>
      </div>
      <div className='linha'>
      
        <img src={mail}></img>
      
        <span>
          joaohugok4@gmail.com
        </span>
      </div>      
    </div>
  )
}