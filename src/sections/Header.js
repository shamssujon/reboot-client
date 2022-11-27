import {
	Avatar,
	Button,
	IconButton,
	Menu,
	MenuHandler,
	MenuItem,
	MenuList,
	MobileNav,
	Navbar,
	Typography,
} from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Header = () => {
	const { user, logout } = useContext(AuthContext);

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

	const handleLogOut = () => {
		logout();
	};

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
					{user ? (
						<Menu
							placement="bottom-end"
							animate={{
								mount: { y: 0 },
								unmount: { y: 5 },
							}}>
							<MenuHandler>
								<button className="grid aspect-square h-10 w-10 cursor-pointer place-content-center overflow-hidden rounded-full border-2 border-blue-300 bg-blue-500 transition hover:border-blue-500 focus:border-blue-500">
									{user?.photoURL ? (
										<Avatar
											src={user?.photoURL}
											alt="avatar"
											variant="circular"
											className="h-full w-full object-cover"
										/>
									) : (
										<p className="text-lg font-bold uppercase text-white">{user?.displayName[0]}</p>
									)}
								</button>
							</MenuHandler>
							<MenuList>
								<MenuItem className="overflow-hidden p-0 transition hover:bg-transparent hover:bg-opacity-100 hover:text-inherit">
									<Link
										to="/dashboard"
										className="block w-full px-3 py-2 text-left text-base text-blue-gray-800 transition hover:bg-blue-gray-50 hover:text-blue-500">
										Dashboard
									</Link>
								</MenuItem>
								<MenuItem className="overflow-hidden p-0 transition hover:bg-transparent hover:bg-opacity-100 hover:text-inherit">
									<button
										onClick={handleLogOut}
										className="block w-full px-3 py-2 text-left text-base text-blue-gray-800 transition hover:bg-blue-gray-50 hover:text-blue-500">
										Log Out
									</button>
								</MenuItem>
							</MenuList>
						</Menu>
					) : (
						<Link to="/signin" className="inline-block">
							<IconButton>
								<BsFillPersonFill className="text-2xl" />
							</IconButton>
						</Link>
					)}

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
				<div className="container">{navigation}</div>
			</MobileNav>
		</Navbar>
	);
};

export default Header;
