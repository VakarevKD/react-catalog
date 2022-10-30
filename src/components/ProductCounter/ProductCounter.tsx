import React from "react";
import style from "./ProductCounter.module.scss";

export const ProductCounter = () => {
	return (
		<div className={ style.count} >
			<button 
				className={`${style.count__button} ${style.count__minus}`}
			/>
			<input type="number" className={ style.count__value } defaultValue="1" />
			<button 
				className={`${style.count__button} ${style.count__plus}`}
			/>
		</div>
	)
}