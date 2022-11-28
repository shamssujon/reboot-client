import React from "react";
import { useLoaderData } from "react-router-dom";
import Categories from "../sections/Categories";
import Products from "../sections/Products";

const ProductsPage = () => {
	const productsData = useLoaderData();
	console.log(productsData);
	return (
		<div>
			<Categories></Categories>
			<Products products={productsData}></Products>
		</div>
	);
};

export default ProductsPage;
