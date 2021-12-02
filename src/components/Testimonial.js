import { AliwangwangFilled } from "@ant-design/icons";
import { Avatar, Card, Rate } from "antd";
import React from "react";

function Testimonial({ image }) {
  return (
    <Card
      style={{ textAlign: "left" }}
      className="testimonial"
      title={
        <Card.Meta
          style={{ display: "flex", alignItems: "center" }}
          avatar={<Avatar size={60} src={image}></Avatar>}
          title="John Deo"
          description={
            <Rate allowHalf defaultValue={4.5} className="testimonial-rate" />
          }
        />
      }
      extra={<AliwangwangFilled className="testimonial-icon" />}
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt odio quasi
      aliquid deleniti illum consequatur, enim repellat eaque quos laudantium
      minus saepe pariatur voluptatibus debitis eum? Maiores repudiandae sit
      magnam.
    </Card>
  );
}

export default Testimonial;
