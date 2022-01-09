import { CardPerfil } from '../CardPerfil/CardPerfil'
import { CardInfos } from '../CardInfos/CardInfos'

export function SideBar() {
  return(
    <div className='sidebar'>
      <CardPerfil/>
      <CardInfos/>
    </div>
  )
}