import { ReactComponent as Bin } from "../../assets/svg/Bin.svg";
import { ReactComponent as Dollar } from "../../assets/svg/Dollar.svg";
import { ReactComponent as Calender } from "../../assets/svg/Calender.svg";
import { ReactComponent as RightContent } from "../../assets/svg/RightContent.svg";
import { ReactComponent as X } from "../../assets/svg/X.svg";
import { useState } from "react";
import { item } from "../../components/Data";
import ActionButton from "../../components/ActionButton";





function RequestInformation() {

	const [text, setText] = useState('');
	const maxLength = 250;




	const StackItemContainer = () => {
		return (
			<div className="stack_item_container_main_row">
				{item.map((item, index) => (
					<div className="stack_item_container_main" key={index}>
						<div className="custom-select-input Pack_flex">
							<p>{item.name}</p>
							<RightContent />
						</div>
						<div className="price_container Pack_flex">
							<p>{item.color}</p>
							<RightContent />
						</div>
						<div className="price_container Pack_flex">
							<p>{item.quantity}</p>
							<div className="Pack">Pack</div>
						</div>
						<div className="price_container">
							<Dollar />
							<p>{item.unitPrice.toFixed(2)}</p>
						</div>
						<div className="price_container">
							<Calender />
							<p>{item.date}</p>
						</div>
						<div className="bin_container">
							<h6>${item.totalPrice.toFixed(2)}</h6>
							<Bin />
						</div>
					</div>
				))}
			</div>
		);
	};


	return (
		<div className='details_container_sup'>
			<div>
				<h5 className='details_h1'>Request for Quote</h5>
				<p className='details_h1_p'>Fill out these details to send the RFQ</p>
			</div>

			<section className='section_two mt-4'>
				<div className='input_flex_container'>
					<div className='input_flex_container_lable_main'>
						<label className='label'>RFQ No</label>
						<div className='custom-select-input Pack_flex'>
							<p>RFQ-10234</p>
						</div>
					</div>
					<div>
						<div className='input_flex_container_lable_main'>
							<label className='label'>Title</label>
							<div className='custom-select-input Pack_flex'>
								<p>Request for Equipments</p>
							</div>
						</div>
					</div>
				</div>
				<div className='input_flex_container'>
					<div className='input_flex_container_lable_main'>
						<label className='label'>Department</label>
						<div className='custom-select-input Pack_flex'>
							<p>Maternity</p>
							<X />
						</div>
					</div>
					<div>
						<div className='input_flex_container_lable_main'>
							<label className='label'>Expected delivery date</label>
							<div className='custom-select-input Pack_flex_plus'>
								<Calender />
								<p>Oxygen Concentrator</p>
							</div>
							<p className='label_input_down'>Calculated based on lead time and issue date</p>
						</div>
					</div>
				</div>
			</section>


			<section className="stack_item_container_section mt-5">
				<h3>Add Items</h3>
				<div className='stack_item_container'>
					<p>Items</p>
					<p>Variant</p>
					<p>Quantity</p>
					<p>Price</p>
					<p>Expected delivery date</p>
					<p>Amount</p>
				</div>
				<StackItemContainer />

			</section>
			<div className='stack_item_container_main'>
				<div  >
				</div>
				<div  >

				</div>
				<div >

				</div>
				<div  >

				</div>
				<div className='pieces' >
					Sub Total
				</div>
				<div className='bin_container'>
					<h6>
						$1200.00
					</h6>
				</div>
			</div>
			<div className="textarea_lable_container_main">
				<h6 className="textarea_lable">Note</h6>
				<div className="textarea_lable_container">
					<textarea
						id="feedback"
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder="Enter note here"
						maxLength={maxLength}
						rows={6}
						className="textarea"
					/>
					<div className="textarea_stack_item_float">
						<p className="textarea_lable_bottom">0/200</p>
					</div>
				</div>

			</div>
			<ActionButton />
		</div>
	)
}

export default RequestInformation