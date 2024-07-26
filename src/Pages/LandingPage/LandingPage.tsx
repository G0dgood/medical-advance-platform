
import { useEffect, useState } from 'react';
import SideNav from '../../components/SideNav';
import Header from '../../components/Header';
import RegisterModal from '../../components/Modals/RegisterModal';
import { IoIosAddCircleOutline } from "react-icons/io";
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import TableLoader from '../../components/TableLoader';
import { getUsers } from '../../features/User/userSlice';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { TableFetch } from '../../components/TableOptions';
import SearchInput from '../../components/SearchInput';
import { VscCloudDownload } from 'react-icons/vsc';




const LandingPage = () => {
	const dispatch = useAppDispatch();
	const { data, isError, isSuccess, message, isLoading } = useAppSelector((state) => state.user);
	const [showTask, setShowTask] = useState(false);
	const [showEditUser, setShowEditUser] = useState(false)


	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);



	const [selectedIds, setSelectedIds] = useState<string[]>([]); // State to hold selected IDs
	const [selectedItems, setSelectedItems] = useState<any[]>([]); // State to hold selected items
	const [displayData, setDisplayData] = useState([]);
	const handleCheckboxChange = (itemId: string, item: any) => {

		// Check if the item's ID is already selected
		if (selectedIds.includes(itemId)) {
			// Remove the ID from the selectedIds array
			setSelectedIds(selectedIds.filter((id) => id !== itemId));
			setSelectedItems((prevSelectedItems) => prevSelectedItems.filter((i) => i.id !== itemId));
		} else {
			// Add the ID to the selectedIds array
			setSelectedIds([...selectedIds, itemId]);
			setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
		}
	};


	console.log('data-data-data', data)

	// const [tasksData, setTasksData] = useState([
	// 	{
	// 		id: 1,
	// 		firstname: 'John',
	// 		lastname: 'Doe',
	// 		email: 'johndoe@gmail.com',
	// 		location: 'new york',
	// 		role: 'Administrator'
	// 	},
	// 	{
	// 		id: 2,
	// 		firstname: 'Grace',
	// 		lastname: 'Wall',
	// 		email: 'gracewall@gmail.com',
	// 		location: 'new jersey',
	// 		role: 'Sales Manager'
	// 	},
	// 	{
	// 		id: 3,
	// 		firstname: 'Daniel',
	// 		lastname: 'Johnson',
	// 		email: 'danieljohnsion@gmail.com',
	// 		location: 'Atlanta',
	// 		role: 'Sales Manager'
	// 	},
	// 	{
	// 		id: 4,
	// 		firstname: 'Erik',
	// 		lastname: 'Moore',
	// 		email: 'erikmoore@yahoo.uk',
	// 		location: 'Georgia',
	// 		role: 'Sales Representative'
	// 	},
	// 	{
	// 		id: 5,
	// 		firstname: 'Diana',
	// 		lastname: 'Griffins',
	// 		email: 'dianagriffins@yahoo.com',
	// 		location: 'Canada',
	// 		role: 'Sales Representative'
	// 	},
	// ]);


	return (
		<div id="page-wrapper">
			<SideNav />
			<Header />
			<RegisterModal showTask={showTask} setShowTask={setShowTask} />

			<main >
				<div className='dashboard-first-card-boards mb-2 mt-2'>
					<div className='dashboard-first-card-container'>
						<p className='dashboard-first-card-h'>Settings / General Settings</p>
						<div>
							<h5 className='dashboard-first-card-h5'>Users & Roles</h5>
							<p className='dashboard-first-card-p'>Manage all users in your business</p>
						</div>
					</div>

				</div>
				<div className='dashboard-first-card-btn-container'>
					<button id='dashboard-first-card-btn1'>Users</button>
					<button id='dashboard-first-card-btn2'>Roles</button>
				</div>
				<div className='table-container'>
					{isLoading ? <TableLoader isLoading={isLoading} /> : ""}
					<div className='search-container-flex'>
						<div className='search-container'>
							<div className="header-icon-container-flex">
								<div className="header-icon-container">

								</div>
								<SearchInput />
							</div>

							<button>Search</button>
						</div>
						<div className='dashboard-first-icon-boards' onClick={() => setShowTask(true)}>
							<IoIosAddCircleOutline size={18} /> <span>New User</span>
						</div>
					</div>
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Email Address</th>
								<th>Role</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody className="data-table-content">
							{isLoading ? (
								<tr>
									<td className="table-msg" colSpan={12}>
										<VscCloudDownload size={75} />
										<p className="mt-3">Fetching request...</p>
									</td>
								</tr>
							) : displayData?.length === 0 ||
								displayData?.length === undefined ? (
								<tr>
									<td className="table-msg" colSpan={12}>
										<MdOutlineErrorOutline size={75} />
										<p>No Record found!</p>
									</td>
								</tr>
							) : (
								data?.map((item: any, i: any) => (
									<tr key={i}>
										<td className="md-checkbox-flex"><div className="md-checkbox">
											<input id={i}
												type="checkbox"
												checked={selectedIds?.includes(item?.id)}
												onChange={() => handleCheckboxChange(item?.id, item)} />
											<label htmlFor={i}>
											</label>
										</div>{item.firstname}</td>
										<td >{item.email}</td>
										<td >{item?.role}</td>
										<td >
											<div className='de-active-flex'>
												<button className={"de-active"}>
													{item.actions === true ? "Active" : "Edit"}
												</button>
												<h5 className="de-active-h5">Remove</h5>
											</div>

										</td>
									</tr>)
								))}
						</tbody>
					</table>
				</div>
			</main>
		</div>
	)
}

export default LandingPage