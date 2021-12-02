import React from "react";
import { Carousel, Row, Col, Typography, Button } from "antd";

function CarouselSlider() {
  return (
    <Carousel
      autoplay
      className="carousel"
      dots={{ className: "carousel-nav" }}
      draggable
    >
      <div className="carousel-item">
        <Row>
          <Col md={14}>
            <div className="carousel-content">
              <Typography.Text
                className="carousel-sub-title"
                style={{ fontSize: 25 }}
              >
                Our Spencial Dish
              </Typography.Text>
              <Typography.Title
                style={{ margin: 0, fontSize: 70 }}
                className="carousel-title"
                level={1}
              >
                Fried Chicken
              </Typography.Title>
              <Typography.Text className="carousel-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, quia esse! Repellendus amet maxime dolorem dolorum
                exercitationem. Alias, iure quidem.
              </Typography.Text>
              <Button style={{ marginTop: 20 }} size="medium" className="btn">
                Order Now
              </Button>
            </div>
          </Col>
          <Col md={10}>
            <div className="image">
              <img
                src="https://image.freepik.com/free-photo/crispy-fried-chicken-wooden-cutting-board_1150-20220.jpg"
                alt="fried
                  chicken"
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className="carousel-item">
        <Row>
          <Col md={14}>
            <div className="carousel-content">
              <Typography.Text
                className="carousel-sub-title"
                style={{ fontSize: 25 }}
              >
                Our Spencial Dish
              </Typography.Text>
              <Typography.Title
                style={{ margin: 0, fontSize: 70 }}
                className="carousel-title"
                level={1}
              >
                Fried Chicken
              </Typography.Title>
              <Typography.Text className="carousel-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, quia esse! Repellendus amet maxime dolorem dolorum
                exercitationem. Alias, iure quidem.
              </Typography.Text>
              <Button style={{ marginTop: 20 }} size="medium" className="btn">
                Order Now
              </Button>
            </div>
          </Col>
          <Col md={10}>
            <div className="image">
              <img
                src="https://image.freepik.com/free-photo/crispy-fried-chicken-wooden-cutting-board_1150-20220.jpg"
                alt="fried
                  chicken"
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className="carousel-item">
        <Row>
          <Col md={14}>
            <div className="carousel-content">
              <Typography.Text
                className="carousel-sub-title"
                style={{ fontSize: 25 }}
              >
                Our Spencial Dish
              </Typography.Text>
              <Typography.Title
                style={{ margin: 0, fontSize: 70 }}
                className="carousel-title"
                level={1}
              >
                Fried Chicken
              </Typography.Title>
              <Typography.Text className="carousel-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, quia esse! Repellendus amet maxime dolorem dolorum
                exercitationem. Alias, iure quidem.
              </Typography.Text>
              <Button style={{ marginTop: 20 }} size="medium" className="btn">
                Order Now
              </Button>
            </div>
          </Col>
          <Col md={10}>
            <div className="image">
              <img
                src="https://image.freepik.com/free-photo/crispy-fried-chicken-wooden-cutting-board_1150-20220.jpg"
                alt="fried
                  chicken"
              />
            </div>
          </Col>
        </Row>
      </div>
    </Carousel>
  );
}

export default CarouselSlider;
