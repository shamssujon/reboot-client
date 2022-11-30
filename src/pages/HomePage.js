import React from "react";
import Categories from "../sections/Categories";
import Hero from "../sections/Hero";
import RecentProducts from "../sections/RecentProducts";
import SponsoredProducts from "../sections/SponsoredProducts";

const HomePage = () => {
	return (
		<>
			<Hero></Hero>
            <Categories></Categories>
			<SponsoredProducts></SponsoredProducts>
			<RecentProducts></RecentProducts>
		</>
	);
};

export default HomePage;
