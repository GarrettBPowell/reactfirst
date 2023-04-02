import React from 'react'
import './SpinHomePage.css'
import NavigationBar from "./NavigationBar"
import Header2Default from "./Header2Default"
import Property1Variant2 from "./Property1Variant2"
export default function SpinHomePage () {
	return (
		<div className='SpinHomePage_SpinHomePage'>
			<NavigationBar className='NavigationBar'/>
			<Header2Default className='Header'/>
			<Property1Variant2 className='Spinner'/>
		</div>
	)
}