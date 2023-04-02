import React from 'react'
import './BlankFrame.css'
import Header2Default from "./Header2Default"
export default function BlankFrame (props) {
	return (
		<div className={`BlankFrame_BlankFrame ${props.className}`}>
			<Header2Default className='Header'/>
		</div>
	)
}