import { useQuery } from "@tanstack/react-query";
import React from "react";
import Categories from "../sections/Categories";
import Hero from "../sections/Hero";
import RecentProducts from "../sections/RecentProducts";
import SponsoredProducts from "../sections/SponsoredProducts";
import PageSpinner from "./../components/PageSpinner";

const HomePage = () => {
	const {
		data: sposoredProducts = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["sposoredProducts"],
		queryFn: async () => {
			const res = await fetch(`${process.env.REACT_APP_SERVER_LIVE_URL}/products?sponsored=true`);
			const data = await res.json();
			console.log(data);
			return data;
		},
	});

	if (isLoading) {
		return <PageSpinner></PageSpinner>;
	}

	return (
		<>
			<Hero></Hero>
			<Categories></Categories>
			{sposoredProducts.length > 0 && <SponsoredProducts sposoredProducts={sposoredProducts}></SponsoredProducts>}
			<RecentProducts></RecentProducts>
		</>
	);
};

export default HomePage;
