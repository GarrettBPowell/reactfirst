import React from 'react'
import './iPhone14ProMax4.css'
import Footer from "./Footer"
import NavigationBar from "./NavigationBar"
export default function IPhone14ProMax4 () {
	return (
		<div className='iPhone14ProMax4_iPhone14ProMax4'>
			<span className='Spacing'>Spacing</span>
			<span className='Buttonswillbe12pawayfromeachother'>Buttons will be 12 p away from each other</span>
			<span className='Headersandbuttonswillbe12pawayMaintextandbuttonswillbe8p'>Headers and buttons will be 12 p away<br/>Main text and buttons will be 8 p</span>
			<Footer className='Footer'/>
			<NavigationBar className='NavigationBar'/>
			<span className='Header'>Header</span>
		</div>
	)
}