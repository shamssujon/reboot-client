import { Button, Input, Option, Select, Textarea, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { AuthContext } from "../contexts/AuthProvider";

const AddProduct = () => {
	const { user } = useContext(AuthContext);

	const [uploading, setUploading] = useState(false);

	const imgbbApiKey = process.env.REACT_APP_imgbbApiKey;

	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm();

	// Get all product categories
	const { data: categories = [] } = useQuery({
		queryKey: ["categories"],
		queryFn: async () => {
			const res = await fetch("http://localhost:9000/categories");
			const data = await res.json();
			return data;
		},
	});

	// Add a product
	const handleAddProduct = (productData) => {
		// console.log(productData);

		setUploading(true);

		const image = productData.image[0];
		const formData = new FormData();
		formData.append("image", image);
		const url = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;

		axios({
			method: "POST",
			url: url,
			data: formData,
			headers: {
				"Content-Type": "multipart/form-data",
			},
		}).then((res) => {
			// console.log(res.data);

			if (res.data.success) {
				const product = {
					title: productData.title,
					category: productData.category,
					image: res.data.data.url,
					price: productData.price,
					condition: productData.condition,
					usedFor: productData.usedFor,
					description: productData.description,
					seller: {
						name: user.displayName,
						email: user.email,
						phone: productData.phone,
						location: productData.location,
					},
				};
				// console.log(product);

				// Send product to server to save in DB
				axios({
					method: "POST",
					url: "http://localhost:9000/products",
					data: product,
				})
					.then((res) => {
						// console.log(res.data);

						if (res.data.acknowledged) {
							setUploading(false);
							toast.success("Product added");
							reset();
						}
					})
					.catch((error) => {
						setUploading(false);
						console.error(error);
					});
			}
		});
	};

	return (
		<div className="grid gap-10">
			<div>
				<Typography variant="h4" className="mb-6">
					Add a Product
				</Typography>
				<form
					className="grid max-w-xl gap-5 rounded-lg border bg-white p-6"
					onSubmit={handleSubmit(handleAddProduct)}>
					<div className="grid gap-2">
						<Input
							size="lg"
							type="text"
							label="Product Title"
							className="text-base"
							{...register("title", {
								required: { value: true, message: "Required" },
							})}
						/>
						{errors.title && <p className="text-sm text-rose-500">{errors.title.message}</p>}
					</div>
					<div className="grid gap-1">
						<label htmlFor="category" className="text-sm font-normal">
							Select Category
						</label>
						<select
							id="category"
							defaultValue="Select category"
							className="rounded-md border border-blue-gray-200 p-3 text-base font-normal leading-tight text-blue-gray-700 transition focus:outline-2 focus:outline-blue-500"
							{...register("category", {
								required: { value: true, message: "Required" },
							})}>
							<option value="Select category" disabled>
								Select category
							</option>
							{categories.map((item) => (
								<option key={item._id} value={item.name}>
									{item.name}
								</option>
							))}
						</select>

						{/* ? The Select element from Material Tailwind seems buggy when loading options data dynamically.
						 * options don't get selected on first try.
						 * to select an option, have to click twice or more on the same option
						 * TODO: Find out the cause
						 */}
						{/* <Controller
							render={({ field }) => (
								<Select {...field} size="lg" className="text-base" label="Product Category">
									{categories.map((category) => (
										<Option key={category._id} value={category.name} className="select-auto">
											{category.name}
										</Option>
									))}
								</Select>
							)}
							name="category"
							control={control}
							rules={{ required: { value: true, message: "Required" } }}
						/> */}
						{errors.category && <p className="text-sm text-rose-500">{errors.category.message}</p>}
					</div>
					<div className="grid gap-2">
						<Input
							size="lg"
							type="file"
							label="Product image"
							className="text-base"
							{...register("image", {
								required: { value: true, message: "Required" },
							})}
						/>
						{errors.image && <p className="text-sm text-rose-500">{errors.image.message}</p>}
					</div>
					<div className="grid gap-2">
						<Input
							size="lg"
							type="number"
							label="Product Price (in taka)"
							className="text-base"
							{...register("price", {
								required: { value: true, message: "Required" },
							})}
						/>
						{errors.price && <p className="text-sm text-rose-500">{errors.price.message}</p>}
					</div>
					<div className="grid gap-2">
						<Controller
							render={({ field }) => (
								<Select {...field} size="lg" className="text-base" label="Product condition">
									<Option value="Excellent">Excellent</Option>
									<Option value="Good">Good</Option>
									<Option value="Fair">Fair</Option>
								</Select>
							)}
							name="condition"
							control={control}
							rules={{ required: { value: true, message: "Required" } }}
						/>
						{errors.condition && <p className="text-sm text-rose-500">{errors.condition.message}</p>}
					</div>
					<div className="grid gap-2">
						<Input
							size="lg"
							type="text"
							label="Used For (ex: 10 days, 3 months, 2 years)"
							className="text-base"
							{...register("usedFor", {
								required: { value: true, message: "Required" },
							})}
						/>
						{errors.usedFor && <p className="text-sm text-rose-500">{errors.usedFor.message}</p>}
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
							label="Your Location"
							className="text-base"
							{...register("location", {
								required: { value: true, message: "Required" },
							})}
						/>
						{errors.location && <p className="text-sm text-rose-500">{errors.location.message}</p>}
					</div>
					<div className="grid gap-2">
						<Textarea label="Product Description" className="text-base" {...register("description")} />
					</div>
					<Button
						type="submit"
						fullWidth
						className="flex items-center justify-center gap-2 text-base font-normal tracking-wide">
						Add Product {uploading && <CgSpinner className="animate-spin text-2xl" />}
					</Button>
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
