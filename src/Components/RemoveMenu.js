import React from 'react'
import './RemoveMenu.css'
import RemoveItem from "./RemoveItem"
export default function RemoveMenu (props) {
	return (
		<div className={`RemoveMenu_RemoveMenu ${props.className}`}>
			<div className='RemoveButtonRow'>
				<RemoveItem className='RemoveItem'/>
				<RemoveItem className='RemoveItem_1'/>
			</div>
			<div className='RemoveButtonRow_1'>
				<RemoveItem className='RemoveItem_2'/>
				<RemoveItem className='RemoveItem_3'/>
			</div>
			<div className='RemoveButtonRow_2'>
				<RemoveItem className='RemoveItem_4'/>
				<RemoveItem className='RemoveItem_5'/>
			</div>
			<div className='RemoveButtonRow_3'>
				<RemoveItem className='RemoveItem_6'/>
				<RemoveItem className='RemoveItem_7'/>
			</div>
		</div>
	)
}