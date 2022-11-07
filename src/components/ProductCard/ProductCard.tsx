import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { IProduct } from "../../types/IProduct";
import style from "./ProductCard.module.scss";

interface ProductProps {
	product: IProduct
}

export const ProductCard = ({ product }: ProductProps) => {
	return (
		<Paper
			className={style.product}
			sx={{ width: 220, height: 272 }}
			elevation={0}
		>
			<FavoriteButton favorite={ product.favorite } />
			<Link to={ `product/${ product.id }` }>
				<img src={ product.img } alt={ product.name } width="59" height="79" />
				<p>{ product.name }</p>
				<p>${ product.price }</p>
			</Link>
		</Paper>
	)
}
