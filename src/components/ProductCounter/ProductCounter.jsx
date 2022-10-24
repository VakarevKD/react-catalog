import React from "react";
import style from "./ProductCounter.module.scss";

export const ProductCounter = () => {
	return (
		<div className={ style.product_count_box} >
			<button className={`${style.count_button} ${style.count_minus}`}></button>
			<input type="number" className={ style.product_count } defaultValue="1" />
			<button className={`${style.count_button} ${style.count_plus}`}></button>
		</div>
	)
}
