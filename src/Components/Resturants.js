import React from 'react'
import './Resturants.css'
import Header2Default from "./Header2Default"
import SearchBar from "./SearchBar"
import SectionAdder from "./SectionAdder"
import SecondaryButton from "./SecondaryButton"
export default function Resturants () {
	return (
		<div className='Resturants_Resturants'>
			<div className='BlankFrame'>
				<div className='Frame3771'>
					<Header2Default className='Header'/>
					<span className='AddRestaurants'>Add <br/>Restaurants</span>
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