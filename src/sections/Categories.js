import { useQuery } from "@tanstack/react-query";
import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ sectionTitle }) => {
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
				{sectionTitle && (
					<div className="mb-6">
						<h4 className="text-xl font-bold uppercase">{sectionTitle}</h4>
					</div>
				)}
				<div className="grid grid-cols-auto-fill gap-4">
					{categories.map((category) => (
						<NavLink
							key={category._id}
							to={`/products/${category.slug}`}
							className={({ isActive }) =>
								`rounded-lg border bg-white p-4 text-center transition ${
									isActive
										? "border-blue-500 text-blue-500 shadow-lg shadow-blue-500/20"
										: "border-slate-100 shadow-sm hover:border-blue-500 hover:shadow"
								}`
							}>
							<img src={category.image} alt="" className="mx-auto mb-2 block h-12 w-12 object-contain" />
							<span className="font-normal">{category.name}</span>
						</NavLink>
					))}
				</div>
			</div>
		</section>
	);
};

export default Categories;
// repeat(auto-fill, minmax(150px, 1fr))
