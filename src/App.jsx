import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import BuildSome from './Components/BuildSome'

const App = () => {
  return (
    <div>
      <Navbar/>
            <main className="pt-20">

    <Routes>
      <Route path='/' element = {<Home/>}/>
      </Routes>  
       </main>
       <Routes>
        <Route path='/BuildProject' element = {<BuildSome/>}/>
       </Routes>
      <Footer/>    
    </div>
  )
}

export default App


