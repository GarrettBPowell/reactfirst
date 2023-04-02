import React from 'react'
import './CreateSpinner_2.css'
import {Link} from 'react-router-dom'
import BlankFrame from "./BlankFrame"
import SecondaryButton from "./SecondaryButton"
import NavigationBar from "./NavigationBar"
import Header2Header2 from "./Header2Header2"
export default function CreateSpinner_2 () {
	return (
		<div className='CreateSpinner_2_CreateSpinner'>
			<BlankFrame className='CreateSpinner_1'/>
			<div className='Frame3771'>
				<SecondaryButton className='SecondaryButton'/>
				<SecondaryButton className='SecondaryButton_1'/>
			</div>
			<NavigationBar className='NavigationBar'/>
			<Header2Header2 className='Header'/>
		</div>
	)
}