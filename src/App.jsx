import './App.css'
import Menu from './components/Menu'
import Header from './components/Header'

function App() {

  return (
    <div className='bg-Neutral-200 w-full min-h-screen flex flex-col gap-4'>
      <Menu/>
      <Header/>
    </div>
  )
}

export default App
