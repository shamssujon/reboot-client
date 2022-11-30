import { IconButton, Tooltip, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { BsTrash } from "react-icons/bs";
import PageSpinner from "../components/PageSpinner";
import { AuthContext } from "../contexts/AuthProvider";
import useUserRoleChecker from "../hooks/useUserRoleChecker";

const AllBuyers = () => {
	const { user } = useContext(AuthContext);
	const [userRole, loadingUserRole] = useUserRoleChecker(user?.email);
	const {
		data: buyers = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["buyers"],
		queryFn: async () => {
			const res = await fetch(`${process.env.REACT_APP_SERVER_LIVE_URL}/users?role=buyer`);
			const data = await res.json();
			return data;
		},
	});

	const handleDeleteUser = (id) => {
		// console.log(id);

		// Check admin
		if (userRole === "admin") {
			// Send delete req to server
			axios({
				method: "DELETE",
				url: `${process.env.REACT_APP_SERVER_LIVE_URL}/users/${id}`,
			})
				.then((res) => {
					console.log(res.data);

					if (res.data.deletedCount > 0) {
						toast.success("User deleted");
						refetch();
					}
				})
				.catch((error) => {
					toast.error(error);
					console.error(error);
				});
		}
	};

	if (isLoading) {
		return <PageSpinner></PageSpinner>;
	}

	return (
		<div className="">
			<Typography variant="h4" className="mb-6">
				Buyers
			</Typography>
			{buyers.length === 0 ? (
				<p>No buyers found</p>
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
											<th className="px-6 py-4 text-left text-sm font-medium text-blue-gray-800">
												Buyers
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
										{buyers.map((buyer, index) => (
											<tr key={buyer._id} className="border-t">
												<td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-blue-gray-800">
													{index + 1}
												</td>
												<td className="whitespace-nowrap px-6 py-4 text-sm font-light text-blue-gray-800">
													{buyer.displayName}
													<p>Role: {buyer.role}</p>
												</td>
												<td className="whitespace-nowrap px-6 py-4 text-sm font-light text-blue-gray-800">
													{buyer.email}
												</td>
												<td className="whitespace-nowrap px-6 py-4 text-sm font-light text-blue-gray-800">
													<div className="flex items-center justify-end gap-2">
														<Tooltip content="Delete User">
															<IconButton
																onClick={() => handleDeleteUser(buyer._id)}
																size="sm"
																color="red">
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

export default AllBuyers;
