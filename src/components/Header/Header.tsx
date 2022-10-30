import React from "react";
import style from "./Header.module.scss";
import { Search } from "../Search/Search";
import { Menu } from "../Menu/Menu";

interface HeaderProps {
	page: string
}

export const Header = ({ page }: HeaderProps) => {
	return (
		<header className={`${style.header} wrapper`}>
			<Search page={ page } />
			<Menu />
		</header>
	)
}