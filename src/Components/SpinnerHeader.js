import React from 'react'
import './SpinnerHeader.css'
import StatusIconsVariant6 from "./StatusIconsVariant6"
import SpinnerTitle from "./SpinnerTitle"
import DropdownMenu from "./DropdownMenu"
export default function SpinnerHeader (props) {
	return (
		<div className={`SpinnerHeader_SpinnerHeader ${props.className}`}>
			<StatusIconsVariant6 className='StatusIconsVariant6'/>
			<SpinnerTitle className='SpinnerTitle'/>
			<DropdownMenu className='DropdownMenu'/>
		</div>
	)
}