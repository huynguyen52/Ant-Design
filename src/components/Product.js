import React from "react";
import { Avatar, Button, Card, Rate, Space, Typography } from "antd";
import { EyeFilled, HeartFilled } from "@ant-design/icons";

function Product({
  title,
  price,
  desc,
  image = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
}) {
  return (
    <Card
      className={desc ? "card card-special" : "card"}
      cover={<img src={image} alt="chicken" />}
    >
      <Card.Meta title={title} description={desc} className="card-meta" />
      <Rate
        style={{ fontSize: 16 }}
        className="card-rate"
        allowHalf
        defaultValue={4.5}
      />
      <Space size={12} className="card-cta">
        <Typography.Text strong className="card-price">
          {price}
        </Typography.Text>
        <Button className="btn" size="large">
          Add to Cart
        </Button>
      </Space>
      <Avatar
        className="card-icon card-icon--left"
        icon={<EyeFilled />}
        size={{ md: 40 }}
      />
      <Avatar
        className="card-icon card-icon--right"
        icon={<HeartFilled />}
        size={{ md: 40 }}
      />
    </Card>
  );
}

export default Product;
