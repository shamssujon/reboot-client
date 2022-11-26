import { Button, Input, Typography, Radio } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Divider from "../components/Divider";
import { BsGoogle } from "react-icons/bs";

const SignUpPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// Login with email password
	const handleSignIn = (userInfo) => {
		// const email = userInfo.email;
		// const password = userInfo.password;
		console.log(userInfo);
	};

	return (
		<section className="py-10">
			<div className="container">
				<div className="border-accent-100 shadow-accent-100 mx-auto max-w-lg rounded-lg border bg-white p-8 shadow-md">
					<h3 className="mb-6 text-center text-3xl font-semibold">Sign Up</h3>
					<div className="flex items-center justify-center gap-2">
						<Button
							variant="outlined"
							className="flex items-center justify-center gap-2 text-base font-normal tracking-wide">
							<BsGoogle className="text-xl" />
							<span>Sign in with Google</span>
						</Button>
					</div>
					<Divider>OR</Divider>
					<form className="grid gap-4" onSubmit={handleSubmit(handleSignIn)}>
						<div className="grid gap-2">
							<Input
								size="lg"
								type="text"
								label="Full Name"
								className="text-base"
								{...register("name", {
									required: { value: true, message: "Required" },
								})}
							/>
							{errors.name && <p className="text-sm text-rose-500">{errors.name.message}</p>}
						</div>
						<div className="grid gap-2">
							<Input
								size="lg"
								type="email"
								label="Email"
								className="text-base"
								{...register("email", {
									required: { value: true, message: "Required" },
								})}
							/>
							{errors.email && <p className="text-sm text-rose-500">{errors.email.message}</p>}
						</div>
						<div className="grid gap-2">
							<Input
								size="lg"
								type="password"
								label="Password"
								className="text-base"
								{...register("password", {
									required: { value: true, message: "Required" },
								})}
							/>
							{errors.password && <p className="text-sm text-rose-500">{errors.password.message}</p>}
						</div>
						<div className="grid items-center md:grid-cols-2 md:gap-2">
							<Radio
								{...register("role")}
								id="buyer"
								name="role"
								label="I want to buy"
								value="buyer"
								defaultChecked
							/>
							<Radio
								{...register("role")}
								id="seller"
								name="role"
								label="I want to sell"
								value="seller"
							/>
						</div>
						<Button type="submit" fullWidth className="text-base font-normal tracking-wide">
							Sign Up
						</Button>
					</form>
					<Typography variant="small" className="mt-2 gap-1 text-center">
						<span>Don't have an account?</span>{" "}
						<Link className="" to={"/signin"}>
							<Button variant="text" size="sm" className="p-2 font-medium tracking-wide">
								Sign in
							</Button>
						</Link>
					</Typography>
				</div>
			</div>
		</section>
	);
};

export default SignUpPage;
