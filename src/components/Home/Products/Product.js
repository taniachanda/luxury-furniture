import React from 'react';
import './Product.css';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';

const Product = () => {
    const state = useSelector((state) => state.allProducts.products.slice(0, 20));

    console.log(state);


    return (
        <div className="container-fluid header-container">
            <div className="row d-flex justify-content-between align-items-center">
                {
                    state.map(product => <ProductList key={product.id} product={product}></ProductList>)
                }
            </div>
        </div>
    );
};

export default Product;