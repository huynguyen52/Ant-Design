import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Row, Col } from "antd";
import Product from "./Product";

function OurDishes() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="our-dish">
      <Typography.Text strong level={5} className="sub-header">
        Our Dishes
      </Typography.Text>
      <Typography.Title style={{ marginTop: 0 }} level={3} className="header">
        Popular Dishes
      </Typography.Title>
      <Row gutter={[16, 16]}>
        {products.map((prod, index) => (
          <Col key={index} sm={8} md={6}>
            <Product title="Delicious Food" price="$12.99" image={prod.image} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default OurDishes;
