
import './App.css'
import TaskBoard from './components/task/TaskBoard'
import Footer from './components/ui/Footer'
import Header from './components/ui/Header'
import HeroSection from './components/ui/HeroSection'

function App() {

  return (
    <>
      <Header/>
      <div className='flex flex-col justify-center items-center'>
        <HeroSection/>
        <TaskBoard/>
      </div>
      <Footer/>
    </>
  )
}

export default App
