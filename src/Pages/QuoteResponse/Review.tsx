import React from 'react'
import { ReactComponent as Edit } from "../../assets/svg/Edit.svg";
import { ReactComponent as Down } from "../../assets/svg/chevron-down.svg";
import { ReactComponent as Sign } from "../../assets/svg/sign-doc2.svg";
import { ReactComponent as Ellipse } from "../../assets/svg/Ellipse 1292.svg";
import Miscicon from "../../assets/img/Miscicon.png"
import ActionButton from '../../components/ActionButton';


function Review() {




	const items = [
		{
			id: 1,
			name: 'Oxygen concentrator',
			code: '#28373',
			variant: 'Blue',
			quantity: '100 pieces',
			price: '$200.00',
			amount: '$2,000.00',
			deliveryDate: '2024-08-07',
			image: Miscicon,
		},
		{
			id: 2,
			name: 'Oxygen concentrator',
			code: '#28374',
			variant: 'Blue',
			quantity: '100 pieces',
			price: '$200.00',
			amount: '$2,000.00',
			deliveryDate: '2024-08-07',
			image: Miscicon,
		},
		{
			id: 2,
			name: 'Oxygen concentrator',
			code: '#28374',
			variant: 'Blue',
			quantity: '100 pieces',
			price: '$200.00',
			amount: '$2,000.00',
			deliveryDate: '2024-08-07',
			image: Miscicon,
		},
		{
			id: 2,
			name: 'Oxygen concentrator',
			code: '#28374',
			variant: 'Blue',
			quantity: '100 pieces',
			price: '$200.00',
			amount: '$2,000.00',
			deliveryDate: '2024-08-07',
			image: Miscicon,
		},
	];

	return (
		<div className='details_container_sup_main'>
			<div className='details_container_sup'>
				<div className='details_container_edit'>
					<h5 className='details_h1'>Request Information</h5>
					<Edit />
				</div>

				<section className='section_two'>
					<div className='equipments_request_container'>
						<div className='equipments_request_container_p'>
							<p>Title</p>
							<p>RFQ No</p>
							<p>Requestor</p>
							<p>Department</p>
							<p>Expected delivery date</p>
						</div>

						<div className='equipments_request_container_h4'>
							<h4>Request for Equipments</h4>
							<h4>#RQ 01234</h4>
							<div className='JD_flex'>
								<div className='jd_content'>JD</div>
								<h4>Jane Doe </h4>
								<Ellipse />
								<p className='Paediatrics'>Head Nurse, Paediatrics</p>
							</div>

							<h4>Maternity</h4>
							<h4>2024-12-02</h4>
						</div>
					</div>
				</section>
			</div>


			<div className='details_container_sup '>
				<section>
					<h3 className='mb-4'>Item(s)</h3>
					<div className='Request_container_group_section'>
						<div className='stack_item_container_sub'>
							<div className="custom-checkbox-container">
								<div className="custom-checkbox">
									<input type="checkbox" id="selectAllCheckbox" />
								</div>
								<p>Items</p>
							</div>
							<p>Variant</p>
							<p>Quantity</p>
							<p>Price</p>
							<p>Amount</p>
							<p>Expected Delivery Date</p>
						</div>

						<div className='stack_item_container_main_row '>
							{items.map((item) => (
								<div key={item.id} className='stack_item_container_main_sub stack_item_bottom_border'>
									<div className="custom-checkbox-container">
										<div className="custom-checkbox">
											<input type="checkbox" id={`checkbox-${item.id}`} />
										</div>
										<div className='stack_item_container_image_flex'>
											<div className='stack_item_container_image'>
												<img src={item.image} alt={item.name} />
											</div>
											<div className='concentrator'>
												<h6>{item.name}</h6>
												<p>{item.code}</p>
											</div>
										</div>
									</div>
									<div className='pieces'>{item.variant}</div>
									<div className='pieces'>{item.quantity}</div>
									<div className='pieces'>{item.price}</div>
									<div className='pieces'>{item.amount}</div>
									<div className='pieces'>{item.deliveryDate}</div>
								</div>
							))}
						</div>
					</div>

					<div className='stack_item_container_main_sub'>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div className='pieces'>Sub Total</div>
						<div className='pieces'>$8,000.00</div>
					</div>

					<div className='stack_item_container_main_sub'>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div className='pieces'>Total</div>
						<div className='pieces_plus'>$8,750.00</div>
					</div>
				</section>


				<div className='dashboard-first-card-boards mb-2 '>
					<div className='dashboard-first-card-container'>
						<div className='Request_container_group mt-2'>
							<div className='Request_container_list'  >
								<div className='Request_container'  >
									<Sign />
									<div>
										<h3 className='Information_number_h3'>Terms and Attachments</h3>
										<p className='Information_number_p'>Review payment and delivery terms</p>
									</div>
								</div>
								<Down />
							</div>
						</div>
					</div>
				</div>
			</div>
			<ActionButton />
		</div>
	)
}

export default Review