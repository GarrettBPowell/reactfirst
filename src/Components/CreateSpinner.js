import React from 'react'
import './CreateSpinner.css'
import {Link} from 'react-router-dom'
import BlankFrame from "./BlankFrame"
import SecondaryButton from "./SecondaryButton"
export default function CreateSpinner () {
	return (
		<div className='CreateSpinner_CreateSpinner'>
			<BlankFrame className='CreateSpinner_1'/>
			<SecondaryButton className='SecondaryButton'/>
		</div>
	)
}