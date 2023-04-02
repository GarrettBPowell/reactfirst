import React from 'react'
import './DietaryPrefs2added.css'
import Header2Default from "./Header2Default"
import SearchBar from "./SearchBar"
import SectionAdder from "./SectionAdder"
import SecondaryButton from "./SecondaryButton"
export default function DietaryPrefs2added () {
	return (
		<div className='DietaryPrefs2added_DietaryPrefs2added'>
			<div className='BlankFrame'>
				<div className='Frame3771'>
					<Header2Default className='Header'/>
					<span className='DietaryPreferences'>Dietary Preferences</span>
					<div className='Frame3771_1'>
						<SearchBar className='SearchBar'/>
						<SectionAdder className='SectionAdder'/>
						<SecondaryButton className='SecondaryButton'/>
					</div>
				</div>
			</div>
		</div>
	)
}