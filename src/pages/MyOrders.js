import { Button, IconButton, Tooltip, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { BsTrash } from "react-icons/bs";
import PageSpinner from "../components/PageSpinner";
import { AuthContext } from "../contexts/AuthProvider";
import useUserRoleChecker from "../hooks/useUserRoleChecker";

const MyOrders = () => {
	const { user, loadingUser } = useContext(AuthContext);
	const [userRole, loadingUserRole] = useUserRoleChecker(user?.email);
	const [processingDelete, setProcessingDelete] = useState(false);

	const {
		data: orders = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["orders", user?.email],
		queryFn: async () => {
			const res = await fetch(`${process.env.REACT_APP_SERVER_LIVE_URL}/orders?email=${user?.email}`);
			const data = await res.json();
			return data;
		},
	});

	const handleDeleteOrder = (id) => {
		setProcessingDelete(true);

		// Check admin
		if (userRole === "buyer") {
			// Send delete req to server
			axios({
				method: "DELETE",
				url: `${process.env.REACT_APP_SERVER_LIVE_URL}/orders/${id}`,
			})
				.then((res) => {
					console.log(res.data);

					if (res.data.deletedCount > 0) {
						toast.success("Order deleted");
						refetch();
						setProcessingDelete(false);
					}
				})
				.catch((error) => {
					toast.error(error);
					console.error(error);
				});
		}
	};

	if (loadingUser || isLoading) {
		return <PageSpinner></PageSpinner>;
	}

	return (
		<div className="">
			{processingDelete && <PageSpinner></PageSpinner>}
			<Typography variant="h4" className="mb-6">
				My Orders
			</Typography>
			{orders.length === 0 ? (
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
											<th className="px-6 py-4 text-left text-sm font-medium text-blue-gray-800">
												Status
											</th>
											<th className="px-6 py-4 text-end text-sm font-medium text-blue-gray-800">
												Actions
											</th>
										</tr>
									</thead>
									<tbody>
										{orders.map((order, index) => (
											<tr key={order._id} className="border-t">
												<td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-blue-gray-800">
													{index + 1}
												</td>
												<td className="min-w-[300px] max-w-sm px-6 py-4 text-sm font-light text-blue-gray-800">
													<div className="flex items-center gap-2 rounded-lg">
														<img
															src={order.productImage}
															alt=""
															className="aspect-square h-10 w-10 shrink-0 overflow-hidden rounded-lg object-cover"
														/>
														<div className="">
															<Typography variant="small" className="font-normal">
																{order.productTitle}
															</Typography>
															<Typography variant="small">
																<span>Price: </span> {order.productPrice} Tk
															</Typography>
														</div>
													</div>
												</td>
												<td className="whitespace-nowrap px-6 py-4 text-sm font-light text-blue-gray-800">
													{order.orderDate.split("T")[0]}
												</td>
												<td className="whitespace-nowrap px-6 py-4 text-sm font-light text-blue-gray-800">
													<span
														className={`${
															order.orderStatus === "pending"
																? "bg-amber-50 text-amber-900"
																: "bg-green-50 text-green-600"
														} inline-block rounded-full px-3 py-1 text-xs uppercase tracking-wide`}>
														{order.orderStatus}
													</span>
												</td>
												<td className="whitespace-nowrap px-6 py-4 text-sm font-light text-blue-gray-800">
													<div className="flex items-center justify-end gap-2">
														<Button
															size="sm"
															className="px-3 font-normal tracking-wide"
															disabled={order.orderStatus === "paid"}>
															Pay
														</Button>
														<Tooltip content="Delete Order">
															<IconButton
																onClick={() => handleDeleteOrder(order._id)}
																size="sm"
																color="red"
																disabled={order.orderStatus === "paid"}>
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

export default MyOrders;
