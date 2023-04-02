import React from 'react'
import './AddFriends_2.css'
import {Link} from 'react-router-dom'
import Header2Default from "./Header2Default"
import SearchBar from "./SearchBar"
import SectionAdder from "./SectionAdder"
import NavigationBar from "./NavigationBar"
import SecondaryButton from "./SecondaryButton"
export default function AddFriends_2 () {
	return (
		<div className='AddFriends_2_AddFriends'>
			<div className='BlankFrame'>
				<div className='Frame3771'>
					<Header2Default className='Header'/>
					<span className='FriendList'>Friend List</span>
					<div className='Frame3771_1'>
						<SearchBar className='SearchBar'/>
						<SectionAdder className='SectionAdder'/>
					</div>
				</div>
				<NavigationBar className='NavigationBar'/>
				<SecondaryButton className='SecondaryButton'/>
			</div>
		</div>
	)
}