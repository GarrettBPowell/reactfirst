import React from 'react'
import './OtherThings.css'
import SecondaryButton from "./SecondaryButton"
import tipsexclamationcircle from "./tipsexclamationcircle"
import RemoveMenu from "./RemoveMenu"
export default function OtherThings () {
	return (
		<div className='OtherThings_OtherThings'>
			<div className='WarningPopup'>
				<div className='Contents'>
					<div className='Background'/>
					<SecondaryButton className='SecondaryButton'/>
					<div className='TopofFrame'>
						<div className='Text'>
							<div className='Frame3771'>
								<tipsexclamationcircle className='tipsexclamationcircle'/>
								<span className='Warning'>Warning!</span>
							</div>
							<span className='Thefollowingrestaurantsdonotmeetyourallergyspecifications'>The following restaurants do not meet your allergy specifications</span>
						</div>
						<div className='Remove'>
							<span className='MenuTitle'>Remove Restaurant?</span>
							<RemoveMenu className='RemoveMenu'/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}