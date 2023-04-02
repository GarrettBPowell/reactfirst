import React from 'react'
import './NameSpinner_4.css'
import {Link} from 'react-router-dom'
import BlankFrame from "./BlankFrame"
import NavigationBar from "./NavigationBar"
import SecondaryButton from "./SecondaryButton"
import SearchBar from "./SearchBar"
import SectionAdder from "./SectionAdder"
export default function NameSpinner_4 () {
	return (
		<div className='NameSpinner_4_NameSpinner'>
			<BlankFrame className='CreateSpinner'/>
			<NavigationBar className='NavigationBar'/>
			<span className='WorkBuds'>Work Buds</span>
			<SecondaryButton className='SecondaryButton'/>
			<div className='Frame3771'>
				<SearchBar className='SearchBar'/>
				<SectionAdder className='SectionAdder'/>
			</div>
		</div>
	)
}