import React from 'react'
import { ReactComponent as Cloud } from "../../assets/svg/cloud-upload.svg";
import ActionButton from '../../components/ActionButton';


function TermsandAttachments() {
	return (
		<div className='details_container_sup '>
			<div>
				<h5 className='details_h1'>Terms and Attachments</h5>
				<p className='details_h1_p'>Provide detailed information on payment and delivery terms</p>
			</div>

			<section className='section_two mt-5'>
				<div className='input_flex_container'>
					<div className='input_flex_container_lable_main'>
						<label className='label'>Payment Terms</label>
						<input className='label_input'
							placeholder='Net 30'></input>
					</div>
					<div>
						<div className='input_flex_container_lable_main'>
							<label className='label'>Delivery Schedule</label>
							<input className='label_input'
								placeholder='Immediate delivery'></input>
						</div>
					</div>
				</div>
				<div className='input_flex_container'>
					<div className='input_flex_container_lable_main'>
						<label className='label'>Shipping Method</label>
						<input className='label_input'
							placeholder='Courier Services'></input>
					</div>
					<div>
						<div className='input_flex_container_lable_main'>
							<label className='label'>Lead time</label>
							<input className='label_input'
								placeholder='10'></input>
						</div>
					</div>
				</div>
			</section>


			<section className='mt-5'>
				<div className='upload_container_documents'>
					<h3>Attachments</h3>
					<p>Attach all necessary files or documents</p>
				</div>


				<div className='upload_container_main'>
					<div className='upload_container_main_one'>
						<div className='upload_container_main_one_icon'>
							<Cloud />
						</div>
						<div >
							<div className='upload_container_main_one_sub'>
								<h6>Click to upload</h6>
								<p>or drag and drop</p>
							</div>
							<p className='upload_container_main_one_sub_p'>SVG, PNG, JPG or GIF (max. 800x400px)</p>
						</div>
						<h6 className='upload_container_main_one_or'>OR</h6>
						<button id='browse_files'>
							Browse Files
						</button>
					</div>
					<div> </div>
				</div>
			</section>
			<ActionButton />
		</div>
	)
}

export default TermsandAttachments
