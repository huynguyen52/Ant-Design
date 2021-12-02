import { Typography, Carousel } from "antd";
import React from "react";
import Testimonial from "./Testimonial";

import img1 from "../images/pic-1.png";
import img2 from "../images/pic-2.png";
import img3 from "../images/pic-3.png";
import img4 from "../images/pic-4.png";

function Review() {
  const data = [img1, img2, img3, img4];
  return (
    <section className="review" style={{ textAlign: "center" }}>
      <Typography.Text className="sub-header">
        Customer's Review
      </Typography.Text>
      <Typography.Title className="header" style={{ margin: 0 }} level={3}>
        WHAT THEY SAY
      </Typography.Title>
      <Carousel
        slidesToShow={3}
        draggable
        dots={false}
        responsive={[
          { breakpoint: 824, settings: { slidesToShow: 2 } },
          { breakpoint: 575, settings: { slidesToShow: 1 } },
        ]}
      >
        {data.map((item, index) => (
          <Testimonial image={item} key={index} />
        ))}
      </Carousel>
    </section>
  );
}

export default Review;
