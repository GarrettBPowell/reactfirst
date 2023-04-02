import React from 'react'
import './AddItem.css'
import SelectionAdderButton from "./SelectionAdderButton"
export default function AddItem (props) {
	return (
		<div className={`AddItem_AddItem ${props.className}`}>
			<SelectionAdderButton className='SelectionAdderButton'/>
		</div>
	)
}