import React from 'react'
import './NavigationTools.css'
import Footer from "./Footer"
import SpinButton from "./SpinButton"
export default function NavigationTools () {
	return (
		<div className='NavigationTools_NavigationTools'>
			<div className='SearchBar'>
			</div>
			<div className='NavigationBar'>
				<Footer className='Footer'/>
				<SpinButton className='SpinButton'/>
			</div>
			<div className='MenuBar'>
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
		</div>
	)
}