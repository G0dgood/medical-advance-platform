
import { useState } from 'react';
import SideNav from '../../components/SideNav';
import Header from '../../components/Header';
// import EditRegisteredUserModal from '../../components/Modals/EditRegisteredUserModal';
import { FiPlus } from "react-icons/fi";
// import CreateTask from '../../components/Modals/CreateTask';
import RegisterModal from '../../components/Modals/RegisterModal';
import { IoIosAddCircleOutline } from "react-icons/io";




const LandingPage = () => {

	const [showTask, setShowTask] = useState(false);
	const [showEditUser, setShowEditUser] = useState(false)
	const [tasksData, setTasksData] = useState([
		{
			id: 1,
			firstname: 'John',
			lastname: 'Doe',
			email: 'johndoe@gmail.com',
			location: 'new york',
			role: 'Administrator'
		},
		{
			id: 2,
			firstname: 'Grace',
			lastname: 'Wall',
			email: 'gracewall@gmail.com',
			location: 'new jersey',
			role: 'Sales Manager'
		},
		{
			id: 3,
			firstname: 'Daniel',
			lastname: 'Johnson',
			email: 'danieljohnsion@gmail.com',
			location: 'Atlanta',
			role: 'Sales Manager'
		},
		{
			id: 4,
			firstname: 'Erik',
			lastname: 'Moore',
			email: 'erikmoore@yahoo.uk',
			location: 'Georgia',
			role: 'Sales Representative'
		},
		{
			id: 5,
			firstname: 'Diana',
			lastname: 'Griffins',
			email: 'dianagriffins@yahoo.com',
			location: 'Canada',
			role: 'Sales Representative'
		},
	]);


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





	return (
		<div id="page-wrapper">
			<SideNav />
			<Header pageTitle={"Register"} />
			<RegisterModal showTask={showTask} setShowTask={setShowTask} />

			<main >
				<div className='dashboard-first-card-boards mb-2 mt-2'>
					<div>
						<p className='dashboard-first-card-h'>Settings / General Settings</p>
						<div>
							<h5 className='dashboard-first-card-h'>Users & Roles</h5>
							<p className='dashboard-first-card-p'>Manage all users in your business</p>
						</div>
					</div>

				</div>
				<div className='table-container'>
					{/* {isLoadingAll ? <TableLoader isLoading={isLoadingAll} /> : ""} */}
					<div className='search-container-flex'>
						<div className='search-container'>
							<input type="text" placeholder="Search..." />
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
							{tasksData?.map((item: any, i: any) => (
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
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<footer className="main-table-footer">
					{/* <Pagination
						setDisplayData={setDisplayData}
						data={realData}
						entriesPerPage={entriesPerPage}
						Total={"Registered User"}
					/> */}
				</footer>
			</main>
		</div>
	)
}

export default LandingPage