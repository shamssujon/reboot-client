import { Button, Dialog, DialogBody, DialogHeader, IconButton, Input, Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsX } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { AuthContext } from "../contexts/AuthProvider";

const BookingModal = ({ openModal, modalHandler, productData }) => {
	const { user } = useContext(AuthContext);
	const { _id, title, image, price } = productData;
	const [processingOrder, setProcessingOrder] = useState(null);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	// Handle order booking
	const handleBooking = (orderBookingData) => {
		const order = {
			productId: _id,
			productTitle: title,
			productImage: image,
			productPrice: price,
			buyerName: orderBookingData.buyerName,
			buyerEmail: orderBookingData.buyerEmail,
			buyerPhone: orderBookingData.phone,
			location: orderBookingData.location,
			orderStatus: "pending",
			orderDate: "",
		};
		// console.log(order);

		// Send order to server to save in DB
		axios({
			method: "POST",
			url: "http://localhost:9000/orders",
			data: order,
		})
			.then((res) => {
				console.log(res.data);

				if (res.data.acknowledged) {
					setProcessingOrder(false);
					toast.success("Product added");
					reset();
					modalHandler();
				}
			})
			.catch((error) => {
				setProcessingOrder(false);
				console.error(error);
			});
	};

	return (
		<Dialog
			open={openModal}
			handler={modalHandler}
			size="xs"
			className="max-h-[90vh] w-full max-w-[90%] overflow-y-auto md:max-w-md">
			<DialogHeader className="justify-between px-6">
				<span>Order Confirmation</span>
				<IconButton onClick={modalHandler} variant="text" color="red" className="">
					<BsX className="text-3xl" />
				</IconButton>
			</DialogHeader>
			<DialogBody divider className="block p-6">
				<div className="">
					<p className="mb-2">You are about to order:</p>
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
				<form onSubmit={handleSubmit(handleBooking)} className="grid w-full gap-5 bg-white">
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
						className="flex w-full items-center justify-center gap-2 text-base font-normal tracking-wide md:w-auto">
						Confirm Order {processingOrder && <CgSpinner className="animate-spin text-2xl" />}
					</Button>
				</form>
			</DialogBody>
		</Dialog>
	);
};

export default BookingModal;
