import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import AllBuyers from "../pages/AllBuyers";
import DashboardPage from "../pages/DashboardPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: "*",
				element: <ErrorPage></ErrorPage>,
			},
			{
				path: "/",
				element: <HomePage></HomePage>,
			},
			{
				path: "/signin",
				element: <SignInPage></SignInPage>,
			},
			{
				path: "/signup",
				element: <SignUpPage></SignUpPage>,
			},
		],
	},
	{
		path: "/dashboard",
		element: <DashboardLayout></DashboardLayout>,
		children: [
			{
				path: "/dashboard",
				element: <DashboardPage></DashboardPage>,
			},
			{
				path: "/dashboard/allbuyers",
				element: <AllBuyers></AllBuyers>,
			},
		],
	},
]);
