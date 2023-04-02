import React from 'react'
import './iPhone14ProMax3.css'
import ImgAsset from '../public'
import Footer from "./Footer"
import NavigationBar from "./NavigationBar"
import generaluser from "./generaluser"
import interactivebuttonhome from "./interactivebuttonhome"
import tipsclose_1 from "./tipsclose_1"
import generalmenu from "./generalmenu"
import directionarrowright from "./directionarrowright"
import directiondown from "./directiondown"
import CancelButton from "./CancelButton"
export default function IPhone14ProMax3 () {
	return (
		<div className='iPhone14ProMax3_iPhone14ProMax3'>
			<span className='Colors'>Colors</span>
			<span className='BrandColor3BC9C9'>Brand Color: #3BC9C9</span>
			<span className='Icons'>Icons:</span>
			<Footer className='Footer'/>
			<NavigationBar className='NavigationBar'/>
			<div className='Group6'>
				<div className='Rectangle970'/>
				<div className='interactivebuttonheartfill'>
					<img className='Vector' src = {ImgAsset.iPhone14ProMax3_Vector} />
				</div>
				<div className='Group5'>
					<div className='tipsplus'>
					</div>
					<img className='Vector_1' src = {ImgAsset.iPhone14ProMax3_Vector_1} />
					<div className='Group3'>
						<generaluser className='generaluser'/>
						<generaluser className='generaluser_1'/>
					</div>
					<div className='Group3_1'>
						<div className='generaluser_2'>
							<img className='Vector_2' src = {ImgAsset.iPhone14ProMax3_Vector_2} />
						</div>
					</div>
					<interactivebuttonhome className='interactivebuttonhome'/>
					<img className='Vector_3' src = {ImgAsset.iPhone14ProMax3_Vector_3} />
				</div>
				<tipsclose_1 className='tipsclose'/>
				<generalmenu className='generalmenu'/>
				<directionarrowright className='directionarrowright'/>
				<img className='Vector_4' src = {ImgAsset.iPhone14ProMax3_Vector_4} />
			</div>
			<directiondown className='directiondown'/>
			<span className='Homebutton'>Home button</span>
			<span className='Addspinnerrestaurant'>Add spinner, restaurant </span>
			<span className='Removerestaurantfriend'>Remove restaurant, friend</span>
			<span className='Dropdownmenuselectfromlist'>Dropdown menu, select from list</span>
			<span className='Sandwichmenudisplaymenu'>Sandwich menu, display menu</span>
			<span className='Gonextproceedwithstep'>Go next, proceed with step</span>
			<span className='FavoriteSomething'>Favorite Something</span>
			<span className='FavoriteSomething_1'>Favorite Something</span>
			<span className='Searchforrestaurantfriend'>Search for restaurant, friend</span>
			<span className='Gotoprofilepage'>Go to profile page</span>
			<span className='Gotofriendspage'>Go to friends page</span>
			<div className='EditButton'>
			</div>
			<CancelButton className='CancelButton'/>
		</div>
	)
}