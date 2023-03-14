import React from 'react'
import './Dashboard.css'
import Navbar from '../Component/Navbar'
import Background from '../Component/Background'
import Bodycontent from '../Component/Bodycontent'
import Bodycard from '../Component/Bodycard'


function Dashboard() {
  return (
    <div className='Main-Dashboard'>
          <div className='Background'>
              <Background/>
          </div>

          <div className='Navbar'>
              <Navbar/>
          </div>

          <div className='Bodycontent'>
            <Bodycontent/>
          </div>

          <div className='Bodycard'>
            <div className='card1'>
              <Bodycard/>
            </div>

            <div className='card2'>
              <Bodycard/>
            </div>

            <div className='card3'>
              <Bodycard/>
            </div>

            <div className='card4'>
              <Bodycard/>
            </div>
          </div>
    </div>
  )
}

export default Dashboard
