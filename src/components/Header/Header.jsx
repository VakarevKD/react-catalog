import { Grid } from "@mui/material";
import { Menu } from "../Menu/Menu";
import { Search } from "../Search/Search";
import style from "./Header.module.scss";

export const Header = () => {
	return (
		<header className={ `${style.header} wrapper` }>
			<Grid
				container
				justifyContent="space-between"
				alignItems="center"
			>
				<Search />
				<Menu />
			</Grid>
		</header>
	)
}
