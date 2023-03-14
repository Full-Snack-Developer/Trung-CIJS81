import React from 'react'
import './Navbar.css'
import Brandname from '../Component/Brandname'
import Navcontent from '../Component/Navcontent'

function Navbar() {
  return (
    <div className='Main-Nav'>
      <div className='brandName'>
        <Brandname/>
      </div>

      <div className='navContent'>
        <Navcontent/>
      </div>
    </div>
  )
}

export default Navbar
