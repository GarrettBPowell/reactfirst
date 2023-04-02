import React from 'react'
import './SectionAdder.css'
import ImgAsset from '../public'
import RemoveMenu from "./RemoveMenu"
import AddMenu from "./AddMenu"
export default function SectionAdder (props) {
	return (
		<div className={`SectionAdder_SectionAdder ${props.className}`}>
			<RemoveMenu className='RemoveMenu'/>
			<img className='Line1' src = {ImgAsset.SectionAdder_Line1} />
			<AddMenu className='AddMenu'/>
		</div>
	)
}