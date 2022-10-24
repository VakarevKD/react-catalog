import React from "react";
import { Link } from "react-router-dom";
import style from "./ProductCard.module.scss";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

export const ProductCard = ({id, name, price, favorite, img}) => {
	return (
		<li className={ style.product }>
			<FavoriteButton page="favorite_button_catalog" favorite={favorite} />
			<Link className={ style.product_link } to={`/product/${id}`}>
				<img className={ style.product_img } src={ img } width="59" height="79" alt="Product" />
				<p className={ style.product_title }>{ name }</p>
				<p className={ style.product_price }>${ price }</p>
			</Link>
		</li>
	)
}
