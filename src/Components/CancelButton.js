import React from 'react'
import './CancelButton.css'
export default function CancelButton (props) {
	return (
		<div className={`CancelButton_CancelButton ${props.className}`}>
			<span className='ButtonText'>Cancel</span>
		</div>
	)
}