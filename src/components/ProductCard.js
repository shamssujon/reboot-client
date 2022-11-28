import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import React from "react";
import { BsClockHistory, BsGeoAlt, BsPerson } from "react-icons/bs";
import { VscCalendar } from "react-icons/vsc";

const ProductCard = ({ product }) => {
	const { title, image, price, category, condition, usedFor, seller, location } = product;
	return (
		<Card className="overflow-hidden rounded-lg justify-between">
			<CardHeader color="blue" className="relative m-0 aspect-6/4 rounded-none bg-white shadow-none">
				<img src={image} alt="" className="h-full w-full object-cover" />
			</CardHeader>
			<CardBody className="p-4 flex-1">
				<Typography variant="h5" className="text-lg font-medium">
					{title}
				</Typography>

				<div className="my-2 grid grid-cols-2 gap-1">
					<Typography variant="small" color="gray" className="flex items-center gap-1">
						<BsPerson />
						<span>{seller.name}</span>
					</Typography>
					<Typography variant="small" color="gray" className="flex items-center gap-1">
						<BsGeoAlt />
						<span>{seller.location}</span>
					</Typography>
					<Typography variant="small" color="gray" className="flex items-center gap-1">
						<BsClockHistory />
						<span>26 November</span>
					</Typography>
					<Typography variant="small" color="gray" className="flex items-center gap-1">
						<VscCalendar />
						<span>Used for {usedFor}</span>
					</Typography>
				</div>
			</CardBody>
			<CardFooter divider className="flex flex-wrap items-center justify-between gap-2 px-4 py-2">
				<Typography className="text-lg font-normal text-blue-500">
					<span className="text-sm font-light">TK</span> {price}
				</Typography>
				<Button size="sm" className="text-sm font-normal tracking-wide">
					Buy Now
				</Button>
			</CardFooter>
		</Card>
	);
};

export default ProductCard;
