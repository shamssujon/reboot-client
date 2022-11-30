import { Button, IconButton, Tooltip, Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { BsClockHistory, BsGeoAlt, BsHeart, BsPerson, BsSuitHeart } from "react-icons/bs";
import { AuthContext } from "../contexts/AuthProvider";

const ProductDetails = ({ productData, modalHandler }) => {
	const { _id, title, image, price, condition, usedFor, postingDate, description, seller } = productData;
	const { user } = useContext(AuthContext);

	const handleWishlist = (product) => {
		const wishlistProduct = {
			productId: product._id,
			productTitle: product.title,
			productImage: product.image,
			productPrice: product.price,
			buyerName: user.displayName,
			buyerEmail: user.email,
			wishlistDate: "",
		};

		// Send order to server to save in DB
		axios({
			method: "POST",
			url: `${process.env.REACT_APP_SERVER_LIVE_URL}/wishlist`,
			data: wishlistProduct,
		})
			.then((res) => {
				console.log(res.data);
				if (res.data.acknowledged) {
					toast.success("Product added to wishlist");
				}
			})
			.catch((error) => {
				toast.error(error);
				console.error(error);
			});
	};

	return (
		<div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
			<div className="image aspect-4/3 overflow-hidden lg:col-span-7">
				<img src={image} alt="" className="block h-full w-full rounded-lg object-cover" />
			</div>
			<div className="lg:col-span-5">
				<div className="mb-2 flex flex-wrap items-center justify-between gap-4">
					<p className="flex items-center gap-1">
						<BsGeoAlt />
						<span>{seller.location}</span>
					</p>
					<p className="flex items-center gap-1">
						<BsClockHistory />
						<span>{postingDate.split("T")[0]}</span>
					</p>
				</div>
				<Typography variant="h4" className="mb-2">
					{title}
				</Typography>
				<p className="mb-4 flex items-center gap-1">
					<BsPerson />
					<span className="capitalize">{seller.name}</span>
				</p>
				<div className="mb-4">
					<p className="mb-4 text-lg">{description}</p>
					<ul className="grid gap-2">
						<li className="flex items-center gap-2">
							<span className="min-w-[80px] font-normal">Condition:</span>
							<span>{condition}</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="min-w-[80px] font-normal">User for:</span>
							<span>{usedFor}</span>
						</li>
					</ul>
				</div>
				<Typography variant="h4" className="mb-4 font-normal text-blue-500">
					<span className="text-base font-light">TK</span> {price}
				</Typography>
				<div className="flex flex-wrap items-center gap-4">
					<Button onClick={modalHandler} size="lg" className="flex-1 text-base font-normal tracking-wider">
						Order now
					</Button>
					<Tooltip content="Add to wishlist" className="shrink-0">
						<IconButton onClick={() => handleWishlist(productData)} size="lg" variant="outlined">
							<BsSuitHeart className="text-2xl" />
						</IconButton>
					</Tooltip>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
