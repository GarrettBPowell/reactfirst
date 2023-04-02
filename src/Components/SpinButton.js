import React from 'react'
import './SpinButton.css'
import ImgAsset from '../public'
export default function SpinButton (props) {
	return (
		<div className={`SpinButton_SpinButton ${props.className}`}>
			<div className='Group1'>
				<div className='Ellipse2'/>
				<img className='Ellipse1' src = {ImgAsset.SpinButton_Ellipse1} />
				<span className='SPIN'>SPIN</span>
			</div>
			<div className='Group12'>
				<div className='Purple'/>
				<div className='Purple_1'/>
				<div className='Yellow'/>
				<div className='LightBlue'/>
				<div className='Orange'/>
				<div className='Red'/>
			</div>
		</div>
	)
}