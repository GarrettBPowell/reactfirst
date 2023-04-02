import React from 'react'
import './SpinHomePage_5.css'
import ImgAsset from '../public'
import NavigationBar from "./NavigationBar"
import Header2Default from "./Header2Default"
import SpinnerHeader from "./SpinnerHeader"
import EditButton from "./EditButton"
export default function SpinHomePage_5 () {
	return (
		<div className='SpinHomePage_5_SpinHomePage'>
			<NavigationBar className='NavigationBar'/>
			<Header2Default className='Header'/>
			<div className='Spinner'>
				<SpinnerHeader className='SpinnerHeader'/>
				<div className='SpinnerandEdit'>
					<div className='Spinner_1'>
						<div className='Spinner_2'>
							<div className='SpinWheelBackground'>
								<img className='Polygon1' src = {ImgAsset.SpinHomePage_5_Polygon1} />
								<img className='Polygon2' src = {ImgAsset.SpinHomePage_5_Polygon2} />
								<img className='Polygon3' src = {ImgAsset.SpinHomePage_5_Polygon3} />
								<img className='Polygon4' src = {ImgAsset.SpinHomePage_5_Polygon4} />
								<img className='Polygon5' src = {ImgAsset.SpinHomePage_5_Polygon5} />
								<img className='Polygon6' src = {ImgAsset.SpinHomePage_5_Polygon6} />
								<img className='spinnerdivision' src = {ImgAsset.SpinHomePage_5_spinnerdivision} />
								<div className='Ellipse1'/>
							</div>
							<div className='SpinCenter'>
								<div className='Polygon1_1'/>
								<div className='Ellipse4'/>
								<div className='Ellipse5'/>
								<span className='SPIN'>SPIN</span>
							</div>
							<div className='Resturants'>
								<span className='PFChangs'>PF<br/>Changs</span>
								<span className='Chipotle'>Chipotle</span>
								<span className='Mooyah'>Mooyah</span>
								<span className='RollShack'>Roll Shack</span>
								<span className='TheFlippingEgg'>Chick-fil-a</span>
								<span className='RedRobin'>Red Robin</span>
							</div>
						</div>
					</div>
					<EditButton className='EditButton'/>
				</div>
			</div>
		</div>
	)
}