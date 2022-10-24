import React from "react";
import style from "./Header.module.scss";
import { Search } from "../Search/Search";
import { Menu } from "../Menu/Menu";

export const Header = () => {
	return (
		<header className={`${style.header} wrapper`}>
			<Search />
			<Menu />
		</header>
	)
}
