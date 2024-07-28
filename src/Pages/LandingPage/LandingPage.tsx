
import { useEffect, useMemo, useState } from 'react';
import SideNav from '../../components/SideNav';
import Header from '../../components/Header';
import RegisterModal from '../../components/Modals/RegisterModal';
import { IoIosAddCircleOutline } from "react-icons/io";
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import TableLoader from '../../components/TableLoader';
import { getUsers } from '../../features/User/userSlice';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { VscCloudDownload } from 'react-icons/vsc';
import Search from '../../components/Search';
import { LuListFilter } from "react-icons/lu";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const LandingPage = () => {
	const dispatch = useAppDispatch();
	const { data, isError, isSuccess, message, isLoading } = useAppSelector((state) => state.user);


	console.log('data-data-data', data)

	const [tasksData, setTasksData] = useState([
		{
			id: 1,
			firstname: 'John',
			lastname: 'Doe',
			email: 'johndoe@gmail.com',
			location: 'new york',
			role: 'Administrator',
			bg: 'bg-blue'
		},
		{
			id: 2,
			firstname: 'Grace',
			lastname: 'Wall',
			email: 'gracewall@gmail.com',
			location: 'new jersey',
			role: 'Sales Manager',
			bg: 'bg-green'
		},
		{
			id: 3,
			firstname: 'Daniel',
			lastname: 'Johnson',
			email: 'danieljohnsion@gmail.com',
			location: 'Atlanta',
			role: 'Sales Manager',
			bg: 'bg-green'
		},
		{
			id: 4,
			firstname: 'Erik',
			lastname: 'Moore',
			email: 'erikmoore@yahoo.uk',
			location: 'Georgia',
			role: 'Sales Representative',
			bg: 'bg-yellow'
		},
		{
			id: 5,
			firstname: 'Diana',
			lastname: 'Griffins',
			email: 'dianagriffins@yahoo.com',
			location: 'Canada',
			role: 'Sales Representative',
			bg: 'bg-yellow'
		},
	]);

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);


	const [selectedIds, setSelectedIds] = useState<any>([]);
	const [showTask, setShowTask] = useState(false);
	const [sortConfig, setSortConfig] = useState({ key: 'firstname', direction: 'ascending' });

	const handleCheckboxChange = (id: any, item: any) => {
		if (selectedIds.includes(id)) {
			setSelectedIds(selectedIds.filter((selectedId: any) => selectedId !== id));
		} else {
			setSelectedIds([...selectedIds, id]);
		}
	};

	const handleSelectAllChange = (event: { target: { checked: any; }; }) => {
		if (event.target.checked) {
			const allIds: any = tasksData.map(item => item.id);
			setSelectedIds(allIds);
		} else {
			setSelectedIds([]);
		}
	};

	const isAllSelected = tasksData?.length > 0 && selectedIds.length === tasksData.length;

	const handleSort = (key: string) => {
		let direction = 'ascending';
		if (sortConfig.key === key && sortConfig.direction === 'ascending') {
			direction = 'descending';
		}
		setSortConfig({ key, direction });
	};

	const getSortIconColor = (key: string, direction: string) => {
		if (sortConfig.key === key && sortConfig.direction === direction) {
			return '#334155'; // active color
		}
		return '#94A3B8'; // inactive color
	};

	const sortedData = useMemo<any>(() => {
		if (tasksData?.length === 0 || tasksData?.length === undefined) return [];

		const sorted: any = [...tasksData].sort((a, b) => {
			if (a[sortConfig.key as keyof typeof tasksData[0]] < b[sortConfig.key as keyof typeof tasksData[0]]) {
				return sortConfig.direction === 'ascending' ? -1 : 1;
			}
			if (a[sortConfig.key as keyof typeof tasksData[0]] > b[sortConfig.key as keyof typeof tasksData[0]]) {
				return sortConfig.direction === 'ascending' ? 1 : -1;
			}
			return 0;
		});

		return sorted;
	}, [tasksData, sortConfig]);


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
								<Search />
							</div>
							<button className='md-filter-seach'>
								<LuListFilter size={30} />
								<p className='md-filter-p'>Filter</p>
							</button>
						</div>
						<div className='dashboard-first-icon-boards' onClick={() => setShowTask(true)}>
							<IoIosAddCircleOutline size={18} />
							<span>New User</span>
						</div>
					</div>
					<table>
						<thead>
							<tr>
								<th>
									<div className='faangleup-container'>
										<div className="md-checkbox">
											<input
												type="checkbox"
												checked={isAllSelected}
												onChange={handleSelectAllChange} />
											<label></label>
										</div>
										<h5 onClick={() => handleSort('firstname')}>
											Name
										</h5>
										<div className='faangleup-upanddown'>
											<FaAngleUp className='sort-up' color={getSortIconColor('firstname', 'ascending')} />
											<FaAngleDown className='sort-up' color={getSortIconColor('firstname', 'descending')} />
										</div>
									</div>
								</th>
								<th>
									<div className='faangleup-container'>
										<h5 onClick={() => handleSort('email')}>
											Email Address
										</h5>
										<div className='faangleup-upanddown'>
											<FaAngleUp className='sort-up' color={getSortIconColor('email', 'ascending')} />

											<FaAngleDown className='sort-up' color={getSortIconColor('email', 'descending')} />
										</div>
									</div>
								</th>
								<th>
									<div className='faangleup-container'>
										<h5 onClick={() => handleSort('role')}>
											Role
										</h5>
										<div className='faangleup-upanddown'>
											<FaAngleUp className='sort-up' color={getSortIconColor('role', 'ascending')} />
											<FaAngleDown className='sort-up' color={getSortIconColor('role', 'descending')} />
										</div>
									</div>
								</th>
								<th>
									<div className='faangleup-container'>
										<h5>Actions</h5>
									</div>
								</th>
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
							) : sortedData?.length === 0 ? (
								<tr>
									<td className="table-msg" colSpan={12}>
										<MdOutlineErrorOutline size={75} />
										<p>No Record found!</p>
									</td>
								</tr>
							) : (
								sortedData.map((item: any, i: any) => (
									<tr key={i}>
										<td className="md-checkbox-flex">
											<div className="md-checkbox">
												<input id={`checkbox-${i}`}
													type="checkbox"
													checked={selectedIds.includes(item.id)}
													onChange={() => handleCheckboxChange(item.id, item)} />
												<label htmlFor={`checkbox-${i}`}></label>
											</div>{item.firstname}</td>
										<td>{item.email}</td>
										<td>
											<button className={item.bg}>{item?.role}</button>
										</td>
										<td>
											<div className='de-active-flex'>
												<button className="de-active">
													Edit
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