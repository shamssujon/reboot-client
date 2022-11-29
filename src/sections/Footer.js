import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { IconButton } from "@material-tailwind/react";

const Footer = () => {
	// Get all product categories
	const { data: footerCategories = [] } = useQuery({
		queryKey: ["footerCategories"],
		queryFn: async () => {
			const res = await fetch(`${process.env.REACT_APP_SERVER_LIVE_URL}/categories?limit=4`);
			const data = await res.json();
			return data;
		},
	});

	return (
		<footer className="bg-slate-800 text-center text-white lg:text-left">
			<div className="container py-10 text-center md:text-left">
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					<div className="">
						<h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
							Reboot
						</h6>
						<p>
							Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
							amet, consectetur adipisicing elit.
						</p>
					</div>
					<div className="">
						<h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
							Categories
						</h6>
						<ul className="grid gap-1">
							{footerCategories.map((category) => (
								<li key={category._id} className="-mx-1">
									<Link to={`/products/${category.slug}`} className="inline-block p-1">
										{category.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="">
						<h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
							Useful links
						</h6>
						<ul className="grid gap-1">
							<li className="-mx-1">
								<Link to="/blog" className="inline-block p-1">
									Blog
								</Link>
							</li>
							<li className="-mx-1">
								<Link to="/" className="inline-block p-1">
									About us
								</Link>
							</li>
							<li className="-mx-1">
								<Link to="/" className="inline-block p-1">
									Contact
								</Link>
							</li>
							<li className="-mx-1">
								<Link to="/" className="inline-block p-1">
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>
					<div className="">
						<h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Follow Us</h6>
						<ul className="-ml-2 flex flex-wrap items-center text-xl">
							<li>
								<Link>
									<IconButton variant="text" className="text-xl text-white">
										<BsFacebook />
									</IconButton>
								</Link>
							</li>
							<li>
								<Link>
									<IconButton variant="text" className="text-xl text-white">
										<BsTwitter />
									</IconButton>
								</Link>
							</li>
							<li>
								<Link>
									<IconButton variant="text" className="text-xl text-white">
										<BsLinkedin />
									</IconButton>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="border-t border-slate-700 bg-slate-900 p-6 text-center">
				<span>Copyright © 2022, Reboot, All Rights Reserved</span>
			</div>
		</footer>
	);
};

export default Footer;
