import React from 'react'
import './SpinnerStuffs.css'
import ImgAsset from '../public'
import directiondown from "./directiondown"
import StatusIconsVariant6 from "./StatusIconsVariant6"
import SpinnerTitle from "./SpinnerTitle"
import DropdownMenu from "./DropdownMenu"
export default function SpinnerStuffs () {
	return (
		<div className='SpinnerStuffs_SpinnerStuffs'>
			<div className='SpinnerTitle'>
				<span className='WorkBuds'>Work Buds</span>
			</div>
			<div className='DropdownMenu'>
				<directiondown className='directiondown'/>
			</div>
			<div className='SpinButton'>
				<div className='Group1'>
					<div className='Ellipse2'/>
					<img className='Ellipse1' src = {ImgAsset.SpinnerStuffs_Ellipse1} />
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
			<div className='SpinnerHeader'>
				<StatusIconsVariant6 className='StatusIconsVariant6'/>
				<SpinnerTitle className='SpinnerTitle_1'/>
				<DropdownMenu className='DropdownMenu_1'/>
			</div>
		</div>
	)
}