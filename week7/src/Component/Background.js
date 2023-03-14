import React from 'react'
import './Background.css'
import headerban from '../Images/headerban.jpg'

function Background() {
  return (
    <div className='Main-Background'>
      <img className='headerImage' src={headerban}/>
    </div>
  )
}

export default Background
