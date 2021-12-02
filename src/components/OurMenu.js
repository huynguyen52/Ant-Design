import { Col, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

function OurMenu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="our-menu" style={{ textAlign: "center" }}>
      <Typography.Text strong level={5} className="sub-header">
        Our Menu
      </Typography.Text>
      <Typography.Title style={{ marginTop: 0 }} level={3} className="header">
        TODAY'S SPECIALITY
      </Typography.Title>
      <Row gutter={[16, 16]}>
        {products.map((prod, index) => (
          <Col key={index} sm={12} md={8}>
            <Product
              title="Delicious Food"
              price="$12.99"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image={prod.image}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default OurMenu;
