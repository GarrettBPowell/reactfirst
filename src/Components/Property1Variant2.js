import React from 'react'
import './Property1Variant2.css'
import SpinnerHeader from "./SpinnerHeader"
import Property1Default from "./Property1Default"
import EditButton from "./EditButton"
export default function Property1Variant2 (props) {
	return (
		<div className={`Property1Variant2_Property1Variant2 ${props.className}`}>
			<SpinnerHeader className='SpinnerHeader'/>
			<div className='SpinnerandEdit'>
				<Property1Default className='Spinner'/>
				<EditButton className='EditButton'/>
			</div>
		</div>
	)
}