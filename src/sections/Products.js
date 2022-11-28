import React from "react";
import ProductCard from "../components/ProductCard";

const Products = ({products}) => {
	return (
		<section className="py-10">
			<div className="container">
				<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 ">
					{products.map((product) => (
						<ProductCard key={product._id} product={product}></ProductCard>
					))}
				</div>
			</div>
		</section>
	);
};

export default Products;
