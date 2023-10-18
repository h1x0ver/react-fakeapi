import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(response => setProduct(response.data));
  }, [id]);
  console.log(product);
  return(
    <div>
        {
            product && (
                <div>
                    <p>{product.title}</p>
                    <img src={product.image} alt="" />
                    <p>{product.price}</p>
                </div>
            )
        }
    </div>
  )
};

export default ProductDetail;
