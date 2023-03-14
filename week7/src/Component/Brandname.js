import './Brandname.css'
import React from 'react'
import logobrand from '../Images/logobrand.png'
import namebrand from '../Images/namebrand.png'

function Brandname() {
  return (
    <div className='Main-Brandname'>
      <div className='LogoBrand'>
        <img className='Logo' src={logobrand}/>
      </div>

      <div className='NameBrand'>
        <img className='Name' src={namebrand}/>
      </div>
    </div>
  )
}

export default Brandname
