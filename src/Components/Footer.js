import React from 'react'
import './Footer.css'
import ImgAsset from '../public'
import falsetruefalsefalse from "./falsetruefalsefalse"
import generaluser from "./generaluser"
export default function Footer (props) {
	return (
		<div className={`Footer_Footer ${props.className}`}>
			<div className='NavMenu'>
				<div className='Rectangle969'/>
				<div className='NavMenu_1'>
					<false className='Home'/>
					<div className='Profile'>
						<div className='Group2'>
							<div className='generaluser'>
								<img className='Vector' src = {ImgAsset.Footer_Vector} />
							</div>
						</div>
						<span className='Profile_1'>Profile</span>
						<div className='badgewrapper'>
							<falsetruefalsefalse className='badge'/>
						</div>
					</div>
					<false className='componentbasic'/>
					<div className='Friends'>
						<div className='Group2_1'>
							<generaluser className='generaluser_1'/>
							<generaluser className='generaluser_2'/>
						</div>
						<span className='label'>Friends</span>
						<div className='badgewrapper_1'>
							<falsetruefalsefalse className='badge_1'/>
						</div>
					</div>
					<div className='Add'>
						<div className='badgewrapper_2'>
							<falsetruefalsefalse className='badge_2'/>
						</div>
						<span className='label_1'>New</span>
					</div>
				</div>
			</div>
		</div>
	)
}