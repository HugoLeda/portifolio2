import { CardPerfil } from '../CardPerfil/CardPerfil'
import { CardInfos } from '../CardInfos/CardInfos'
import { CardTechs } from '../CardTechs/CardTechs'

import './SideBar.scss'

export function SideBar() {
  return(
    <div className='sidebar'>
      <CardPerfil/>
      <CardInfos/>
      <CardTechs/>
    </div>
  )
}