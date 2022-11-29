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
import MyProducts from "../pages/MyProducts";
import ProductCategories from "../pages/ProductCategories";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

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
				element: (
					<PrivateRoute>
						<ProductsPage></ProductsPage>
					</PrivateRoute>
				),
				loader: async ({ params }) => {
					return fetch(`${process.env.REACT_APP_SERVER_LIVE_URL}/products/${params.categorySlug}`);
				},
			},
			{
				path: "/products/product/:id",
				element: (
					<PrivateRoute>
						<ProductDetailsPage></ProductDetailsPage>
					</PrivateRoute>
				),
				loader: async ({ params }) => {
					return fetch(`${process.env.REACT_APP_SERVER_LIVE_URL}/product/${params.id}`);
				},
			},
		],
	},
	{
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<DashboardLayout></DashboardLayout>
			</PrivateRoute>
		),
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
				path: "/dashboard/myproducts",
				element: <MyProducts></MyProducts>,
			},
			{
				path: "/dashboard/addproduct",
				element: <AddProduct></AddProduct>,
			},
			{
				path: "/dashboard/allbuyers",
				element: (
					<AdminRoute>
						<AllBuyers></AllBuyers>
					</AdminRoute>
				),
			},
			{
				path: "/dashboard/allsellers",
				element: (
					<AdminRoute>
						<AllSellers></AllSellers>
					</AdminRoute>
				),
			},
			{
				path: "/dashboard/categories",
				element: (
					<AdminRoute>
						<ProductCategories></ProductCategories>
					</AdminRoute>
				),
			},
		],
	},
]);
