import React from 'react'
import './RemoveButton.css'
import ImgAsset from '../public'
import tipsclose from "./tipsclose"
export default function RemoveButton (props) {
	return (
		<div className={`RemoveButton_RemoveButton ${props.className}`}>
			<div className='Group3770'>
				<div className='Group3768'>
					<div className='Ellipse3'/>
					<tipsclose className='tipsclose'/>
				</div>
				<div className='tipsclose_1'>
					<img className='Vector' src = {ImgAsset.RemoveButton_Vector} />
				</div>
			</div>
		</div>
	)
}