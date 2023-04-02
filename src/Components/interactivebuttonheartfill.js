import React from 'react'
import './interactivebuttonheartfill.css'
import ImgAsset from '../public'
export default function Interactivebuttonheartfill (props) {
	return (
		<div className={`interactivebuttonheartfill_interactivebuttonheartfill ${props.className}`}>
			<img className='Vector' src = {ImgAsset.interactivebuttonheartfill_Vector} />
		</div>
	)
}