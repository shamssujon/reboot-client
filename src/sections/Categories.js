import React from "react";
import icon from "../assets/icons/gpu.png";
import { Link } from "react-router-dom";

const Categories = () => {
	return (
		<section className="py-10">
			<div className="container">
				<div className="mb-6">
					<h4 className="text-xl font-bold uppercase">Categories</h4>
				</div>
				<div className="grid grid-cols-auto-fill gap-4">
					<Link className="rounded-lg border border-slate-100 bg-white p-4 text-center shadow-sm transition hover:border-blue-500 hover:shadow">
						<img src={icon} alt="" className="mx-auto mb-2 block" />
						<span className="font-normal">GPU</span>
					</Link>
					<Link className="rounded-lg border border-slate-100 bg-white p-4 text-center shadow-sm transition hover:border-blue-500 hover:shadow">
						<img src={icon} alt="" className="mx-auto mb-2 block" />
						<span className="font-normal">GPU</span>
					</Link>
					<Link className="rounded-lg border border-slate-100 bg-white p-4 text-center shadow-sm transition hover:border-blue-500 hover:shadow">
						<img src={icon} alt="" className="mx-auto mb-2 block" />
						<span className="font-normal">GPU</span>
					</Link>
					<Link className="rounded-lg border border-slate-100 bg-white p-4 text-center shadow-sm transition hover:border-blue-500 hover:shadow">
						<img src={icon} alt="" className="mx-auto mb-2 block" />
						<span className="font-normal">GPU</span>
					</Link>
					<Link className="rounded-lg border border-slate-100 bg-white p-4 text-center shadow-sm transition hover:border-blue-500 hover:shadow">
						<img src={icon} alt="" className="mx-auto mb-2 block" />
						<span className="font-normal">GPU</span>
					</Link>
					<Link className="rounded-lg border border-slate-100 bg-white p-4 text-center shadow-sm transition hover:border-blue-500 hover:shadow">
						<img src={icon} alt="" className="mx-auto mb-2 block" />
						<span className="font-normal">GPU</span>
					</Link>
					<Link className="rounded-lg border border-slate-100 bg-white p-4 text-center shadow-sm transition hover:border-blue-500 hover:shadow">
						<img src={icon} alt="" className="mx-auto mb-2 block" />
						<span className="font-normal">GPU</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Categories;
// repeat(auto-fill, minmax(150px, 1fr))
