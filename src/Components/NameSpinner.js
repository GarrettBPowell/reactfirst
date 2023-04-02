import React from 'react'
import './NameSpinner.css'
import {Link} from 'react-router-dom'
import BlankFrame from "./BlankFrame"
import NavigationBar from "./NavigationBar"
import SearchBar from "./SearchBar"
import SecondaryButton from "./SecondaryButton"
export default function NameSpinner () {
	return (
		<div className='NameSpinner_NameSpinner'>
			<BlankFrame className='CreateSpinner'/>
			<NavigationBar className='NavigationBar'/>
			<span className='NameYourGroupSpinner'>Name Your <br/>Group Spinner</span>
			<Link to='/namespinner_1'>
				<div className='Frame3771'>
					<span className='MenuTitle'>Name:</span>
					<SearchBar className='SearchBar'/>
				</div>
			</Link>
			<SecondaryButton className='SecondaryButton'/>
		</div>
	)
}