import './App.css'
import Nav from './components/Nav'
import Header from './components/Header'
import Cards from './components/Cards'

function App() {

  return (
    <div className='bg-Neutral-200 w-full min-h-screen flex flex-col gap-4 relative'>
      <Nav/>
      <Header/>
      <Cards/>
    </div>
  )
}

export default App
