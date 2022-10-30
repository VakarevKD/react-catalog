import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import { IProduct } from "../../models/models";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { ProductCounter } from "../ProductCounter/ProductCounter";
import style from "./Detailed.module.scss";

export const Detailed = () => {
	const { id } = useParams();
	const [product, setProduct] = useState<IProduct | null>(null);

	async function getProduct() {
		const response = await axios.get<IProduct>(`catalog/${id}`);
		setProduct(response.data);
	}

	useEffect(() => {
		getProduct();
	}, [])

	return (
		<main className={ `${style.detailed } wrapper`}>
			<div className={ style.detailed__img }>
				<img src={ product?.img_detailed } width="150" height="200" alt="Product" />
			</div>
			<div className={ style.product }>
				<p className={ style.product__title }>{ product?.name }</p>
				<p className={ style.product__description }>{ product?.description }</p>
				<p className={ style.product__details_title }>Details</p>
				<p className={ style.product__details }>{ product?.details }</p>
				<div className={ style.product__add }>
					<span className={ style.product__price }>${ product?.price }</span>
					<ProductCounter />
					<button className={ style.product__add_button }>Add to cart</button>
					<FavoriteButton favorite={ product?.favorite } />
				</div>
			</div>
		</main>
	)
}
