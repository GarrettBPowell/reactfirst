import React from 'react'
import './Header2Header2.css'
import directionarrowright from "./directionarrowright"
import generalmenu from "./generalmenu"
export default function Header2Header2 (props) {
	return (
		<div className={`Header2Header2_Header2Header2 ${props.className}`}>
			<directionarrowright className='directionarrowright'/>
			<generalmenu className='generalmenu'/>
		</div>
	)
}