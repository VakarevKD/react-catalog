import React from "react";
import { Link } from "react-router-dom";
import style from "./ProductCard.module.scss";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { IProduct } from "../../models/models";

interface ProductProps {
	product: IProduct
}

export const ProductCard = ({ product }: ProductProps) => {
	return (
		<li className={ style.product }>
			<FavoriteButton favorite={ product.favorite } />
			<Link className={ style.product__link } to={ `product/${product.id}` }>
				<img className={ style.product__img } src={ product.img } width="59" height="79" alt={ product.name } />
				<p className={ style.product__title }>{ product.name }</p>
				<p className={ style.product__price }>${ product.price }</p>
			</Link>
		</li>
	)
}
