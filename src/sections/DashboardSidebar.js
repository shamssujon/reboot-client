import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
	const navList = [
		{ title: "All Buyers", path: "/dashboard/allbuyers" },
		{ title: "All Sellers", path: "/allbuyers" },
		{ title: "Product Categories", path: "/allbuyers" },
		{ title: "Reported Product", path: "/allbuyers" },
	];
	return (
		<div className="bg-white py-6">
			<nav className="grid pl-3">
				{navList.map((item, index) => (
					<NavLink
						key={index}
						className={({ isActive }) =>
							`block w-full select-none rounded-l-md bg-transparent px-3 py-2 text-left text-base font-normal transition  ${
								isActive
									? "bg-slate-50 text-blue-500"
									: "text-blue-gray-800 hover:bg-slate-50 hover:text-blue-500"
							}`
						}
						to={item.path}>
						{item.title}
					</NavLink>
				))}
			</nav>
		</div>
	);
};

export default DashboardSidebar;
