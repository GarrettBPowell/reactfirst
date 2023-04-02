import React from 'react'
import './NameSpinner_2.css'
import BlankFrame from "./BlankFrame"
import NavigationBar from "./NavigationBar"
import SecondaryButton from "./SecondaryButton"
import SearchBar from "./SearchBar"
import SectionAdder from "./SectionAdder"
export default function NameSpinner_2 () {
	return (
		<div className='NameSpinner_2_NameSpinner'>
			<BlankFrame className='CreateSpinner'/>
			<NavigationBar className='NavigationBar'/>
			<span className='WorkSpinner'>Work Spinner</span>
			<SecondaryButton className='SecondaryButton'/>
			<div className='Frame3771'>
				<SearchBar className='SearchBar'/>
				<SectionAdder className='SectionAdder'/>
			</div>
		</div>
	)
}