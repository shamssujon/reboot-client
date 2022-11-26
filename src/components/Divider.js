import React from "react";

const Divider = ({ children }) => {
	return (
		<div className="my-6 whitespace-nowrap flex items-center gap-4 text-sm font-semibold uppercase before:h-px before:w-full before:bg-slate-200 before:content-[''] after:h-px after:w-full after:bg-slate-200 after:content-['']">
			{children}
		</div>
	);
};

export default Divider;
