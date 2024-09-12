
import SucessModal from './SucessModal'

const ActionButton = () => {


	return (
		<div className='stack_item_btn_container'>
			<button id='stack_item_btn_container_one'>Cancel</button>
			<button id='stack_item_btn_container_two'>Save as draft</button>
			<SucessModal />
		</div>
	)
}

export default ActionButton