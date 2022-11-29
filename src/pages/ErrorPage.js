import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { BsArrowLeft } from "react-icons/bs";

const ErrorPage = () => {
	return (
		<section className="bg-white pb-20 pt-1">
			<div className="container text-center">
				<div className="min-h-[300px]">
					<Player
						autoplay
						loop
						speed="1"
						src="https://assets1.lottiefiles.com/packages/lf20_6nmazhqu.json"
						className="h-auto max-w-[450px]">
						<Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
					</Player>
				</div>
				<div className="relative -mt-10">
					<p className="mb-6 text-2xl">The content you have requested is not found here</p>
					<Link to="/">
						<Button className="group inline-flex items-center justify-center gap-2 text-base font-normal tracking-wide">
							<BsArrowLeft className="h-6 w-6 transition group-hover:-translate-x-1" />
							<span>Go back to homepage</span>
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;
