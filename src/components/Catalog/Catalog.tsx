import { Grid } from "@mui/material"
import { ProductCard } from "../ProductCard/ProductCard"
import { IProduct } from "../../types/IProduct";

interface ProductsProps {
	data: IProduct[]
}

export const Catalog = ({ data }: ProductsProps) => {
	return (
		<Grid
			container
			justifyContent="center"
			columns={6}
			sx={{ gap: 2 }}
		>
			{
				data.map((item) => <ProductCard key={item.id} product={item} />)
			}
		</Grid>
	)
}
