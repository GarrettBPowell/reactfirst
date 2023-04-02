import React from 'react'
import './Header2Default.css'
import generalmenu from "./generalmenu"
export default function Header2Default (props) {
	return (
		<div className={`Header2Default_Header2Default ${props.className}`}>
			<generalmenu className='generalmenu'/>
		</div>
	)
}