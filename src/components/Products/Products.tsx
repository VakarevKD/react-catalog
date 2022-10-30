import React from "react";
import { IProduct } from "../../models/models";
import { ProductCard } from "../ProductCard/ProductCard";
import style from "./Products.module.scss";

interface ProductsProps {
	data: IProduct[]
}

export const Products = ({ data }: ProductsProps) => {

	return (
		<ul className={ style.products }>
			{
				data.map((item) => <ProductCard key={item.id} product={item} />)
			}
		</ul>
	)
}