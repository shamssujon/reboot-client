import { Avatar, Button, IconButton, Input, Tooltip, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BsTrash } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { TbEdit } from "react-icons/tb";

const ProductCategories = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	// Get all product categories
	const { data: categories = [], refetch } = useQuery({
		queryKey: ["categories"],
		queryFn: async () => {
			const res = await fetch("https://reboot-server.vercel.app/categories");
			const data = await res.json();
			return data;
		},
	});

	const [uploading, setUploading] = useState(false);
	const imgbbApiKey = process.env.REACT_APP_imgbbApiKey;

	// Add a category
	const handleAddCategory = (categoryData) => {
		setUploading(true);

		const image = categoryData.image[0];
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
			console.log(res.data);
			setUploading(false);

			if (res.data.success) {
				const category = {
					name: categoryData.name,
					image: res.data.data.image.url,
				};

				// Send category to server to save in DB
				axios({
					method: "POST",
					url: "https://reboot-server.vercel.app/categories",
					data: category,
				}).then((res) => {
					console.log(res.data);
					if (res.data.acknowledged) {
						toast.success(`Category ${categoryData.name} added`);
						refetch();
						reset();
					}
				});
			}
		});
	};

	return (
		<div className="grid gap-10">
			<div>
				<Typography variant="h4" className="mb-6">
					Add a Category
				</Typography>
				<form
					className="grid max-w-sm gap-4 rounded-lg border bg-white p-6"
					onSubmit={handleSubmit(handleAddCategory)}>
					<div className="grid gap-2">
						<Input
							size="lg"
							type="text"
							label="Category name"
							className="text-base"
							{...register("name", {
								required: { value: true, message: "Required" },
							})}
						/>
						{errors.name && <p className="text-sm text-rose-500">{errors.name.message}</p>}
					</div>
					<div className="grid gap-2">
						<Input
							size="lg"
							type="file"
							label="Category image"
							className="text-base"
							{...register("image", {
								required: { value: true, message: "Required" },
							})}
						/>

						{errors.image && <p className="text-sm text-rose-500">{errors.image.message}</p>}
					</div>
					<Button
						type="submit"
						fullWidth
						className="flex items-center justify-center gap-2 text-base font-normal tracking-wide">
						Add category {uploading && <CgSpinner className="animate-spin text-2xl" />}
					</Button>
				</form>
			</div>
			<div>
				<Typography variant="h4" className="mb-6">
					Product Categories
				</Typography>
				<div className="flex flex-col rounded-lg border bg-white">
					<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
							<div className="overflow-x-auto">
								<table className="min-w-full">
									<thead>
										<tr>
											<th className="w-12 px-6 py-2 text-left text-sm font-medium text-blue-gray-800">
												#
											</th>
											<th className="px-6 py-2 text-left text-sm font-medium text-blue-gray-800">
												Image
											</th>
											<th className="px-6 py-2 text-left text-sm font-medium text-blue-gray-800">
												Name
											</th>
											<th className="px-6 py-2 text-end text-sm font-medium text-blue-gray-800">
												Actions
											</th>
										</tr>
									</thead>
									<tbody>
										{categories.map((category, index) => (
											<tr key={category._id} className="border-t">
												<td className="whitespace-nowrap px-6 py-2 text-sm font-medium text-blue-gray-800">
													{index + 1}
												</td>
												<td className="whitespace-nowrap px-6 py-2 text-sm font-light text-blue-gray-800">
													<Avatar size="sm" src={category.image} alt={category.name} />
												</td>
												<td className="whitespace-nowrap px-6 py-2 text-sm font-light text-blue-gray-800">
													{category.name}
												</td>
												<td className="whitespace-nowrap px-6 py-2 text-sm font-light text-blue-gray-800">
													<div className="flex items-center justify-end gap-2">
														<Tooltip content="Edit">
															<IconButton size="sm" color="blue">
																<TbEdit className="text-base" />
															</IconButton>
														</Tooltip>
														<Tooltip content="Delete">
															<IconButton size="sm" color="red">
																<BsTrash className="text-base" />
															</IconButton>
														</Tooltip>
													</div>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCategories;
