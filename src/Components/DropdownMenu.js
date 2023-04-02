import React from 'react'
import './DropdownMenu.css'
import directiondown from "./directiondown"
export default function DropdownMenu (props) {
	return (
		<div className={`DropdownMenu_DropdownMenu ${props.className}`}>
			<directiondown className='directiondown'/>
		</div>
	)
}