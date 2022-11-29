import { useEffect, useState } from "react";

const useUserRoleChecker = (email) => {
	const [userRole, setUserRole] = useState(null);
	const [loadingUserRole, setLoadingUserRole] = useState(true);

	useEffect(() => {
		if (email) {
			fetch(`http://localhost:9000/users/role/${email}`)
				.then((res) => res.json())
				.then((data) => {
					// console.log(data);
					setUserRole(data.userRole);
					setLoadingUserRole(false);
				});
		}
	}, [email]);

	return [userRole, loadingUserRole];
};

export default useUserRoleChecker;
