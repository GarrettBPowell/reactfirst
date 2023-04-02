import React from 'react'
import './AddMenu.css'
import AddItem from "./AddItem"
export default function AddMenu (props) {
	return (
		<div className={`AddMenu_AddMenu ${props.className}`}>
			<span className='MenuTitle'>Menu Title:</span>
			<div className='Frame3772'>
				<div className='Frame3772_1'>
					<AddItem className='AddItem'/>
					<AddItem className='AddItem_1'/>
				</div>
				<div className='Frame3773'>
					<AddItem className='AddItem_2'/>
					<AddItem className='AddItem_3'/>
				</div>
				<div className='Frame3774'>
					<AddItem className='AddItem_4'/>
					<AddItem className='AddItem_5'/>
				</div>
				<div className='Frame3772_2'>
					<AddItem className='AddItem_6'/>
					<AddItem className='AddItem_7'/>
				</div>
				<div className='Frame3775'>
					<AddItem className='AddItem_8'/>
					<AddItem className='AddItem_9'/>
				</div>
				<div className='Frame3776'>
					<AddItem className='AddItem_10'/>
					<AddItem className='AddItem_11'/>
				</div>
			</div>
		</div>
	)
}