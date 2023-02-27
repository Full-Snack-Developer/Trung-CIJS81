import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='Contain-Sidebar'>
      <div className='Top'>
        <h3 className='h3-1'>Benefits of being a</h3>
        <h3 className='h3-2'>member</h3>
      </div>
      <div className='Body'>
        <div className='Body-item1'>
            <img className='Check1' src='https://cdn-icons-png.flaticon.com/512/1055/1055183.png'/>
            <ul>
                <li>Find somethong to watch on</li>
                <li>your subcribed streaming</li>
                <li>services</li>
            </ul>
        </div>
        <div className='Body-item2'>
        <img className='Check1' src='https://cdn-icons-png.flaticon.com/512/1055/1055183.png'/>
            <ul>
                <li>Log the movies and TV shows</li>
                <li>you have watched</li>
            </ul>
        </div>
        <div className='Body-item3'>
        <img className='Check1' src='https://cdn-icons-png.flaticon.com/512/1055/1055183.png'/>
            <ul>
                <li>Keep track of your favourite</li>
                <li>movies and TV shows and get</li>
                <li>recommenddations from then</li>
            </ul>
        </div>
        <div className='Body-item4'>
        <img className='Check1' src='https://cdn-icons-png.flaticon.com/512/1055/1055183.png'/>
            <ul>
                <li>Build and maintain a</li>
                <li>personal watchlist</li>
            </ul>
        </div>
        <div className='Body-item5'>
        <img className='Check1' src='https://cdn-icons-png.flaticon.com/512/1055/1055183.png'/>
            <ul>
                <li>Build custom mixed list</li>
                <li>(movies and TV)</li>
            </ul>
        </div>
        <div className='Body-item6'>
        <img className='Check1' src='https://cdn-icons-png.flaticon.com/512/1055/1055183.png'/>
            <ul>
                <li>Take part in movie and TV</li>
                <li>discussions</li>
            </ul>
        </div>
        <div className='Body-item7'>
        <img className='Check1' src='https://cdn-icons-png.flaticon.com/512/1055/1055183.png'/>
            <ul>
                <li>Contribute to, and improve</li>
                <li>the infomation in our</li>
                <li>database</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
