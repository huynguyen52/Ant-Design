import { Col, Row, Typography, List } from "antd";
import React from "react";

function Footer() {
  return (
    <section className="footer">
      <Row>
        <Col xs={12} sm={8} md={6}>
          <div className="footer-col">
            <Typography.Title level={4} className="footer-title">
              Locations
            </Typography.Title>
            <List>
              <List.Item className="footer-link">
                <Typography.Link>India</Typography.Link>
              </List.Item>
              <List.Item className="footer-link">
                <Typography.Link>Japan</Typography.Link>
              </List.Item>
              <List.Item className="footer-link">
                <Typography.Link>Russia</Typography.Link>
              </List.Item>
              <List.Item className="footer-link">
                <Typography.Link>USA</Typography.Link>
              </List.Item>
              <List.Item className="footer-link">
                <Typography.Link>France</Typography.Link>
              </List.Item>
            </List>
          </div>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <div className="footer-col">
            <Typography.Title level={4} className="footer-title">
              Quick Links
            </Typography.Title>
            <List>
              <List.Item className="footer-link">
                <Typography.Link>Home</Typography.Link>
              </List.Item>
              <List.Item className="footer-link">
                <Typography.Link>Dishes</Typography.Link>
              </List.Item>
              <List.Item className="footer-link">
                <Typography.Link>About</Typography.Link>
              </List.Item>
              <List.Item className="footer-link">
                <Typography.Link>Menu</Typography.Link>
              </List.Item>
              <List.Item className="footer-link">
                <Typography.Link>Review</Typography.Link>
              </List.Item>
              <List.Item className="footer-link">
                <Typography.Link>Order</Typography.Link>
              </List.Item>
            </List>
          </div>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <div className="footer-col">
            <Typography.Title level={4} className="footer-title">
              Contact Info
            </Typography.Title>
            <List>
              <List.Item className="footer-link">
                <Typography.Link>+123-456-7890</Typography.Link>
              </List.Item>
              <List.Item className="footer-link">
                <Typography.Link>+111-222-3333</Typography.Link>
              </List.Item>
              <List.Item className="footer-link">
                <Typography.Link>somebody@mail.com</Typography.Link>
              </List.Item>
              <List.Item className="footer-link">
                <Typography.Link>example@mail.com</Typography.Link>
              </List.Item>
              <List.Item className="footer-link">
                <Typography.Link>Somewhere, NY - 1234</Typography.Link>
              </List.Item>
            </List>
          </div>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <div className="footer-col">
            <Typography.Title level={4} className="footer-title">
              Follow Us
            </Typography.Title>
            <List>
              <List.Item className="footer-link">
                <Typography.Link>Facebook</Typography.Link>
              </List.Item>
              <List.Item className="footer-link">
                <Typography.Link>Twitter</Typography.Link>
              </List.Item>
              <List.Item className="footer-link">
                <Typography.Link>Instagram</Typography.Link>
              </List.Item>
              <List.Item className="footer-link">
                <Typography.Link>Linkedin</Typography.Link>
              </List.Item>
            </List>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Footer;
