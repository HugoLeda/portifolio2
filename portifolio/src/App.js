import { SideBar } from './components/SideBar/SideBar'
import { Feed } from './components/Feed/Feed'

import './style/app.scss'

function App() {
  return (
    <div className='content'>      
      <SideBar/>
      <Feed/>
    </div>
  );
}

export default App;