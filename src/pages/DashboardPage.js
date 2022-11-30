import { Typography } from "@material-tailwind/react";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const DashboardPage = () => {
	const { user } = useContext(AuthContext);
	return (
		<div>
			<Typography variant="h4" className="mb-1">
				{user?.displayName}
			</Typography>
            <p>Email: {user?.email}</p>
		</div>
	);
};

export default DashboardPage;
