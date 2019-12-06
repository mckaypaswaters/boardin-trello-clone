import React, {Component} from 'react'
import './auth.scss'
import google from '../../assets/google-logo.png'

export default class Auth extends Component {
    state = {
        email: '',
        name: '',
        password: '',
        continueClicked: false
    }

    handleChange(e, key){
        this.setState({
            [key]: e.target.value
        })
    }

    continueButton(){
        this.setState({
            continueClicked: true
        })
    }

    render(){
        return(
            <div className="auth">
                <div className="logo-login-stack">
                    <div className="logo-title-auth">
                        <i className="boardin-auth fas fa-snowboarding"></i>
                        <h1>Boardin'</h1>
                    </div>
                    <div className="login-box">
                        <h3>Sign up to Boardin'</h3>
                        <input onChange={e => this.handleChange(e, 'email')} type="text" placeholder='Enter email'/>
                        {this.state.continueClicked && this.state.email !== '' ? 
                        <>
                        <input onChange={e => this.handleChange(e, 'name')} type="text" placeholder='Enter full name'/>
                        <input onChange={e => this.handleChange(e, 'password')} type="password" placeholder='Create password'/>
                        </> : <></>
                        }
                        <h5>By signing up, you confirm that you've read and accepted our <span>Terms of Service</span> and <span>Privacy Policy</span></h5>
                        <button onClick={() => this.continueButton()} className='continue-button'>Continue</button>
                        <h4>OR</h4>
                        <button className="google-row"><img src={google} alt=""/><span>Continue with Google</span></button>
                        <h4 className='already'>Already have an account? Log in</h4>
                    </div>
                </div>
            </div>
        )
    }
}