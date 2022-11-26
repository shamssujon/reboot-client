import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import React from "react";
import { BiCategory } from "react-icons/bi";
import { BsClockHistory, BsGeoAlt } from "react-icons/bs";
import { Link } from "react-router-dom";
import productImg from "../assets/images/product_img.png";

const RecentProducts = () => {
	return (
		<section className="py-10">
			<div className="container">
				<div className="mb-6">
					<h4 className="text-xl font-bold uppercase">Recent Products</h4>
				</div>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					<Card className="overflow-hidden rounded-lg">
						<CardHeader color="blue" className="relative m-0 aspect-6/4 rounded-none bg-white shadow-none">
							<img src={productImg} alt="" className="h-full w-full object-cover" />
						</CardHeader>
						<CardBody className="p-4">
							<Typography variant="h5" className="text-lg font-medium">
								Intel dual core pc
							</Typography>

							<div className="my-2 flex flex-col justify-between gap-1">
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BiCategory />
									<Link to={"/product"} className="text-sm">
										Desktop Computer
									</Link>
								</Typography>
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BsGeoAlt />
									<span>Swastipur, Kushtia</span>
								</Typography>
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BsClockHistory />
									<span>26 November</span>
								</Typography>
							</div>
						</CardBody>
						<CardFooter divider className="flex flex-wrap items-center justify-between gap-2 px-4 py-2">
							<Typography variant="" className="text-lg text-blue-500">
								<span className="text-sm">৳</span>9500 <span className="text-sm">taka</span>{" "}
							</Typography>
							<Button variant="fullid" size="sm" className="text-sm font-normal tracking-wide">
								Buy Now
							</Button>
						</CardFooter>
					</Card>
					<Card className="overflow-hidden rounded-lg">
						<CardHeader color="blue" className="relative m-0 aspect-6/4 rounded-none bg-white shadow-none">
							<img src={productImg} alt="" className="h-full w-full object-cover" />
						</CardHeader>
						<CardBody className="p-4">
							<Typography variant="h5" className="text-lg font-medium">
								Intel dual core pc
							</Typography>

							<div className="my-2 flex flex-col justify-between gap-1">
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BiCategory />
									<Link to={"/product"} className="text-sm">
										Desktop Computer
									</Link>
								</Typography>
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BsGeoAlt />
									<span>Swastipur, Kushtia</span>
								</Typography>
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BsClockHistory />
									<span>26 November</span>
								</Typography>
							</div>
						</CardBody>
						<CardFooter divider className="flex flex-wrap items-center justify-between gap-2 px-4 py-2">
							<Typography variant="" className="text-lg text-blue-500">
								<span className="text-sm">৳</span>9500 <span className="text-sm">taka</span>{" "}
							</Typography>
							<Button variant="fullid" size="sm" className="text-sm font-normal tracking-wide">
								Buy Now
							</Button>
						</CardFooter>
					</Card>
					<Card className="overflow-hidden rounded-lg">
						<CardHeader color="blue" className="relative m-0 aspect-6/4 rounded-none bg-white shadow-none">
							<img src={productImg} alt="" className="h-full w-full object-cover" />
						</CardHeader>
						<CardBody className="p-4">
							<Typography variant="h5" className="text-lg font-medium">
								Intel dual core pc
							</Typography>

							<div className="my-2 flex flex-col justify-between gap-1">
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BiCategory />
									<Link to={"/product"} className="text-sm">
										Desktop Computer
									</Link>
								</Typography>
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BsGeoAlt />
									<span>Swastipur, Kushtia</span>
								</Typography>
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BsClockHistory />
									<span>26 November</span>
								</Typography>
							</div>
						</CardBody>
						<CardFooter divider className="flex flex-wrap items-center justify-between gap-2 px-4 py-2">
							<Typography variant="" className="text-lg text-blue-500">
								<span className="text-sm">৳</span>9500 <span className="text-sm">taka</span>{" "}
							</Typography>
							<Button variant="fullid" size="sm" className="text-sm font-normal tracking-wide">
								Buy Now
							</Button>
						</CardFooter>
					</Card>
					<Card className="overflow-hidden rounded-lg">
						<CardHeader color="blue" className="relative m-0 aspect-6/4 rounded-none bg-white shadow-none">
							<img src={productImg} alt="" className="h-full w-full object-cover" />
						</CardHeader>
						<CardBody className="p-4">
							<Typography variant="h5" className="text-lg font-medium">
								Intel dual core pc
							</Typography>

							<div className="my-2 flex flex-col justify-between gap-1">
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BiCategory />
									<Link to={"/product"} className="text-sm">
										Desktop Computer
									</Link>
								</Typography>
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BsGeoAlt />
									<span>Swastipur, Kushtia</span>
								</Typography>
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BsClockHistory />
									<span>26 November</span>
								</Typography>
							</div>
						</CardBody>
						<CardFooter divider className="flex flex-wrap items-center justify-between gap-2 px-4 py-2">
							<Typography variant="" className="text-lg text-blue-500">
								<span className="text-sm">৳</span>9500 <span className="text-sm">taka</span>{" "}
							</Typography>
							<Button variant="fullid" size="sm" className="text-sm font-normal tracking-wide">
								Buy Now
							</Button>
						</CardFooter>
					</Card>
					<Card className="overflow-hidden rounded-lg">
						<CardHeader color="blue" className="relative m-0 aspect-6/4 rounded-none bg-white shadow-none">
							<img src={productImg} alt="" className="h-full w-full object-cover" />
						</CardHeader>
						<CardBody className="p-4">
							<Typography variant="h5" className="text-lg font-medium">
								Intel dual core pc
							</Typography>

							<div className="my-2 flex flex-col justify-between gap-1">
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BiCategory />
									<Link to={"/product"} className="text-sm">
										Desktop Computer
									</Link>
								</Typography>
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BsGeoAlt />
									<span>Swastipur, Kushtia</span>
								</Typography>
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BsClockHistory />
									<span>26 November</span>
								</Typography>
							</div>
						</CardBody>
						<CardFooter divider className="flex flex-wrap items-center justify-between gap-2 px-4 py-2">
							<Typography variant="" className="text-lg text-blue-500">
								<span className="text-sm">৳</span>9500 <span className="text-sm">taka</span>{" "}
							</Typography>
							<Button variant="fullid" size="sm" className="text-sm font-normal tracking-wide">
								Buy Now
							</Button>
						</CardFooter>
					</Card>
					<Card className="overflow-hidden rounded-lg">
						<CardHeader color="blue" className="relative m-0 aspect-6/4 rounded-none bg-white shadow-none">
							<img src={productImg} alt="" className="h-full w-full object-cover" />
						</CardHeader>
						<CardBody className="p-4">
							<Typography variant="h5" className="text-lg font-medium">
								Intel dual core pc
							</Typography>

							<div className="my-2 flex flex-col justify-between gap-1">
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BiCategory />
									<Link to={"/product"} className="text-sm">
										Desktop Computer
									</Link>
								</Typography>
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BsGeoAlt />
									<span>Swastipur, Kushtia</span>
								</Typography>
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BsClockHistory />
									<span>26 November</span>
								</Typography>
							</div>
						</CardBody>
						<CardFooter divider className="flex flex-wrap items-center justify-between gap-2 px-4 py-2">
							<Typography variant="" className="text-lg text-blue-500">
								<span className="text-sm">৳</span>9500 <span className="text-sm">taka</span>{" "}
							</Typography>
							<Button variant="fullid" size="sm" className="text-sm font-normal tracking-wide">
								Buy Now
							</Button>
						</CardFooter>
					</Card>
					<Card className="overflow-hidden rounded-lg">
						<CardHeader color="blue" className="relative m-0 aspect-6/4 rounded-none bg-white shadow-none">
							<img src={productImg} alt="" className="h-full w-full object-cover" />
						</CardHeader>
						<CardBody className="p-4">
							<Typography variant="h5" className="text-lg font-medium">
								Intel dual core pc
							</Typography>

							<div className="my-2 flex flex-col justify-between gap-1">
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BiCategory />
									<Link to={"/product"} className="text-sm">
										Desktop Computer
									</Link>
								</Typography>
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BsGeoAlt />
									<span>Swastipur, Kushtia</span>
								</Typography>
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BsClockHistory />
									<span>26 November</span>
								</Typography>
							</div>
						</CardBody>
						<CardFooter divider className="flex flex-wrap items-center justify-between gap-2 px-4 py-2">
							<Typography variant="" className="text-lg text-blue-500">
								<span className="text-sm">৳</span>9500 <span className="text-sm">taka</span>{" "}
							</Typography>
							<Button variant="fullid" size="sm" className="text-sm font-normal tracking-wide">
								Buy Now
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default RecentProducts;
