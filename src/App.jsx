import { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Textform from './Components/Textform'

function App() {
  

  return (
    <>
      <div className='min-h-screen relative'>
       <Header/> 
       <Textform/>
       <Footer/>
      </div>
      
    </>
  )
}

export default App
