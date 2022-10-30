import { AppDispatch } from "../index";
import axios from "../../axios"
import { productsSlice } from "../slices/productsSlice";

export const fetchProducts = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(productsSlice.actions.fetching());
			const response = await axios.get("catalog");
			dispatch(productsSlice.actions.fetchSuccess(
				response.data
			));
		} catch (e) {
			dispatch(productsSlice.actions.fetchError(e as Error))
		}
	}
}
