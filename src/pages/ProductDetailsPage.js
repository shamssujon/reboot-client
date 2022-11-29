import {
	Breadcrumbs,
	Button,
	Dialog,
	DialogBody,
	DialogFooter,
	DialogHeader,
	Input,
	Typography,
} from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import { BsClockHistory, BsGeoAlt, BsPerson } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";

const ProductDetailsPage = () => {
	const { user } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm();
	const productData = useLoaderData();
	const { title, category, image, price, condition, usedFor, postingDate, description, seller } = productData;

	const [openBookingModal, setOpenBookingModal] = useState(false);

	const handleBooking = () => {
		setOpenBookingModal(!openBookingModal);
	};

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
						<img src={image} alt="" className="block h-full w-full rounded-lg object-cover" />
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
						<Button
							onClick={handleBooking}
							fullWidth
							size="lg"
							className="text-base font-normal tracking-wider">
							Order now
						</Button>
					</div>
				</div>
			</div>
			<Dialog
				open={openBookingModal}
				handler={handleBooking}
				size="xs"
				className="max-h-[90vh] w-full max-w-[90%] overflow-y-auto md:max-w-md">
				<DialogHeader className="px-6">Booking Confirmation</DialogHeader>
				<DialogBody divider className="block p-6">
					<div className="">
						<p className="mb-2">You are about to book:</p>
						<div className="mb-6 flex items-center gap-4 rounded-lg border border-blue-gray-200 p-2">
							<img
								src={image}
								alt=""
								className="aspect-square h-12 w-12 shrink-0 overflow-hidden rounded-lg object-cover"
							/>
							<div className="">
								<Typography variant="h6" className="text-base">
									{title}
								</Typography>
								<Typography className="text-lg font-normal text-blue-500">
									<span className="text-sm font-light">TK</span> {price}
								</Typography>
							</div>
						</div>
					</div>
					<form className="grid w-full gap-5 bg-white">
						<div className="grid gap-2">
							<Input
								readOnly
								defaultValue={user?.displayName}
								size="lg"
								type="text"
								label="Your Name"
								className="text-base"
								{...register("buyerName", {
									required: { value: true, message: "Required" },
								})}
							/>
							{errors.buyerName && <p className="text-sm text-rose-500">{errors.buyerName.message}</p>}
						</div>
						<div className="grid gap-2">
							<Input
								readOnly
								defaultValue={user?.email}
								size="lg"
								type="email"
								label="Your Email"
								className="text-base"
								{...register("buyerEmail", {
									required: { value: true, message: "Required" },
								})}
							/>
							{errors.buyerEmail && <p className="text-sm text-rose-500">{errors.buyerEmail.message}</p>}
						</div>
						<div className="grid gap-2">
							<Input
								size="lg"
								type="tel"
								label="Your Phone Number"
								className="text-base"
								{...register("phone", {
									required: { value: true, message: "Required" },
								})}
							/>
							{errors.phone && <p className="text-sm text-rose-500">{errors.phone.message}</p>}
						</div>
						<div className="grid gap-2">
							<Input
								size="lg"
								type="text"
								label="Meeting Location"
								className="text-base"
								{...register("location", {
									required: { value: true, message: "Required" },
								})}
							/>
							{errors.location && <p className="text-sm text-rose-500">{errors.location.message}</p>}
						</div>
						<Button
							type="submit"
							fullWidth
							className="flex items-center justify-center gap-2 text-base font-normal tracking-wide">
							Confirm Booking
						</Button>
					</form>
				</DialogBody>
				<DialogFooter className="px-6">
					<Button variant="text" color="red" onClick={handleBooking} className="mr-1">
						<span>Cancel</span>
					</Button>
					<Button variant="gradient" color="green" onClick={handleBooking}>
						<span>Confirm</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</section>
	);
};

export default ProductDetailsPage;
