import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../sections/DashboardSidebar";
import Footer from "../sections/Footer";
import Header from "../sections/Header";

const DashboardLayout = () => {
	return (
		<div className="flex min-h-screen flex-col justify-between">
			<Header></Header>
			<div className="flex-1 grid grid-cols-[300px,1fr] container">
				<DashboardSidebar></DashboardSidebar>
				<div className="p-10">
				<Outlet></Outlet>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default DashboardLayout;
