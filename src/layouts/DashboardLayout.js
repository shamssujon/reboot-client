import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../sections/DashboardSidebar";
import Footer from "../sections/Footer";
import Header from "../sections/Header";

const DashboardLayout = () => {
	return (
		<div className="flex min-h-screen flex-col justify-between">
			<Header></Header>
			<div className="container grid flex-1 grid-cols-1 lg:grid-cols-[300px,1fr]">
				<DashboardSidebar></DashboardSidebar>
				<div className="py-10 lg:p-10">
					<Outlet></Outlet>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default DashboardLayout;
