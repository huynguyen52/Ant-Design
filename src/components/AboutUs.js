import React from "react";
import { Button, Col, Row, Space, Tag, Typography } from "antd";
import { CarFilled, DollarCircleFilled, PhoneFilled } from "@ant-design/icons";

import aboutImg from "../images/about-img.png";

function AboutUs() {
  return (
    <section className="about-us">
      <Typography.Text className="sub-header">About Us</Typography.Text>
      <Typography.Title level={3} className="header" style={{ marginTop: 0 }}>
        WHY CHOOSE US ?
      </Typography.Title>
      <Row>
        <Col md={12}>
          <img src={aboutImg} alt="about us" />
        </Col>
        <Col md={12}>
          <div className="about-us-content">
            <Typography.Title level={2} className="about-us-title">
              Best Food In The Country
            </Typography.Title>
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
              neque quibusdam similique. Exercitationem, quidem dolorem! Saepe,
              veniam aut mollitia neque aliquam expedita, repudiandae autem,
              consectetur amet consequuntur cum minus assumenda.
            </Typography.Paragraph>
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              ducimus sunt consequatur nulla aspernatur temporibus rem cum et
              enim nemo.
            </Typography.Paragraph>
            <Space className="about-us-extra">
              <Tag style={{ background: "#eee" }} icon={<CarFilled />}>
                Free Delivery
              </Tag>
              <Tag style={{ background: "#eee" }} icon={<DollarCircleFilled />}>
                Easy Payments
              </Tag>
              <Tag style={{ background: "#eee" }} icon={<PhoneFilled />}>
                24/7 Services
              </Tag>
            </Space>
            <Button size="large" className="btn" style={{ marginTop: 20 }}>
              Learn More
            </Button>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default AboutUs;
