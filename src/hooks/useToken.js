import { useEffect, useState } from "react";
const useToken = (email) => {
	const [token, setToken] = useState("");

	useEffect(() => {
		if (email) {
			fetch(`${process.env.REACT_APP_SERVER_LIVE_URL}/jwt?email=${email}`)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.accessToken) {
						// store token to localStorage
						localStorage.setItem("accessToken", data.accessToken);
						setToken(data.accessToken);
					}
				});
		}
	}, [email]);

	return [token];
};

export default useToken;
