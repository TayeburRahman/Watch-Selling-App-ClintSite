import React from 'react';
import Products from '../Product/Products';
import ShopByCategories from '../Product/ShopByCategories/ShopByCategories';
import Costomheader from '../Sheard/Costomheader';
import Header from '../Sheard/Header';

const ProductCalection = () => {
    return (
        <>
            <Costomheader></Costomheader>
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <ShopByCategories></ShopByCategories>
                </div>
                <div className="col-md-9 col-sm-12">
                    <Products></Products>
                </div>
            </div>
        </>
    );
};

export default ProductCalection;