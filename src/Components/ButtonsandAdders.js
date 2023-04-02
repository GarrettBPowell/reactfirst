import React from 'react'
import './ButtonsandAdders.css'
import ImgAsset from '../public'
import AddItem from "./AddItem"
import tipsclose from "./tipsclose"
import CancelButton from "./CancelButton"
import false_1 from "./false_1"
import directionarrowright from "./directionarrowright"
import RemoveItem from "./RemoveItem"
import RemoveMenu from "./RemoveMenu"
import AddMenu from "./AddMenu"
import EditButton from "./EditButton"
export default function ButtonsandAdders () {
	return (
		<div className='ButtonsandAdders_ButtonsandAdders'>
			<div className='AddMenu'>
				<span className='MenuTitle'>Menu Title:</span>
				<div className='Frame3772'>
					<div className='Frame3772_1'>
						<AddItem className='AddItem'/>
						<AddItem className='AddItem_1'/>
					</div>
					<div className='Frame3773'>
						<AddItem className='AddItem_2'/>
						<AddItem className='AddItem_3'/>
					</div>
					<div className='Frame3774'>
						<AddItem className='AddItem_4'/>
						<AddItem className='AddItem_5'/>
					</div>
					<div className='Frame3772_2'>
						<AddItem className='AddItem_6'/>
						<AddItem className='AddItem_7'/>
					</div>
					<div className='Frame3775'>
						<AddItem className='AddItem_8'/>
						<AddItem className='AddItem_9'/>
					</div>
					<div className='Frame3776'>
						<AddItem className='AddItem_10'/>
						<AddItem className='AddItem_11'/>
					</div>
				</div>
			</div>
			<div className='RemoveButton'>
				<div className='Group3770'>
					<div className='Group3768'>
						<div className='Ellipse3'/>
						<tipsclose className='tipsclose'/>
					</div>
					<div className='tipsclose_1'>
						<img className='Vector' src = {ImgAsset.ButtonsandAdders_Vector} />
					</div>
				</div>
			</div>
			<CancelButton className='CancelButton'/>
			<false_1 className='Button'/>
			<div className='ForwardButton'>
				<true className='Button_1'/>
				<directionarrowright className='directionarrowright'/>
			</div>
			<div className='RemoveMenu'>
				<div className='RemoveButtonRow'>
					<RemoveItem className='RemoveItem'/>
					<RemoveItem className='RemoveItem_1'/>
				</div>
				<div className='RemoveButtonRow_1'>
					<RemoveItem className='RemoveItem_2'/>
					<RemoveItem className='RemoveItem_3'/>
				</div>
				<div className='RemoveButtonRow_2'>
					<RemoveItem className='RemoveItem_4'/>
					<RemoveItem className='RemoveItem_5'/>
				</div>
				<div className='RemoveButtonRow_3'>
					<RemoveItem className='RemoveItem_6'/>
					<RemoveItem className='RemoveItem_7'/>
				</div>
			</div>
			<div className='SectionAdder'>
				<RemoveMenu className='RemoveMenu_1'/>
				<img className='Line1' src = {ImgAsset.ButtonsandAdders_Line1} />
				<AddMenu className='AddMenu_1'/>
			</div>
			<EditButton className='EditButton'/>
		</div>
	)
}