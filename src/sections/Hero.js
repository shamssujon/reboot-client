import React from "react";
import bannerImg from "../assets/images/pc-accessories.png";
import bannerBg from "../assets/images/banner-bg.png";

const Hero = () => {
	return (
		<section className="relative py-10 text-white lg:py-20">
			<img src={bannerBg} alt="" className="absolute inset-0 h-full w-full object-cover -z-10" />
			<div className="container">
				<div className="grid items-center gap-10 lg:grid-cols-2">
					<div className="">
						<h2 className="mb-4 text-4xl font-bold lg:text-5xl lg:leading-[1.1]">
							Largest pre-owned PC accessories market
						</h2>
						<p className="text-lg">
							Reboot is the most popular and largest marketplace for buying and selling pre-owned
							computer, parts and accessories. Discover what you need and sell all sorts of computer
							products in our simple yet powerful platform. Start buying and selling today!{" "}
						</p>
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
