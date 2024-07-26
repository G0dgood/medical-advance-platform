import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';


const initialState = {
	data: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',

	createData: [],
	createIsError: false,
	createIsSuccess: false,
	createIsLoading: false,
	createMessage: '',

	deleteData: [],
	deleteIsError: false,
	deleteIsSuccess: false,
	deleteIsLoading: false,
	deleteMessage: '',

	updateData: [],
	updateIsError: false,
	updateIsSuccess: false,
	updateIsLoading: false,
	updateMessage: '',
};

// Get Users
export const getUsers = createAsyncThunk('user/getUsers', async (_, thunkAPI) => {
	try {
		return await userService.getUsers();
	} catch (error: any) {
		const message = (error.response &&
			error.response.data &&
			error.response.data.message) ||
			error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// Create User
export const createUser = createAsyncThunk('user/createUser', async (data, thunkAPI) => {
	try {
		return await userService.createUser(data);
	} catch (error: any) {
		const message = (error.response &&
			error.response.data &&
			error.response.data.message) ||
			error.response.data.errors[0].message || error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// Delete User
export const deleteUser = createAsyncThunk('user/deleteUser', async (id, thunkAPI) => {
	try {
		return await userService.deleteUser(id);
	} catch (error: any) {
		const message = (error.response &&
			error.response.data &&
			error.response.data.message) ||
			error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// Update User
export const updateUser = createAsyncThunk('user/updateUser', async (data, thunkAPI) => {
	try {
		return await userService.updateUser(data);
	} catch (error: any) {
		const message = (error.response &&
			error.response.data &&
			error.response.data.message) ||
			error.message || error.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isSuccess = false;
			state.isError = false;
			state.message = '';

			state.createIsLoading = false;
			state.createIsSuccess = false;
			state.createIsError = false;
			state.createMessage = '';

			state.deleteIsLoading = false;
			state.deleteIsSuccess = false;
			state.deleteIsError = false;
			state.deleteMessage = '';

			state.updateIsLoading = false;
			state.updateIsSuccess = false;
			state.updateIsError = false;
			state.updateMessage = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUsers.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getUsers.fulfilled, (state: any, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.data = action.payload?.data;
			})
			.addCase(getUsers.rejected, (state: any, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.data = null;
			})
			.addCase(createUser.pending, (state) => {
				state.createIsLoading = true;
			})
			.addCase(createUser.fulfilled, (state: any, action) => {
				state.createIsLoading = false;
				state.createIsSuccess = true;
				state.createData = action.payload?.data;
			})
			.addCase(createUser.rejected, (state: any, action) => {
				state.createIsLoading = false;
				state.createIsError = true;
				state.createMessage = action.payload;
				state.createData = null;
			})
			.addCase(deleteUser.pending, (state) => {
				state.deleteIsLoading = true;
			})
			.addCase(deleteUser.fulfilled, (state: any, action) => {
				state.deleteIsLoading = false;
				state.deleteIsSuccess = true;
				state.deleteData = action.payload?.data;
			})
			.addCase(deleteUser.rejected, (state: any, action) => {
				state.deleteIsLoading = false;
				state.deleteIsError = true;
				state.deleteMessage = action.payload;
				state.deleteData = null;
			})
			.addCase(updateUser.pending, (state) => {
				state.updateIsLoading = true;
			})
			.addCase(updateUser.fulfilled, (state: any, action) => {
				state.updateIsLoading = false;
				state.updateIsSuccess = true;
				state.updateData = action.payload?.data;
			})
			.addCase(updateUser.rejected, (state: any, action) => {
				state.updateIsLoading = false;
				state.updateIsError = true;
				state.updateMessage = action.payload;
				state.updateData = null;
			});
	},
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
