import React from 'react'
import './Resturantsadd9.css'
import Header2Header2 from "./Header2Header2"
import SearchBar from "./SearchBar"
import SectionAdder from "./SectionAdder"
import SecondaryButton from "./SecondaryButton"
import NavigationBar from "./NavigationBar"
export default function Resturantsadd9 () {
	return (
		<div className='Resturantsadd9_Resturantsadd9'>
			<div className='BlankFrame'>
				<div className='Frame3771'>
					<Header2Header2 className='Header'/>
					<span className='AddRestaurants'>Add <br/>Restaurants</span>
					<div className='Frame3771_1'>
						<SearchBar className='SearchBar'/>
						<SectionAdder className='SectionAdder'/>
						<SecondaryButton className='SecondaryButton'/>
					</div>
				</div>
			</div>
			<NavigationBar className='NavigationBar'/>
		</div>
	)
}