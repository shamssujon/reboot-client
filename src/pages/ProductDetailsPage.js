import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetailsPage = () => {
    const productData = useLoaderData();
    console.log(productData);
    
    return (
        <div>
            Product Details
        </div>
    );
};

export default ProductDetailsPage;