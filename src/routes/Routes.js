import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import AddProduct from "../pages/AddProduct";
import AllBuyers from "../pages/AllBuyers";
import AllSellers from "../pages/AllSellers";
import DashboardPage from "../pages/DashboardPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import MyOrders from "../pages/MyOrders";
import ProductCategories from "../pages/ProductCategories";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage";
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
			{
				path: "/products",
				element: <ProductsPage></ProductsPage>,
				loader: async () => {
					return fetch(`${process.env.REACT_APP_SERVER_LIVE_URL}/products`);
				},
			},
			{
				path: "/products/:categorySlug",
				element: <ProductsPage></ProductsPage>,
				loader: async ({ params }) => {
					return fetch(`${process.env.REACT_APP_SERVER_LIVE_URL}/products/${params.categorySlug}`);
				},
			},
			{
				path: "/products/product/:id",
				element: <ProductDetailsPage></ProductDetailsPage>,
				loader: async ({ params }) => {
					return fetch(`${process.env.REACT_APP_SERVER_LIVE_URL}/product/${params.id}`);
				},
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
				path: "/dashboard/myorders",
				element: <MyOrders></MyOrders>,
			},
			{
				path: "/dashboard/addproduct",
				element: <AddProduct></AddProduct>,
			},
			{
				path: "/dashboard/allbuyers",
				element: <AllBuyers></AllBuyers>,
			},
			{
				path: "/dashboard/allsellers",
				element: <AllSellers></AllSellers>,
			},
			{
				path: "/dashboard/categories",
				element: <ProductCategories></ProductCategories>,
			},
		],
	},
]);
