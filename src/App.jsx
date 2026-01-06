import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
            <main className="pt-20">

    <Routes>
      <Route path='/' element = {<Home/>}/>
      </Routes>  
       </main>
      <Footer/>    
    </div>
  )
}

export default App


