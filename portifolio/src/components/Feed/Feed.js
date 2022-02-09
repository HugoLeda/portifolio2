import './Feed.scss'
import '../../style/card.scss'

import folder from'../../assets/folder.svg'
import star from '../../assets/star.svg'
import git_branch from '../../assets/git-branch.svg'
import briefcase from '../../assets/briefcase.svg'

export function Feed() {
  return (
    <div className='feed'>
      <div className='projetos'>
        <div className='card' id='meus-projetos'>
          <h3>Meus projetos</h3>
          <a href='https://github.com/hugoleda?tab=repositories' target='blank'>Veja todos</a>
        </div>
        <div className="cards-projeto">
          <div className='card card-projeto'>
            <div className='top'>
              <img src={folder} alt='icone pasta'/>
              <a href='https://github.com/HugoLeda/Salao-de-Beleza' target='blank' title='Ver repositório no GitHub'>salao-de-belesa</a>
            </div>
            <p>
              Software desenvolvido para o gerenciamento do Salão da Laura: @salao_dalaura
            </p>
            <div className='botton'>
              <div>
                <img src={star} alt='estrela' />
                <span>1</span>
                <img src={git_branch} alt='branch' />
                <span>5</span>
              </div>
              <div>
                <div className='linguagem'></div>
                <span>Pascal</span>
              </div>
            </div>
          </div>
          <div className='card card-projeto'>
            
          </div>
        </div>
      </div>
    </div>
  )
}