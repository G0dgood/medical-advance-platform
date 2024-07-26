import { BiHelpCircle } from "react-icons/bi";
import { SVGLoader } from "./SVGLoader";
import { MdLogout } from "react-icons/md";


const ProfileDropDown = () => {



	return (
		<div className='notification-profile'>
			<div className='notification-card'  >
				<div className='notification-icon-profile'>
					{"G"}
				</div>
				<div>
					<p className='notification-text-profile'>My profile</p>
				</div>
			</div>
			<div className='notification-card'  >
				<div className='notification-icon-profile-sup'>
					<BiHelpCircle size={25} />
				</div>
				<div>
					<p className='notification-text-profile'>Help and Support</p>
				</div>
			</div>

			<div className='notification-card'  >
				<div className='notification-icon-profile-sup'>
					<MdLogout size={25} />
				</div>
				<div>
					{false ? <SVGLoader width={"30px"} height={"30px"} color={"#000"} /> : <p className='notification-text-profile'>Logout</p>}

				</div>
			</div>
		</div>
	)
}

export default ProfileDropDown