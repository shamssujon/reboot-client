import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useUserRoleChecker from "../hooks/useUserRoleChecker";

const DashboardSidebar = () => {
	const { user } = useContext(AuthContext);
	const [userRole] = useUserRoleChecker(user?.email);

	let navList = [];

	if (userRole === "buyer") {
		navList = [
			{ title: "My Orders", path: "/dashboard/myorders" },
			{ title: "Wishlist", path: "/dashboard/wishlist" },
		];
	} else if (userRole === "seller") {
		navList = [
			{ title: "Add a Product", path: "/dashboard/addproduct" },
			{ title: "My Products", path: "/dashboard/myproducts" },
		];
	} else if (userRole === "admin") {
		navList = [
			{ title: "All Buyers", path: "/dashboard/allbuyers" },
			{ title: "All Sellers", path: "/dashboard/allsellers" },
			{ title: "Product Categories", path: "/dashboard/categories" },
			{ title: "Reported Product", path: "/dashboard/reported-products" },
		];
	}

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
