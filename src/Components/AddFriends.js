import React from 'react'
import './AddFriends.css'
import {Link} from 'react-router-dom'
import Header2Default from "./Header2Default"
import SearchBar from "./SearchBar"
import SectionAdder from "./SectionAdder"
import SecondaryButton from "./SecondaryButton"
import NavigationBar from "./NavigationBar"
export default function AddFriends () {
	return (
		<div className='AddFriends_AddFriends'>
			<div className='BlankFrame'>
				<div className='Frame3771'>
					<Header2Default className='Header'/>
					<span className='FriendList'>Friend List</span>
					<div className='Frame3771_1'>
						<SearchBar className='SearchBar'/>
						<SectionAdder className='SectionAdder'/>
						<SecondaryButton className='SecondaryButton'/>
					</div>
				</div>
				<NavigationBar className='NavigationBar'/>
				<SecondaryButton className='SecondaryButton_1'/>
			</div>
		</div>
	)
}