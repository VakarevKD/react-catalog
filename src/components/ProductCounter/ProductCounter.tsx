import { useState } from "react";
import style from "./ProductCounter.module.scss";

export const ProductCounter = () => {
	const [value, setValue] = useState('1');

	const decrementValue = (value: any) => {
		if (value > 1) value--;
		setValue(value);
	}
	const incrementValue = (value: any) => {
		value++;
		setValue(value);
	}

	return (
		<div className={ style.counter} >
			<button onClick={(event: any) => decrementValue(value)}/>
			<input 
				type="number"	
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button onClick={(event: any) => incrementValue(value)}/>
		</div>
	)
}
