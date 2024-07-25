import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineUser } from "react-icons/ai";



const ModalHeader = ({ setShow, headerTitle, sys }: any) => {
	return (
		<div className={`modal-close  ${sys}`}>
			<div className='close-icon'>
			</div>


			<div className='close-span-header'>
				<div className='close-span-xheader'>
					<AiOutlineUser size={27} color='#0D6EFD' />
				</div>
				<h3>{headerTitle}</h3>
			</div>

			<AiOutlineClose size={25} onClick={() => setShow(false)} className='close-span-icon' />
		</div>
	)
}

export default ModalHeader
