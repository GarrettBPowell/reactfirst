import React from 'react'
import './RemoveItem.css'
import RemoveButton from "./RemoveButton"
export default function RemoveItem (props) {
	return (
		<div className={`RemoveItem_RemoveItem ${props.className}`}>
			<span className='RemoveText'>An Item</span>
			<RemoveButton className='RemoveButton'/>
		</div>
	)
}