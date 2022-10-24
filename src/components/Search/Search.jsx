import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFilteredProducts } from "../../store/productsSlice";
import axios from "axios";
import { debounce } from "../../modules/debounce";
import style from "./Search.module.scss";

export const Search = () => {
	const [catalog, setCatalog] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		axios
			.get("https://634fa403df22c2af7b55c0ff.mockapi.io/catalog")
			.then((response) => {
				setCatalog(response.data);
			})
			.catch((error) => alert(error));
	}, []);

	const getFiltredCatalog = (products, string) => {
		return products.filter((product) => product.name.toLowerCase().includes(string));
	}

	return (
		<div className={ style.search_box }>
			<input 
				type="search"
				className={ style.search }
				placeholder="Search products"
				onKeyUp={(e) => {
					debounce(dispatch(setFilteredProducts(getFiltredCatalog(catalog, e.target.value))), 3000);
				}}
			/>
			<svg className={ style.search_icon } width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
				<path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#323232"/>
			</svg>
			<span className={ style.search_border }></span>
		</div>
	)
}
