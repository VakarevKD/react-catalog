import axios from "axios";
import { AppDispatch } from "../index";
import { productsSlice } from "../slices/productsSlice";

export const getProducts = () => {
	return async (dispatch: AppDispatch) => {
		try {
			const response = await axios.get("https://634fa403df22c2af7b55c0ff.mockapi.io/catalog");
			dispatch(productsSlice.actions.getProducts(
				response.data
			));
		} catch (e) {
			alert(e);
		}
	}
}