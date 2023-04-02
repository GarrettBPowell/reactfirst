import React from 'react'
import './iPhone14ProMax7.css'
import NavigationBar from "./NavigationBar"
import SpinnerDefault from "./SpinnerDefault"
import EditButton from "./EditButton"
import SpinnerTitle from "./SpinnerTitle"
import generalmenu from "./generalmenu"
export default function IPhone14ProMax7 () {
	return (
		<div className='iPhone14ProMax7_iPhone14ProMax7'>
			<NavigationBar className='NavigationBar'/>
			<SpinnerDefault className='Spinner'/>
			<EditButton className='EditButton'/>
			<SpinnerTitle className='SpinnerTitle'/>
			<generalmenu className='generalmenu'/>
		</div>
	)
}