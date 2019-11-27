import React from 'react'
import './home.scss'

export default function Home(){
    return(
        <div className="home">
            <span className="logo-title">
                <i className="boardin fas fa-snowboarding"></i>
                <h1>Boardin'</h1>
                <span className="login-signup">
                    <button className='login-button'>Login</button>
                    <button className='signup-button'>Sign Up</button>
                </span>
            </span>
        </div>
    )
}