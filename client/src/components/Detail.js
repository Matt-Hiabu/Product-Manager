import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";

const Detail = (props) => {

    const navigate = useNavigate();

    const [product, setProduct] = useState({})
    const {id} = useParams(); 

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err) );
    }, []);

    const deleteProduct = (personId) => {
        
        axios.delete('http://localhost:8000/api/product/' + personId)
            .then(res => {
                console.log(res)
                console.log(res.data)
                navigate("/");
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={(e)=>{deleteProduct(product._id)}}> Delete </button>
        </div>
    );
}
export default Detail;