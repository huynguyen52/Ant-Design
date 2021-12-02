import React from "react";
import { Typography, Row, Col } from "antd";
import Product from "./Product";

function OurDishes() {
  return (
    <section className="our-dish">
      <Typography.Text strong level={5} className="sub-header">
        Our Dishes
      </Typography.Text>
      <Typography.Title style={{ marginTop: 0 }} level={3} className="header">
        Popular Dishes
      </Typography.Title>
      <Row gutter={[16, 16]}>
        {new Array(12).fill(null).map((_, index) => (
          <Col key={index} sm={8} md={6}>
            <Product title="Delicious Food" price="$12.99" />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default OurDishes;
