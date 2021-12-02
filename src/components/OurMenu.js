import { Col, Row, Typography } from "antd";
import React from "react";
import Product from "./Product";

function OurMenu() {
  return (
    <section className="our-menu" style={{ textAlign: "center" }}>
      <Typography.Text strong level={5} className="sub-header">
        Our Menu
      </Typography.Text>
      <Typography.Title style={{ marginTop: 0 }} level={3} className="header">
        TODAY'S SPECIALITY
      </Typography.Title>
      <Row gutter={[16, 16]}>
        {new Array(12).fill(null).map((_, index) => (
          <Col key={index} sm={12} md={8}>
            <Product
              title="Delicious Food"
              price="$12.99"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default OurMenu;
