import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
	// Get all product categories
	const { data: categories = [] } = useQuery({
		queryKey: ["categories"],
		queryFn: async () => {
			const res = await fetch("http://localhost:9000/categories");
			const data = await res.json();
			return data;
		},
	});
	return (
		<section className="py-10">
			<div className="container">
				<div className="mb-6">
					<h4 className="text-xl font-bold uppercase">Categories</h4>
				</div>
				<div className="grid grid-cols-auto-fill gap-4">
					{categories.map((category) => (
						<Link
							key={category._id}
							className="rounded-lg border border-slate-100 bg-white p-4 text-center shadow-sm transition hover:border-blue-500 hover:shadow">
							<img src={category.image} alt="" className="mx-auto mb-2 block h-12 w-12 object-contain" />
							<span className="font-normal">{category.name}</span>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default Categories;
// repeat(auto-fill, minmax(150px, 1fr))
