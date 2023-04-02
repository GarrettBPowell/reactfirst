import React from 'react'
import './NameSpinner_1.css'
import {Link} from 'react-router-dom'
import BlankFrame from "./BlankFrame"
import NavigationBar from "./NavigationBar"
import SearchBar from "./SearchBar"
import SecondaryButton from "./SecondaryButton"
export default function NameSpinner_1 () {
	return (
		<div className='NameSpinner_1_NameSpinner'>
			<BlankFrame className='CreateSpinner'/>
			<NavigationBar className='NavigationBar'/>
			<span className='NameYourGroupSpinner'>Name Your <br/>Group Spinner</span>
			<div className='Frame3771'>
				<span className='MenuTitle'>Name:</span>
				<SearchBar className='SearchBar'/>
			</div>
			<SecondaryButton className='SecondaryButton'/>
		</div>
	)
}