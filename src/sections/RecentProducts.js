import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductCard from "../components/ProductCard";

const RecentProducts = () => {
	// Get all product products
	const { data: products = [] } = useQuery({
		queryKey: ["products"],
		queryFn: async () => {
			const res = await fetch(`${process.env.REACT_APP_SERVER_LIVE_URL}/products?limit=6`);
			const data = await res.json();
			return data;
		},
	});

	return (
		<section className="py-10">
			<div className="container">
				<div className="mb-6">
					<h4 className="text-xl font-bold uppercase">Recent Products</h4>
				</div>
				<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 ">
					{products.map((product) => (
						<ProductCard key={product._id} product={product}></ProductCard>
					))}
				</div>
			</div>
		</section>
	);
};

export default RecentProducts;
