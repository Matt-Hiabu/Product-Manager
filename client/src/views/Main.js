import React, {useState} from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = (props) => {
    const [product, setProduct] = useState([]);

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId)); //We could also write this in our productList component
    }

    return (
        <div className="Main">
            <ProductForm product={product} setProduct={setProduct} />
            <ProductList product={product} setProduct={setProduct} removeFromDom={removeFromDom}/>
        </div>
        );
    }
    export default Main;