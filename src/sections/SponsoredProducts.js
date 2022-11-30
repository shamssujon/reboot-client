import React from "react";
import ProductCard from "../components/ProductCard";

const SponsoredProducts = ({sposoredProducts}) => {
	return (
		<section className="py-10">
			<div className="container">
				<div className="mb-6">
					<h4 className="text-xl font-bold uppercase">Sponsored Products</h4>
				</div>
				<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 ">
				{sposoredProducts.map((product) => (
						<ProductCard key={product._id} product={product}></ProductCard>
					))}
					{/* <Card className="overflow-hidden rounded-lg border-2 border-amber-200 shadow-amber-600/20">
						<CardHeader color="blue" className="relative m-0 aspect-6/4 rounded-none bg-white shadow-none">
							<img src={productImg} alt="" className="h-full w-full object-cover" />
						</CardHeader>
						<CardBody className="p-4">
							<Typography variant="h5" className="text-lg font-medium">
								Intel dual core pc
							</Typography>

							<div className="my-2 grid grid-cols-2 gap-1">
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BsPerson />
									<span>Shamsul Islam Sujon</span>
								</Typography>
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BsGeoAlt />
									<span>Swastipur, Kushtia</span>
								</Typography>
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<BsClockHistory />
									<span>26 November</span>
								</Typography>
								<Typography variant="small" color="gray" className="flex items-center gap-1">
									<VscCalendar />
									<span>Used for 10 years</span>
								</Typography>
							</div>
						</CardBody>
						<CardFooter divider className="flex flex-wrap items-center justify-between gap-2 px-4 py-2">
							<Typography className="text-lg font-normal text-blue-500">
								<span className="text-sm font-light">TK</span> 9500
							</Typography>
							<Button size="sm" className="text-sm font-normal tracking-wide">
								Buy Now
							</Button>
						</CardFooter>
					</Card> */}
				</div>
			</div>
		</section>
	);
};

export default SponsoredProducts;
