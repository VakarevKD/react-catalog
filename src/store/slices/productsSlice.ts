import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProduct } from "../../models/models"

interface ProductsState {
	loading: boolean,
	error: string,
	products: IProduct[]
}

const initialState: ProductsState = {
	loading: false,
	error: '',
	products: []
}

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		fetching(state) {
			state.loading = true
		},
		fetchSuccess(state, action: PayloadAction<IProduct[]>) {
			state.loading = false
			state.products = action.payload
		},
		fetchError(state, action: PayloadAction<Error>) {
			state.loading = false
			state.error = action.payload.message
		},
		filterProducts(state, action: PayloadAction<IProduct[]>) {
			state.products = action.payload
		}
	}
});

export const { filterProducts } = productsSlice.actions;
export default productsSlice.reducer
