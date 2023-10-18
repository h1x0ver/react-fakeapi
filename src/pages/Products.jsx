import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [limit, setLimit] = useState(20); // Установите здесь ваш лимит

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((resp) => setProduct(resp.data));
  }, []);
  const limitedProducts = product.slice(12, limit);

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
        {limitedProducts &&
          limitedProducts.map((e) => {
            return (
              <div onClick={() => navigate(`/product-detail/${e.id}`)} className="col-lg-4 col-md-6 sol-sm-12">
                <Card title={e.title} price={e.price} imgSrc={e.image} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
