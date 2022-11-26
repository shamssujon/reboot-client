import React from "react";
import Categories from "../sections/Categories";
import Hero from "../sections/Hero";
import RecentProducts from "../sections/RecentProducts";

const HomePage = () => {
	return (
		<>
			<Hero></Hero>
            <Categories></Categories>
			<RecentProducts></RecentProducts>
		</>
	);
};

export default HomePage;
