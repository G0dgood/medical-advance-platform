import { useEffect } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import ModalHeader from './ModalHeader';
import { SVGLoader } from '../SVGLoader';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { createUser, reset } from '../../features/User/userSlice';


const RegisterModal = ({ showTask, setShowTask }: any) => {
	const customId = "custom-id-yes";
	const dispatch = useAppDispatch();
	const { createIsError, createIsSuccess, createMessage, createIsLoading } = useAppSelector((state) => state.user);


	const onSubmitRegistration = (values: any) => {
		const value: any = values;
		// @ts-ignore 
		dispatch(createUser(value));
	};

	useEffect(() => {
		if (createIsError) {
			toast.error(createMessage, { toastId: customId });
		} else if (createIsSuccess) {
			toast.success("User Created!", { toastId: customId });
			setShowTask(false);
		}
		setTimeout(() => {
			dispatch(reset());
		}, 2000);

	}, [dispatch, createIsError, createIsSuccess, createMessage, setShowTask]);

	const loginValidationSchema = yup.object().shape({
		firstName: yup.string().required('First Name is Required'),
		email: yup.string().email("Please enter valid email").required('Email Address is Required'),
		role: yup.string().required('Please select role'),
		password: yup.string().min(6, ({ min }) => `Password must be at least ${min} characters`).required('Password is required'),
	});

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
									<div className="close_button"></div>
								</div>
								<Formik
									validationSchema={loginValidationSchema}
									initialValues={{
										firstName: '',
										email: '',
										role: '',
										password: '',
									}}
									onSubmit={onSubmitRegistration}
								>
									{({ handleChange, handleSubmit, errors, values }) => (
										<div>
											<div className="container_reg">
												<form onSubmit={handleSubmit}>
													<div className="user__details">
														<div className="input__box">
															<span className="details">Email Address</span>
															<input
																type="email"
																placeholder="New User’s Email Address"
																value={values.email}
																onChange={handleChange('email')}
																required
															/>
															{errors.email && <p className="formik-errors">{errors.email}</p>}
														</div>
														<div className="input__box">
															<span className="details">First Name</span>
															<input
																type="text"
																placeholder="New User’s Full Name"
																value={values.firstName}
																onChange={handleChange("firstName")}
																required
															/>
															{errors.firstName && <p className="formik-errors">{errors.firstName}</p>}
														</div>
														<div className="input__box">
															<span className="details">Role</span>
															<select
																name="role"
																id="register-select"
																value={values.role}
																onChange={handleChange("role")}
															>
																<option value="">Select Role</option>
																<option value="Admin">Admin</option>
																<option value="Sales Manager">Sales Manager</option>
																<option value="Sales Representative">Sales Representative</option>
															</select>
															{errors.role && <p className="formik-errors">{errors.role}</p>}
														</div>
														<div className="input__box">
															<span className="details">Create Password</span>
															<input
																type="text"
																placeholder="Create a Password for New User"
																value={values.password}
																onChange={handleChange("password")}
																required
															/>
															{errors.password && <p className="formik-errors">{errors.password}</p>}
														</div>
													</div>
													<div className="Register-button-container">
														<button
															id='custom-btn'
															className=" mt-4"
															type="submit"
														>
															{createIsLoading ? <SVGLoader width={"30px"} height={"30px"} color={"#fff"} /> : "Add User"}
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
	);
};

export default RegisterModal;