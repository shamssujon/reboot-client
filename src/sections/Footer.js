import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-blue-gray-50 text-center lg:text-left">
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
							<li className="-mx-1">
								<Link to="/" className="inline-block p-1">
									Category 1
								</Link>
							</li>
							<li className="-mx-1">
								<Link to="/" className="inline-block p-1">
									Category 2
								</Link>
							</li>
							<li className="-mx-1">
								<Link to="/" className="inline-block p-1">
									Category 3
								</Link>
							</li>
						</ul>
					</div>
					<div className="">
						<h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
							Useful links
						</h6>
						<ul className="grid gap-1">
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
					</div>
				</div>
			</div>
			<div className="border-t border-blue-gray-100 bg-blue-gray-50 p-6 text-center">
				<span>Copyright © 2022, Reboot, All Rights Reserved</span>
			</div>
		</footer>
	);
};

export default Footer;
