import React from 'react'
import './generalpen.css'
import ImgAsset from '../public'
export default function Generalpen (props) {
	return (
		<div className={`generalpen_generalpen ${props.className}`}>
			<img className='Vector' src = {ImgAsset.generalpen_Vector} />
		</div>
	)
}