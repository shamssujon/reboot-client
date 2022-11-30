import React from "react";
import { ImSpinner9 } from "react-icons/im";

const PageSpinner = () => {
	return (
		<div className="fixed inset-0 grid h-full w-full place-content-center bg-white/80 transition z-50">
			<ImSpinner9 className="animate-spin text-5xl text-blue-500" />
		</div>
	);
};

export default PageSpinner;
