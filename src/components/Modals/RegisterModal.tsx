import { useEffect } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup'
import { Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import ModalHeader from './ModalHeader';
import { states } from '../Data';
import { SVGLoader } from '../SVGLoader';
import { useAppDispatch, useAppSelector } from '../../store/useStore';


const RegisterModal = ({ showTask, setShowTask }: any) => {

	const customId = "custom-id-yes";
	const dispatch = useAppDispatch()
	// const { isError, isSuccess, message, isLoading } = useAppSelector((state) => state.reg)



	// useEffect(() => {
	// 	dispatch(getsupervisors());
	// }, [dispatch]);


	const onSubmitRegistration = (values: any) => {
		const value: any = values;
		// @ts-ignore 
		// dispatch(userRegistration(value))
	}

	// useEffect(() => {
	// 	if (isError) {
	// 		toast.error(message, { toastId: customId });
	// 	} else if (isSuccess) {
	// 		toast.success("User Created!", { toastId: customId });
	// 		setShowTask(false)
	// 	}
	// 	dispatch(reset())
	// }, [dispatch, isError, isSuccess, message, setShowTask]);



	const loginValidationSchema = yup.object().shape({
		firstName: yup.string().required('First Name is Required'),
		LastName: yup.string().required('Last Name is Required'),
		email: yup.string().email("Please enter valid email").required('Email Address is Required'),
		role: yup.string().required('Please select role'),
		phoneNumber: yup.string().min(9, ({ min }) => `Password must be at least ${min} characters`)
			.required('Phone Number is required'),
		password: yup.string().min(6, ({ min }) => `Password must be at least ${min} characters`).required('Password is required'),
		location: yup.string().required('Location is Required'),
		address: yup.string().required('Address is Required'),
	})



	return (
		<div>
			<ToastContainer position="top-right" />
			{showTask && (
				<Modal
					show={showTask}
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<ModalHeader setShow={setShowTask} headerTitle={"New User"} />
					<Modal.Body>
						<div className="pop_box">
							<div className="modal_container">
								<div className="modal_header">
									<div className="close_button">
									</div>
								</div>
								<Formik
									validationSchema={loginValidationSchema}
									initialValues={{
										firstName: '',
										email: '',
										role: '',
										password: '123456',
									}}
									onSubmit={onSubmitRegistration}>

									{({ handleChange, handleSubmit, errors, values }) => (
										<div>
											<div className="container_reg">
												<form onSubmit={handleSubmit}>
													<div className="user__details">
														<div className="input__box">
															<span className="details">Email Address</span>
															<input type="email" placeholder="New User’s Email Address"
																value={values.email}
																onChange={handleChange('email')}
																required />
															{errors.email && <p className="formik-errors">{errors.email}</p>}
														</div>
														<div className="input__box">
															<span className="details">First Name</span>
															<input type="text" placeholder="New User’s Full Name"
																value={values.firstName}
																onChange={handleChange("firstName")}
																required />
															{errors.firstName && <p className="formik-errors">{errors.firstName}</p>}
														</div>




														<div className="input__box">
															<span className="details">Role</span>
															<select name="country" id="register-select"
																value={values.role}
																onChange={handleChange("role")}>
																<option value="">Select Role</option>
																<option value="SUPER_ADMIN">Super Admin</option>
																<option value="SUPERVISOR">Supervisor</option>
																<option value="EMPLOYEE">Employee</option>
															</select>
															{errors.role && <p className="formik-errors">{errors.role}</p>}
														</div>
														<div className="input__box">
															<span className="details">Create Password</span>
															<input type="text" placeholder="Create a Password for New User"
																value={values.password}
																onChange={handleChange("password")} required />
															{errors.password && <p className="formik-errors">{errors.password}</p>}
														</div>

													</div>
													<div className="Register-button-container">
														<button
															id='custom-btn'
															className=" mt-4"
															type="submit"
														>
															{false ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Add User"}
														</button>

													</div>
												</form>
											</div>
										</div>
									)}
								</Formik>
							</div>
						</div>
					</Modal.Body>
				</Modal>
			)}
		</div>
	)
}

export default RegisterModal






