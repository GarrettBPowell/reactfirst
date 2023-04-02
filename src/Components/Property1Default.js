import React from 'react'
import './Property1Default.css'
import ImgAsset from '../public'
export default function Property1Default (props) {
	return (
		<div className={`Property1Default_Property1Default ${props.className}`}>
			<div className='Spinner'>
				<div className='SpinWheelBackground'>
					<img className='Polygon1' src = {ImgAsset.Property1Default_Polygon1} />
					<img className='Polygon2' src = {ImgAsset.Property1Default_Polygon2} />
					<img className='Polygon3' src = {ImgAsset.Property1Default_Polygon3} />
					<img className='Polygon4' src = {ImgAsset.Property1Default_Polygon4} />
					<img className='Polygon5' src = {ImgAsset.Property1Default_Polygon5} />
					<img className='Polygon6' src = {ImgAsset.Property1Default_Polygon6} />
					<img className='spinnerdivision' src = {ImgAsset.Property1Default_spinnerdivision} />
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
					<span className='TheFlippingEgg'>Flipping Egg</span>
					<span className='RedRobin'>Red Robin</span>
				</div>
			</div>
		</div>
	)
}