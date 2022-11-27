import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<section className="py-20">
			<div className="container text-center">
				<h1 className="text-6xl font-bold leading-none mb-2">404</h1>
				<p className="text-2xl">This page does not exist</p>
				<Link to="/" className="inline-block mt-5">
					<Button className="font-normal text-base tracking-wide">Go back to homepage</Button>
				</Link>
			</div>
		</section>
	);
};

export default ErrorPage;
