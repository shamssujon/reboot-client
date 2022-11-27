import { Button, Input, Option, Select, Textarea, Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";

const AddProduct = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const [uploading, setUploading] = useState(false);
	const imgbbApiKey = process.env.REACT_APP_imgbbApiKey;

	// Add a product
	const handleAddProduct = (productData) => {
		console.log(productData);

		// setUploading(true);

		// const image = productData.image[0];
		// const formData = new FormData();
		// formData.append("image", image);
		// const url = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;

		// axios({
		// 	method: "POST",
		// 	url: url,
		// 	data: formData,
		// 	headers: {
		// 		"Content-Type": "multipart/form-data",
		// 	},
		// }).then((res) => {
		// 	console.log(res.data);
		// 	setUploading(false);

		// 	if (res.data.success) {
		// 		const product = {
		// 			name: productData.name,
		// 			image: res.data.data.image.url,
		// 		};

		// 		// Send product to server to save in DB
		// 		axios({
		// 			method: "POST",
		// 			url: "http://localhost:9000/products",
		// 			data: product,
		// 		}).then((res) => {
		// 			console.log(res.data);
		// 			if (res.data.acknowledged) {
		// 				toast.success(`Product added`);
		// 				reset();
		// 			}
		// 		});
		// 	}
		// });
	};

	return (
		<div className="grid gap-10">
			<div>
				<Typography variant="h4" className="mb-6">
					Add a Product
				</Typography>
				<form
					className="grid max-w-xl gap-4 rounded-lg border bg-white p-6"
					onSubmit={handleSubmit(handleAddProduct)}>
					<div className="grid gap-2">
						<Input
							size="lg"
							type="text"
							label="Product Title"
							className="text-base"
							{...register("title", {
								required: { value: false, message: "Required" },
							})}
						/>
						{errors.title && <p className="text-sm text-rose-500">{errors.title.message}</p>}
					</div>
					<div className="grid gap-2">
						<select
							size="lg"
							className=""
							label="Product Category"
							{...register("category", {
								required: { value: false, message: "Required" },
							})}>
							<option>CPU</option>
							<option>GPU</option>
							<option>Mouse</option>
						</select>
						{errors.category && <p className="text-sm text-rose-500">{errors.category.message}</p>}
					</div>
					<div className="grid gap-2">
						<Input
							size="lg"
							type="file"
							label="Product image"
							className="text-base"
							{...register("image", {
								required: { value: false, message: "Required" },
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
								required: { value: false, message: "Required" },
							})}
						/>
						{errors.price && <p className="text-sm text-rose-500">{errors.price.message}</p>}
					</div>
					<div className="grid gap-2">
						<Select
							value="Good"
							size="lg"
							className="text-base"
							label="Product condition"
							{...register("condition", {
								required: { value: false, message: "Required" },
							})}>
							<Option value="Excellent">Excellent</Option>
							<Option value="Good">Good</Option>
							<Option value="Fair">Fair</Option>
						</Select>
						{errors.condition && <p className="text-sm text-rose-500">{errors.condition.message}</p>}
					</div>
					<div className="grid gap-2">
						<Input
							size="lg"
							type="text"
							label="Used For (ex: 10 days, 3 months, 2 years)"
							className="text-base"
							{...register("usedFor", {
								required: { value: false, message: "Required" },
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
								required: { value: false, message: "Required" },
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
								required: { value: false, message: "Required" },
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
