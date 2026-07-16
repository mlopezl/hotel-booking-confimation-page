import './App.css'
import Nav from './components/navigation/Nav'
import Header from './components/header/Header'
import Cards from './components/cards/Cards'
import ReservationCards from './components/reservation/ReservationCards'

function App() {

  return (
    <div className='bg-Neutral-200 w-full min-h-screen flex flex-col gap-4 relative pb-10 md:grid md:grid-cols-10 md:grid-rows-auto'>
      <Nav/>
       <Header/>
       
      <Cards/>

      <ReservationCards/>
    </div>
  )
}

export default App
