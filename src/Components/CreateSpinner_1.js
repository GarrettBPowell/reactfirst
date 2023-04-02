import React from 'react'
import './CreateSpinner_1.css'
import {Link} from 'react-router-dom'
import BlankFrame from "./BlankFrame"
import SecondaryButton from "./SecondaryButton"
import NavigationBar from "./NavigationBar"
export default function CreateSpinner_1 () {
	return (
		<div className='CreateSpinner_1_CreateSpinner'>
			<BlankFrame className='CreateSpinner_1'/>
			<div className='Frame3771'>
				<SecondaryButton className='SecondaryButton'/>
				<SecondaryButton className='SecondaryButton_1'/>
			</div>
			<NavigationBar className='NavigationBar'/>
		</div>
	)
}