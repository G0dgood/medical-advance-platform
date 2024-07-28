import axios from 'axios';
import { apiBaseUrl } from '../../shared/baseUrl';




// Create User
const createUser = async (input: any) => {
	const { data }: any = await axios.post(`${apiBaseUrl}/users`, input);
	return data;
};

// Read Users
const getUsers = async () => {
	const { data }: any = await axios.get(`${apiBaseUrl}/users`);
	console.log("{{{{{{}}}}}}}", data)
	return data;
};

// Update User
const updateUser = async (value: any) => {
	const { id, input } = value;
	const { data }: any = await axios.put(`${apiBaseUrl}/users/${id}`, input);
	return data;
};

// Delete User
const deleteUser = async (id: any) => {
	const { data }: any = await axios.delete(`${apiBaseUrl}/users/${id}`);
	return data;
};

const userService = {
	createUser,
	getUsers,
	updateUser,
	deleteUser,
};

export default userService;