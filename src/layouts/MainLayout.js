import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

const MainLayout = () => {
	return (
		<div className="flex min-h-screen flex-col justify-between">
			<Navbar></Navbar>
			<div className="flex-1">
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default MainLayout;
