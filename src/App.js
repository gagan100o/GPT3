import React from 'react'
import{Blog, Features, Footer, Header, Posibility, WhatGpt3} from './containers'
import{ Brand, Cta, Navbar} from './components'
import './app.css'
import './index.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>

      </div>
      <Brand/>
      <WhatGpt3/>
      <Features/>
      <Posibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App