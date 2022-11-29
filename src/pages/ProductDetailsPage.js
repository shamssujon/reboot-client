import { Breadcrumbs } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BookingModal from "../components/BookingModal";
import ProductDetails from "../components/ProductDetails";

const ProductDetailsPage = () => {
	const productData = useLoaderData();

	const [openModal, setOpenMadal] = useState(false);
	const handleOpenModal = () => setOpenMadal(!openModal);

	return (
		<>
			<section className="py-10 lg:py-20">
				<div className="container">
					<Breadcrumbs className="mb-6 border border-slate-300 bg-slate-200">
						<Link to={"/"} className="uppercase opacity-60">
							Home
						</Link>
						<Link to={"/products"} className="uppercase opacity-60">
							Products
						</Link>
						<Link to={`/products/${productData.category}`} className="uppercase">
							{productData.category}
						</Link>
					</Breadcrumbs>
					<ProductDetails productData={productData} modalHandler={handleOpenModal}></ProductDetails>
				</div>
			</section>

			{/* Booking modal */}
			<BookingModal openModal={openModal} modalHandler={handleOpenModal} productData={productData}></BookingModal>
		</>
	);
};

export default ProductDetailsPage;
