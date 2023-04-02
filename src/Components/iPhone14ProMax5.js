import React from 'react'
import './iPhone14ProMax5.css'
import Footer from "./Footer"
import NavigationBar from "./NavigationBar"
import generalmenu from "./generalmenu"
import SelectionAdderButton from "./SelectionAdderButton"
import tipsexclamationcircle from "./tipsexclamationcircle"
import SearchBar from "./SearchBar"
export default function IPhone14ProMax5 () {
	return (
		<div className='iPhone14ProMax5_iPhone14ProMax5'>
			<Footer className='Footer'/>
			<NavigationBar className='NavigationBar'/>
			<generalmenu className='generalmenu'/>
			<div className='Group13'>
				<div className='Row4'>
					<SelectionAdderButton className='SelectionAdderButton'/>
					<SelectionAdderButton className='SelectionAdderButton_1'/>
				</div>
				<div className='Row3'>
					<SelectionAdderButton className='SelectionAdderButton_2'/>
					<SelectionAdderButton className='SelectionAdderButton_3'/>
				</div>
				<div className='Row2'>
					<SelectionAdderButton className='SelectionAdderButton_4'/>
					<SelectionAdderButton className='SelectionAdderButton_5'/>
				</div>
				<div className='Row1'>
					<SelectionAdderButton className='SelectionAdderButton_6'/>
					<SelectionAdderButton className='SelectionAdderButton_7'/>
				</div>
			</div>
			<div className='Toast'>
				<tipsexclamationcircle className='tipsexclamationcircle'/>
				<span className='Warning'>Warning!</span>
			</div>
			<SearchBar className='SearchBar'/>
		</div>
	)
}