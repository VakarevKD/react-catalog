import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosProducts = createAsyncThunk(
	"products/axiosProducts",
	async function() {
		const response = await axios.get("https://634fa403df22c2af7b55c0ff.mockapi.io/catalog");
		return response.data;
	}
);

export const productsSlice = createSlice({
	name: "products",
	initialState: {
		products: [],
	},
	reducers: {
		setFilteredProducts: (state, action) => {
			state.products = action.payload;
		}
	},
	extraReducers: {
		[axiosProducts.fulfilled]: (state, action) => {
			state.products = action.payload;
		}
	}
});

export const { setFilteredProducts } = productsSlice.actions;
export default productsSlice.reducer;
