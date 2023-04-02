import React from 'react'
import './BlankFramewithNav.css'
import NavigationBar from "./NavigationBar"
import Header2Default from "./Header2Default"
export default function BlankFramewithNav (props) {
	return (
		<div className={`BlankFramewithNav_BlankFramewithNav ${props.className}`}>
			<NavigationBar className='NavigationBar'/>
			<Header2Default className='Header'/>
		</div>
	)
}