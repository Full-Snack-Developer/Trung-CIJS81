import React from 'react'
import './Form.css'

function Form() {
  return (
    <div className='Contain-Form'>
      <div className='Top-form'>
        <h1>Sign up for an account</h1>
        <p className='p-Top-form'>Sign up for an account is free and easy. 
            Fill out the form below to get started. 
            Javascript is required to do continue.</p>
      </div>
      <div className='Body-form'>
        <div className='Body-username'>
            <p>Username</p>
            <input className='Username-textbox' type={Text}></input>
        </div>
        <div className='Body-password'>
            <p>Password(4 characters minimum)</p>
            <input className='Password-textbox' type={Text}></input>
        </div>
        <div className='Body-repass'>
            <p>Password confirm</p>
            <input className='Repass-textbox' type={Text}></input>
        </div>
        <div className='Body-email'>
            <p>Email</p>
            <input className='Email-textbox' type={Text}></input>
        </div>
      </div>
      <div className='Bot-form'>
        <p>By clicking the "Sign up" button below, 
            i certify that i have read and agree to the TMDB terms of use and privacy polivy.</p>
        <div className='Bot-button'>
            <button className='Signup-but' type='button'>
                <h4 className='h4-button'>Đăng ký</h4>
            </button>
            <button className='Cancel-but' type='button'>
                <h4 className='h4-button'>Cancel</h4>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Form
