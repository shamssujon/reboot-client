import { IconButton, Tooltip, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BsTrash } from "react-icons/bs";
import PageSpinner from "../components/PageSpinner";

const AllSellers = () => {
	const { data: sellers = [], isLoading } = useQuery({
		queryKey: ["sellers"],
		queryFn: async () => {
			const res = await fetch("http://localhost:9000/users?role=seller");
			const data = await res.json();
			return data;
		},
	});

	if (isLoading) {
		return <PageSpinner></PageSpinner>;
	}

	return (
		<div className="">
			<Typography variant="h4" className="mb-6">
				Sellers
			</Typography>
			<div className="flex flex-col rounded-lg border bg-white">
				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
						<div className="overflow-x-auto">
							<table className="min-w-full">
								<thead>
									<tr>
										<th className="w-12 px-6 py-4 text-left text-sm font-medium text-blue-gray-800">
											#
										</th>
										<th className="px-6 py-4 text-left text-sm font-medium text-blue-gray-800">
											Sellers
										</th>
										<th className="px-6 py-4 text-left text-sm font-medium text-blue-gray-800">
											Email
										</th>
										<th className="px-6 py-4 text-end text-sm font-medium text-blue-gray-800">
											Actions
										</th>
									</tr>
								</thead>
								<tbody>
									{sellers.map((seller, index) => (
										<tr key={seller._id} className="border-t">
											<td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-blue-gray-800">
												{index + 1}
											</td>
											<td className="whitespace-nowrap px-6 py-4 text-sm font-light text-blue-gray-800">
												{seller.name}
												<p>{seller.role}</p>
											</td>
											<td className="whitespace-nowrap px-6 py-4 text-sm font-light text-blue-gray-800">
												{seller.email}
											</td>
											<td className="whitespace-nowrap px-6 py-4 text-sm font-light text-blue-gray-800">
												<div className="flex items-center justify-end gap-2">
													<Tooltip content="Delete User">
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
	);
};

export default AllSellers;
