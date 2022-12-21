import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { IProduct } from "../../types/IProduct";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { ProductCounter } from "../ProductCounter/ProductCounter";
import style from "./Detailed.module.scss";

export const Detailed = () => {
	const { id } = useParams();
	const [product, setProduct] = useState<IProduct | null>(null);

	async function getProduct() {
		const response = await axios.get<IProduct>(`https://634fa403df22c2af7b55c0ff.mockapi.io/catalog/${id}`);
		setProduct(response.data);
	}

	useEffect(() => {
		getProduct();
	}, [])

	return (
		<div className={ style.detailed }>
			<div className={ style.detailed__img }>
				<img src={ product?.img_detailed } width="150" height="200" alt={ product?.name } />
			</div>
			<div className={ style.product }>
				<Typography sx={{ marginBottom: "1.6rem", fontSize: "2.4rem", fontWeight: 700, lineHeight: "2.8rem" }}>
					{ product?.name }
				</Typography>
				<p>{ product?.description }</p>
				<Typography sx={{ marginBottom: "1.6rem", fontSize: "1.8rem", fontWeight: 700, lineHeight: "2.1rem" }}>
					Details
				</Typography>
				<p>{ product?.details }</p>
				<div>
					<span>${ product?.price }</span>
					<ProductCounter />
					<button className={ style.product__add }>Add to cart</button>
					<FavoriteButton favorite={ product?.favorite } />
				</div>
			</div>
		</div>
	)
}
