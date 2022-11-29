import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
	const navList = [
		{ title: "My Orders", path: "/dashboard/myorders" },
		{ title: "Add a Product", path: "/dashboard/addproduct" },
		{ title: "My Products", path: "/dashboard/user_orders" },
		{ title: "My Buyers", path: "/dashboard/user_orders" },
		{ title: "All Buyers", path: "/dashboard/allbuyers" },
		{ title: "All Sellers", path: "/dashboard/allsellers" },
		{ title: "Product Categories", path: "/dashboard/categories" },
		{ title: "Reported Product", path: "/dashboard/reported-products" },
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
