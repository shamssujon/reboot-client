import { Button, Input, Radio, Typography } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Divider from "../components/Divider";
import PageSpinner from "../components/PageSpinner";
import { AuthContext } from "../contexts/AuthProvider";

const SignUpPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const { createUser, updateUserProfile, loginwithGoogle } = useContext(AuthContext);

	const [signUpLoading, setSignUpLoading] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	// Create user with email password
	const handleSignUp = (userInfo) => {
		const name = userInfo.name;
		const email = userInfo.email;
		const password = userInfo.password;
		const role = userInfo.role;
		setSignUpLoading(true);

		// Create user
		createUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);

				// Update user name
				updateUserProfile(name)
					.then(() => {
						// Save user to DB
						saveUserToDb(name, email, role);
					})
					.catch((error) => {
						console.error(error);
						toast.error(error.message);
						setSignUpLoading(false);
					});
			})
			.catch((error) => {
				console.error(error);
				toast.error(error.message);
				setSignUpLoading(false);
			});
	};

	// Send user to server to save to DB
	const saveUserToDb = (name, email, role) => {
		const newUser = { name, email, role };

		fetch("http://localhost:9000/users", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newUser),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.acknowledged) {
					toast.success("Account created successfully");
					setSignUpLoading(false);
					reset();
					// Navigate user back to where they came from
					navigate(from, { replace: true });
				} else {
					toast.error(data.message);
				}
			})
			.catch((error) => {
				console.error(error);
				toast.error(error.message);
				setSignUpLoading(false);
			});
	};

	// Google login
	const handleGoogleLogin = () => {
		loginwithGoogle()
			.then((result) => {
				const user = result.user;
				const name = user.displayName;
				const email = user.email;
				const role = "buyer";

				// Save Google user to DB
				saveGoogleUserToDb(name, email, role);
			})
			.catch((error) => {
				console.error(error);
				toast.error(error.message);
				setSignUpLoading(false);
			});
	};

	// Send user to server to save to DB
	const saveGoogleUserToDb = (name, email, role) => {
		const newUser = { name, email, role };

		fetch("http://localhost:9000/users", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newUser),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);

				if (data.acknowledged) {
					toast.success("Account created successfully with Google");
				} else {
                    toast.success("Signed in with Google");
                }
             
				// Navigate user back to where they came from
				navigate(from, { replace: true });
			})
			.catch((error) => {
				console.error(error);
				setSignUpLoading(false);
			});
	};

	return (
		<section className="py-10">
			<div className="container">
				<div className="border-accent-100 shadow-accent-100 mx-auto max-w-lg rounded-lg border bg-white p-8 shadow-md">
					<h3 className="mb-6 text-center text-3xl font-semibold">Sign Up</h3>
					<div className="flex items-center justify-center gap-2">
						<Button
							onClick={handleGoogleLogin}
							variant="outlined"
							className="flex items-center justify-center gap-2 text-base font-normal tracking-wide">
							<BsGoogle className="text-xl" />
							<span>Sign in with Google</span>
						</Button>
					</div>
					<Divider>OR</Divider>
					<form className="grid gap-4" onSubmit={handleSubmit(handleSignUp)}>
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
						<span>Already have an account?</span>{" "}
						<Link className="" to={"/signin"}>
							<Button variant="text" size="sm" className="p-2 font-medium tracking-wide">
								Sign in
							</Button>
						</Link>
					</Typography>
				</div>
			</div>

			{/* Show spinner when user signing up */}
			{signUpLoading && <PageSpinner></PageSpinner>}
		</section>
	);
};

export default SignUpPage;
