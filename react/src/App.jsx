// rfce -- React Functional Component Export for boilerplate
import React from 'react'
import Nav from './components/Nav' 
import Card from './components/Card'
import './App.css'
import Comtwo from './components/Comtwo'



function App() {
  return (
    
    <div id="row">

      <Nav />
      <br/>
      <Comtwo />
      <br/>
      <Card  name="Pizza" rate="90"/>
      <br/>
      <Card name="Burger" edu="70" />
      <br/>
      <Card name="Cock" rate="40"/>
      <br/>
      <footer />
      
      
    </div>

  )
}

export default App

// npm run spacediv for running the React app
