import { Breadcrumbs, Button, Typography } from "@material-tailwind/react";
import React from "react";
import { BsClockHistory, BsGeoAlt, BsPerson } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const ProductDetailsPage = () => {
	const productData = useLoaderData();
	console.log(productData);
	const { title, category, image, price, condition, usedFor, postingDate, description, seller } = productData;

	return (
		<section className="py-10 lg:py-20">
			<div className="container">
				<Breadcrumbs className="mb-6 border border-slate-300 bg-slate-200">
					<Link to={"/"} className="uppercase opacity-60">
						Home
					</Link>
					<Link to={"/products"} className="uppercase opacity-60">
						Products
					</Link>
					<Link to={`/products/${category}`} className="uppercase">
						{category}
					</Link>
				</Breadcrumbs>
				<div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
					<div className="image aspect-4/3 overflow-hidden lg:col-span-7">
						<img src={image} alt="" className="block h-full w-full object-cover rounded-lg" />
					</div>
					<div className="lg:col-span-5">
						<div className="mb-2 flex flex-wrap items-center justify-between gap-4">
							<p className="flex items-center gap-1">
								<BsGeoAlt />
								<span>{seller.location}</span>
							</p>
							<p className="flex items-center gap-1">
								<BsClockHistory />
								<span>{postingDate.split("T")[0]}</span>
							</p>
						</div>
						<Typography variant="h4" className="mb-2">
							{title}
						</Typography>
						<p className="mb-4 flex items-center gap-1">
							<BsPerson />
							<span className="capitalize">{seller.name}</span>
						</p>
						<div className="mb-4">
							<p className="mb-4 text-lg">{description}</p>
							<ul className="grid gap-2">
								<li className="flex items-center gap-2">
									<span className="min-w-[80px] font-normal">Condition:</span>
									<span>{condition}</span>
								</li>
								<li className="flex items-center gap-2">
									<span className="min-w-[80px] font-normal">User for:</span>
									<span>{usedFor}</span>
								</li>
							</ul>
						</div>
						<Typography variant="h4" className="mb-4 font-normal text-blue-500">
							<span className="text-base font-light">TK</span> {price}
						</Typography>
						<Button fullWidth size="lg" className="text-base font-normal tracking-wider">
							Order now
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetailsPage;
