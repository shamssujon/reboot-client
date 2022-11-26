import React from "react";
import bannerImg from "../assets/images/pc-accessories.png";
import bannerBg from "../assets/images/banner-bg.png";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const Hero = () => {
	return (
		<section className="relative py-10 text-white">
			<img src={bannerBg} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover md:hidden" />
			<div className="container">
				<div className="relative grid items-center gap-10 overflow-hidden md:rounded-3xl md:p-16 lg:grid-cols-2">
					<img
						src={bannerBg}
						alt=""
						className="absolute inset-0 -z-10 hidden h-full w-full object-cover md:block"
					/>
					<div className="">
						<h2 className="mb-4 text-4xl font-bold md:text-6xl lg:leading-[1.1]">
							Largest pre-owned computer market
						</h2>
						<p className="mb-8 text-lg">
							Reboot is the most popular and largest marketplace for buying and selling pre-owned
							computer, parts and accessories. Discover what you need and sell all sorts of computer
							products in our simple yet powerful platform. Start buying and selling today!{" "}
						</p>
						<Link to="/products">
							<Button variant="filled" size="lg" className="text-lg font-normal tracking-wide">
								Browse Products
							</Button>
						</Link>
					</div>
					<div>
						<img src={bannerImg} alt="" className="mx-auto block h-auto max-w-full" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
