import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/IProduct";

interface ProductsState {
	products: IProduct[]
}

const initialState: ProductsState = {
	products: []
}

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		getProducts(state, action: PayloadAction<IProduct[]>) {
			state.products = action.payload
		},
		filterProducts(state, action: PayloadAction<IProduct[]>) {
			state.products = action.payload
		}
	}
});

export default productsSlice.reducer;
export const { filterProducts } = productsSlice.actions;
