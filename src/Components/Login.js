import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import Header2Default from "./Header2Default"
import PrimaryButton from "./PrimaryButton"
export default function Login () {
	return (
		<div className='Login_Login'>
			<Header2Default className='Header'/>
			<span className='Login_1'>Login</span>
			<div className='Frame13'>
				<div className='Frame13_1'>
					<span className='Username'>Username:</span>
					<div className='Frame14'>
						<span className='definitelyYourUsername'>definitelyYourUsername </span>
					</div>
				</div>
				<div className='Frame14_1'>
					<span className='Password'>Password:</span>
					<div className='Frame15'>
						<span className='_'>***************</span>
					</div>
				</div>
				<PrimaryButton className='PrimaryButton'/>
				<span className='NewMakeanaccount'>New? <br/>Make an account!</span>
			</div>
		</div>
	)
}