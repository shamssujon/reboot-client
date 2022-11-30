import { Button, IconButton, Tooltip, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Wishlist = () => {
	const { user, loadingUser } = useContext(AuthContext);
	const {
		data: wishlist = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["wishlist", user?.email],
		queryFn: async () => {
			const res = await fetch(`${process.env.REACT_APP_SERVER_LOCAL_URL}/wishlist?email=${user?.email}`);
			const data = await res.json();
			return data;
		},
	});

	return (
		<div className="">
			{/* {processingDelete && <PageSpinner></PageSpinner>} */}
			<Typography variant="h4" className="mb-6">
				Wishlist
			</Typography>
			{wishlist.length === 0 ? (
				<p>No products found</p>
			) : (
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
											<th className="min-w-[300px] max-w-sm px-6 py-4 text-left text-sm font-medium text-blue-gray-800">
												Product
											</th>
											<th className="px-6 py-4 text-left text-sm font-medium text-blue-gray-800">
												Date
											</th>
											<th className="px-6 py-4 text-end text-sm font-medium text-blue-gray-800">
												Actions
											</th>
										</tr>
									</thead>
									<tbody>
										{wishlist.map((product, index) => (
											<tr key={product._id} className="border-t">
												<td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-blue-gray-800">
													{index + 1}
												</td>
												<td className="min-w-[300px] max-w-sm px-6 py-4 text-sm font-light text-blue-gray-800">
													<div className="flex items-center gap-2 rounded-lg">
														<img
															src={product.productImage}
															alt=""
															className="aspect-square h-10 w-10 shrink-0 overflow-hidden rounded-lg object-cover"
														/>
														<div className="">
															<Typography variant="small" className="font-normal">
																{product.productTitle}
															</Typography>
															<Typography variant="small">
																<span>Price: </span> {product.productPrice} Tk
															</Typography>
														</div>
													</div>
												</td>
												<td className="whitespace-nowrap px-6 py-4 text-sm font-light text-blue-gray-800">
													{product.wishlistDate.split("T")[0]}
												</td>

												<td className="whitespace-nowrap px-6 py-4 text-sm font-light text-blue-gray-800">
													<div className="flex items-center justify-end gap-2">
														<Link to={`/products/product/${product.productId}`}>
															<Button
																size="sm"
																className="px-3 font-normal tracking-wide">
																Order
															</Button>
														</Link>
														<Tooltip content="Delete Order">
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
			)}
		</div>
	);
};

export default Wishlist;
