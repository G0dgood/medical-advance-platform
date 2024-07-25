
import axios from 'axios';

const getTask = async () => {
	const { data }: any = await axios.get('/api/v1/task');
	return data
}

const createTask = async (input: any) => {
	const { data }: any = await axios.post(`/api/v1/task`, input)
	return data
}

const viewTask = async (id: any) => {
	const { data }: any = await axios.get(`tasks/${id}`)
	return data
}

const deleteTask = async (id: any) => {
	const { data }: any = await axios.delete(`tasks/${id}`)
	return data
}
const updateTask = async (value: any) => {
	const { id, input } = value
	const { data }: any = await axios.patch(`/api/v1/assigned-task/${id}/status`, input)
	return data
}
const adminUpdateTask = async (value: any) => {
	const { id, input } = value
	const { data }: any = await axios.patch(`/api/v1/task/${id}`, input)
	return data
}
const noteTask = async (input: any) => {
	const { id, inputs } = input
	const { data }: any = await axios.patch(`tasks/${id}/notes`, inputs)
	return data
}





const taskService = {
	getTask,
	createTask,
	viewTask,
	deleteTask,
	updateTask,
	noteTask,
	adminUpdateTask
}

export default taskService