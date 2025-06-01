import './App.css'
import Content from './layout/Content'
import Footer from './layout/Footer'
import HookRef from './HookTest'
import HookMemo from './HookTest'

const App : React.FC = () => {
  return (
    <div>
      <Content></Content>
      <Footer></Footer>
    </div>
  )
}

export default App