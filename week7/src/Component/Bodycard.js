import React from 'react'
import './Bodycard.css'
import piggy from '../Images/piggy.png'

function Bodycard() {
  return (
    <div className='Main-Bodycard'>
        <div className='Topcard'>
            <div className='Bodycard-icon'>
                <img className='piggy-icon' src={piggy}/>
            </div>

            <div className='h3-icon'>
                <h3>Tiết kiệm</h3>
            </div>

            <div className='p-icon'>
                <p>Chuyển tiền trong và ngoài ngân hàng một cách dễ dàng và nhanh chóng với mức phí phù hợp.</p>
            </div>

            <div className='Botcard'>
                <p className='p-botcard'>Xem thêm</p> 
            </div>
        </div>
    </div>
  )
}

export default Bodycard
