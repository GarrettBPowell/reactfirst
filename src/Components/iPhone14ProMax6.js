import React from 'react'
import './iPhone14ProMax6.css'
import ImgAsset from '../public'
import Footer from "./Footer"
import NavigationBar from "./NavigationBar"
import generalmenu from "./generalmenu"
import tipsclose from "./tipsclose"
import false_1 from "./false_1"
import directionarrowright from "./directionarrowright"
export default function IPhone14ProMax6 () {
	return (
		<div className='iPhone14ProMax6_iPhone14ProMax6'>
			<Footer className='Footer'/>
			<NavigationBar className='NavigationBar'/>
			<generalmenu className='generalmenu'/>
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
			<div className='Group3770'>
				<div className='RemoveButton'>
					<div className='Group3769'>
						<div className='Group3768'>
							<div className='Ellipse3'/>
							<tipsclose className='tipsclose'/>
						</div>
						<div className='tipsclose_1'>
							<img className='Vector' src = {ImgAsset.iPhone14ProMax6_Vector} />
						</div>
					</div>
					<span className='AnItem'>An Item</span>
				</div>
				<div className='RemoveButton_1'>
					<div className='Group3769_1'>
						<div className='Group3768_1'>
							<div className='Ellipse3_1'/>
							<tipsclose className='tipsclose_2'/>
						</div>
						<div className='tipsclose_3'>
							<img className='Vector_1' src = {ImgAsset.iPhone14ProMax6_Vector_1} />
						</div>
					</div>
					<span className='AnItem_1'>An Item</span>
				</div>
			</div>
			<div className='RemoveButton_2'>
				<div className='Group3769_2'>
					<div className='Group3768_2'>
						<div className='Ellipse3_2'/>
						<tipsclose className='tipsclose_4'/>
					</div>
					<div className='tipsclose_5'>
						<img className='Vector_2' src = {ImgAsset.iPhone14ProMax6_Vector_2} />
					</div>
				</div>
				<span className='AnItem_2'>An Item</span>
			</div>
			<div className='RemoveButton_3'>
				<div className='Group3769_3'>
					<div className='Group3768_3'>
						<div className='Ellipse3_3'/>
						<tipsclose className='tipsclose_6'/>
					</div>
					<div className='tipsclose_7'>
						<img className='Vector_3' src = {ImgAsset.iPhone14ProMax6_Vector_3} />
					</div>
				</div>
				<span className='AnItem_3'>An Item</span>
			</div>
			<div className='CancelButton'>
				<span className='ButtonText'>Cancel</span>
			</div>
			<false_1 className='Button'/>
			<directionarrowright className='directionarrowright'/>
			<div className='ForwardButton'>
				<true className='Button_1'/>
				<directionarrowright className='directionarrowright_1'/>
			</div>
		</div>
	)
}