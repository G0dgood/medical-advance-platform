import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';

import { SVGLoader } from './SVGLoader';


const SucessModal = () => {
	const customId = "custom-id-yes";
	const [show, setShow] = useState(false)
	const [loading, setLoading] = useState(false)




	const handelfalse = () => {
		setShow(false)
	}
	const handeltrue = () => {
		setLoading(true);
		setTimeout(() => {
			toast.success("RFQ ID sent successfully!", { toastId: customId });
			setShow(false);
			setLoading(false);
		}, 5000);
	}


	return (
		<div >
			<ToastContainer position="top-right" />
			<button id='stack_item_btn_container_three' onClick={() => setShow(true)}>Submit</button>
			<Modal show={show} centered>
				<div>
					{loading ?
						<div className='SVGLoader_container'>
							<SVGLoader width={"60px"} height={"60px"} color={"#175CFF"} />
							<p>Sending Quote...</p>
						</div>
						:
						<div className="popup__container">
							<div className="popup__modal_header">
								<div className="popup__modal_title_accent">
									<h5 className='popup__modal_title_h5'>Confirmation</h5>
									<p className='popup__modal_title'>You are about to submit this quote in response to RFQ ID, this will immediately be sent to the client “Westend Clear Hospital”. Are you sure you want to proceed?</p>
								</div>
							</div>
							<div id="popup__modal_footer">
								<button id="button-modal-cancel" className="popup__modal_button" onClick={handelfalse}>Cancel</button>
								<button id="button-modal-continue" className="popup__modal_button_accent" onClick={handeltrue}>
									Continue</button>
							</div>
						</div>

					}
				</div>
			</Modal>
		</div>
	)
}

export default SucessModal

