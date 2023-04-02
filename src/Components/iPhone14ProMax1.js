import React from 'react'
import './iPhone14ProMax1.css'
import NavigationBar from "./NavigationBar"
export default function IPhone14ProMax1 () {
	return (
		<div className='iPhone14ProMax1_iPhone14ProMax1'>
			<span className='MainHeader48'>Main Header - 48</span>
			<div className='Group8'>
				<span className='Heading1size32'>Heading 1 - size 32</span>
				<span className='Heading2size25'>Heading 2 - size 25</span>
				<span className='Thisisthemainbodytextwhichwilldisplayinformationsize16'>This is the main body text which will display information - size 16</span>
				<span className='Theremightbetimeswheretipsareneededwhichwillbesize11'>There might be times where tips are needed which will be size 11</span>
			</div>
			<NavigationBar className='NavigationBar'/>
			<div className='Group7'>
				<span className='TextelsewherewillbeleftalignedFontshouldbethesamethroughout'>Text elsewhere will be left aligned<br/>Font should be the same throughout </span>
				<span className='Friendcaneatatrestaurantwithyou'>Friend can eat at restaurant with you</span>
				<span className='Somedietaryconflicts'>Some dietary conflicts</span>
				<span className='Mediumdietaryconflicts'>Medium dietary conflicts</span>
				<span className='Almostnothingedible'>Almost nothing edible </span>
				<span className='Frienddoesnothaverestaurantadded'>Friend does not have restaurant added</span>
			</div>
			<span className='StatusColors'>Status Colors:</span>
			<div className='Group11'>
				<div className='Ellipse3'/>
				<div className='Ellipse4'/>
				<div className='Ellipse5'/>
				<div className='Ellipse6'/>
				<div className='Ellipse7'/>
			</div>
		</div>
	)
}