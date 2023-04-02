import React from 'react'
import './DietaryPrefs1Removed_1.css'
import Header2Header2 from "./Header2Header2"
import SearchBar from "./SearchBar"
import SectionAdder from "./SectionAdder"
import NavigationBar from "./NavigationBar"
import WarningPopup from "./WarningPopup"
export default function DietaryPrefs1Removed_1 () {
	return (
		<div className='DietaryPrefs1Removed_1_DietaryPrefs1Removed'>
			<div className='BlankFrame'>
				<div className='Frame3771'>
					<Header2Header2 className='Header'/>
					<span className='DietaryPreferences'>Dietary Preferences</span>
					<div className='Frame3771_1'>
						<SearchBar className='SearchBar'/>
						<SectionAdder className='SectionAdder'/>
					</div>
				</div>
			</div>
			<NavigationBar className='NavigationBar'/>
			<WarningPopup className='WarningPopup'/>
		</div>
	)
}