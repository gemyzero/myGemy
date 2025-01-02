import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Skills from './components/Skills'
import Protofolio from './components/Protfolio'
import Contact from './components/Contact'
import About from './components/About'
// import Counter from './components/Counter'
import Loding from './components/Loding'
import Experience from './components/Experience'
function App() {
  const [stopLoding,setStopLoding] = useState(false)

 useEffect(()=>{
  setTimeout(()=>{
    setStopLoding(true)
  },1000)
 },[])
  return (
   <>
{
  stopLoding ?   <div className="">
  <NavBar></NavBar>
  <Header></Header>
  <About></About>

  <Skills></Skills>
  {/* <Counter></Counter> */}

  <Protofolio></Protofolio>
<Experience></Experience>
  <Contact></Contact>
 </div> : <Loding></Loding>
}
   


   
   </>
  )
}

export default App
