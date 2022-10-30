import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "../axios";
import { ChangeEvent, useState} from "react";
import { IProduct } from "../models/models";
import { filterProducts } from "../store/slices/productsSlice";

interface InputReturn {
	value: string,
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function useInput(initialValue = ''): InputReturn {
	const [value, setValue] = useState(initialValue);
	const [products, setProducts] = useState<IProduct[]>([])
	const dispatch = useDispatch();

	const getFiltredProducts = (products: IProduct[], value: string) => {
		return products.filter((product: IProduct) => product.name.toLowerCase().includes(value));
	}

	async function searchProducts() {
		const response = await axios.get("catalog");
		setProducts(response.data);
	}

	useEffect(() => {
		searchProducts();
	}, [])

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
		dispatch(filterProducts(getFiltredProducts(products, event.target.value)))
	}

	return {
		value,
		onChange
	}
}
