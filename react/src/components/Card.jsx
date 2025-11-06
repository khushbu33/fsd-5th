// first letter capital of component name   - Card.jsx-- known component by jsx 
import React from 'react'
import './Card.css'  // importing css file for styling

function Card(props) {
  return (
    <div id="card">
        
        <h1>{props.name}</h1>
        <h2>{props.rate}</h2>
        
        <h2>OUR MENU</h2>
        <ul type="circle">
            <li>Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
        </ul>

    </div>
  )
}

export default Card

