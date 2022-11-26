import React, { useEffect, useState } from "react";
import { Navbar, MobileNav, Typography, Button, IconButton } from "@material-tailwind/react";
import { BsFillPersonFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
	}, []);

	const navItems = [
		{ title: "Home", path: "/" },
		{ title: "Products", path: "/products" },
		{ title: "About", path: "/about" },
		{ title: "Contact", path: "/contact" },
	];

	const navigation = (
		<ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			{navItems.map((navItem, index) => (
				<Typography key={index} as="li" className="font-normal uppercase text-blue-gray-800">
					<NavLink
						to={navItem.path}
						className={({ isActive }) =>
							`${isActive ? "text-light-blue-800" : "text-blue-gray-800 hover:text-light-blue-800"} p-2`
						}>
						{navItem.title}
					</NavLink>
				</Typography>
			))}
		</ul>
	);

	return (
		<Navbar className="max-w-full rounded-none py-2 px-0 shadow-sm lg:px-8 lg:py-4 ">
			<div className="container flex items-center justify-between text-blue-gray-900">
				<Link to="/" className="inline-block text-xl font-bold uppercase">
					Reboot
				</Link>
				<div className="hidden lg:block">{navigation}</div>
				<div className="flex items-center gap-4">
					<Link to="/signin" className="inline-block">
						<IconButton>
							<BsFillPersonFill className="text-2xl" />
						</IconButton>
					</Link>
					<IconButton
						variant="text"
						className="ml-auto h-8 w-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
						ripple={false}
						onClick={() => setOpenNav(!openNav)}>
						{openNav ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								className="h-8 w-8"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						)}
					</IconButton>
				</div>
			</div>
			<MobileNav open={openNav}>
				<div className="container">
					{navigation}
				</div>
			</MobileNav>
		</Navbar>
	);
};

export default Header;
