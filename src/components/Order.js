import {
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Typography,
  Select,
  DatePicker,
  Layout,
  Button,
} from "antd";
import React from "react";

function Order() {
  return (
    <section className="order" style={{ textAlign: "center" }}>
      <Typography.Text className="sub-header">Order Now</Typography.Text>
      <Typography.Title className="header" level={3} style={{ margin: 0 }}>
        FREE AND FAST
      </Typography.Title>

      <Form
        layout="vertical"
        className="form"
        style={{ textAlign: "left", padding: "16px" }}
      >
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Layout style={{ background: "#fff" }}>
              <Form.Item label="Your Name">
                <Input placeholder="Enter your name ..." />
              </Form.Item>
              <Form.Item label="Your Order">
                <Input placeholder="Enter food name ..." />
              </Form.Item>
              <Form.Item label="How musch">
                <InputNumber
                  placeholder="How many orders"
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Form.Item label="Your Address">
                <Input.TextArea placeholder="Enter your address ..." />
              </Form.Item>
            </Layout>
          </Col>
          <Col xs={24} sm={12}>
            <Layout style={{ background: "#fff" }}>
              <Form.Item label="Your Name">
                <Input placeholder="Enter your name ..." />
              </Form.Item>
              <Form.Item label="Additional Food">
                <Select placeholder="Extra with food">
                  <Select.Option>One</Select.Option>
                  <Select.Option>Two</Select.Option>
                  <Select.Option>Three</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Date And Time">
                <DatePicker
                  showTime
                  format="DD-MM-YYYY HH:mm"
                  style={{ width: "100%" }}
                  placeholder="dd-mm-yyyyy --:--"
                />
              </Form.Item>
              <Form.Item label="Your Message">
                <Input.TextArea placeholder="Enter your message ..." />
              </Form.Item>
            </Layout>
          </Col>
        </Row>
        <Button className="btn">Order Now</Button>
      </Form>
    </section>
  );
}

export default Order;
