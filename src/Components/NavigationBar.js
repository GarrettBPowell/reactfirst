import React from 'react'
import './NavigationBar.css'
import Footer from "./Footer"
import SpinButton from "./SpinButton"
export default function NavigationBar (props) {
	return (
		<div className={`NavigationBar_NavigationBar ${props.className}`}>
			<Footer className='Footer'/>
			<SpinButton className='SpinButton'/>
		</div>
	)
}