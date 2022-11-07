import { IProduct } from "../../types/IProduct";
import { AppDispatch } from "../index";
import { productsSlice } from "../slices/productsSlice";
import axios from "axios";

export const filterProducts = (string: string) => {
	return async (dispatch: AppDispatch) => {
		const response = await axios.get("https://634fa403df22c2af7b55c0ff.mockapi.io/catalog");
		const products = response.data;
		const filteredProducts = products.filter((product: IProduct) => {
			return product.name.toLowerCase().includes(string.toLowerCase());
		});
		dispatch(productsSlice.actions.getProducts(filteredProducts));
	}
}
