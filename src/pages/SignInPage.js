import { Button, Input, Typography } from "@material-tailwind/react";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Divider from "../components/Divider";
import { BsGoogle } from "react-icons/bs";
import { AuthContext } from "../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const SignInPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";
	const { login, loginwithGoogle } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// Login with email password
	const handleSignIn = (userInfo) => {
		const email = userInfo.email;
		const password = userInfo.password;
		console.log(email, password);

		login(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				toast.success("Logged in successfully");

				// Navigate user back to where they came from
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.error(error);
				toast.error(error.message);
			});
	};

	return (
		<section className="py-10">
			<div className="container">
				<div className="border-accent-100 shadow-accent-100 mx-auto max-w-lg rounded-lg border bg-white p-8 shadow-md">
					<h3 className="mb-6 text-center text-3xl font-semibold">Sign in</h3>
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
							<div className="-m-1 flex items-center justify-end">
								<Button
									variant="text"
									size="sm"
									className="p-1 font-normal tracking-wide text-blue-gray-600 hover:text-blue-500">
									Forgot Password?
								</Button>
							</div>
						</div>
						<Button type="submit" fullWidth className="text-base font-normal tracking-wide">
							Sign in
						</Button>
					</form>
					<Typography variant="small" className="mt-2 gap-1 text-center">
						<span>Don't have an account?</span>{" "}
						<Link className="" to={"/signup"}>
							<Button variant="text" size="sm" className="p-2 font-medium tracking-wide">
								Sign up
							</Button>
						</Link>
					</Typography>
				</div>
			</div>
		</section>
	);
};

export default SignInPage;
