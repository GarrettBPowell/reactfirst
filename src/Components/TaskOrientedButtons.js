import React from 'react'
import './TaskOrientedButtons.css'
import PrimaryButton from "./PrimaryButton"
export default function TaskOrientedButtons () {
	return (
		<div className='TaskOrientedButtons_TaskOrientedButtons'>
			<div className='PrimaryButton'>
			</div>
			<div className='SecondaryButton'>
			</div>
			<div className='DestructiveButton'>
				<div className='PrimaryButton_1'>
				</div>
			</div>
			<PrimaryButton className='PrimaryButton_2'/>
			<div className='DisabledButton1'>
				<div className='Property1Default'>
				</div>
				<div className='Property1DisabledButton2'>
				</div>
			</div>
		</div>
	)
}