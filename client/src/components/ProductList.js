import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const {removeFromDom, product, setProduct} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
        .then((res)=>{
            console.log(res.data);
                setProduct(res.data);
        })
            .catch((err)=>{
                console.log(err);
            })
    }, []);

    const deleteProduct = (personId) => {
        axios.delete('http://localhost:8000/api/product/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
            .catch(err => console.log(err))
    }

    return (
    <div className="ProductList">
        <p>All Products:</p>
        {
                product.map((product, index)=>{
                    return (
                        <div key={index}> 
                            <Link to={`/${product._id}`}> {product.title} </Link>
                            <Link to={"/edit/" + product._id}> Edit </Link>
                            <button onClick={(e)=>{deleteProduct(product._id)}}>
                            Delete </button>
                        </div> 
                    )})
            }
        </div>
    );
}
export default ProductList;