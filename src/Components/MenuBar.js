import React from 'react'
import './MenuBar.css'
export default function MenuBar (props) {
	return (
		<div className={`MenuBar_MenuBar ${props.className}`}>
			<div className='Group2758'>
				<div className='Group2751'>
					<div className='Group2722'>
						<div className='Group2612'>
							<div className='Rectangle971'/>
							<span className='Salads'>Salads</span>
						</div>
						<div className='Group2613'>
							<div className='Rectangle971_1'/>
							<span className='Entres'>Entrées</span>
						</div>
						<div className='Group2615'>
							<div className='Rectangle971_2'/>
							<span className='Sides'>Sides</span>
						</div>
						<div className='Group2614'>
							<div className='Rectangle971_3'/>
							<span className='Breakfast'>Breakfast</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}