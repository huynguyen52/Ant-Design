import React from "react";
import { Layout, Menu, List, Typography, Avatar } from "antd";
import { SearchOutlined, HeartFilled, ShoppingFilled } from "@ant-design/icons";

import "antd/dist/antd.css";
import "./App.css";
import AboutUs from "./components/AboutUs";
import OurDishes from "./components/OurDishes";
import CarouselSlider from "./components/CarouselSlider";
import OurMenu from "./components/OurMenu";
import Review from "./components/Review";
import Order from "./components/Order";
function App() {
  const icons = [
    {
      icon: <SearchOutlined />,
    },
    {
      icon: <HeartFilled />,
    },
    {
      icon: <ShoppingFilled />,
    },
  ];

  return (
    <Layout className="App" style={{ background: "transparent" }}>
      <Layout.Header id="header">
        <Typography.Link className="logo" href="/">
          LOGO
        </Typography.Link>

        <Menu
          style={{ minWidth: "500px", borderBottom: 0 }}
          mode="horizontal"
          defaultSelectedKeys="home"
          className="menu"
        >
          <Menu.Item className="menu-item" key="home">
            Home
          </Menu.Item>
          <Menu.Item className="menu-item" key="dishes">
            Dishes
          </Menu.Item>
          <Menu.Item className="menu-item" key="about">
            About
          </Menu.Item>
          <Menu.Item className="menu-item" key="menu">
            Menu
          </Menu.Item>
          <Menu.Item className="menu-item" key="review">
            Review
          </Menu.Item>
          <Menu.Item className="menu-item" key="order">
            Order
          </Menu.Item>
        </Menu>

        <List
          className="icons"
          grid={{ gutter: 8 }}
          dataSource={icons}
          renderItem={(item) => (
            <List.Item style={{ margin: 0 }}>
              <Typography.Link href="/">
                <Avatar
                  className="icon"
                  icon={item.icon}
                  size={22}
                  style={{}}
                />
              </Typography.Link>
            </List.Item>
          )}
        />
      </Layout.Header>
      <Layout.Content id="main">
        <CarouselSlider />
        <OurDishes />
        <AboutUs />
        <OurMenu />
        <Review />
        <Order />
      </Layout.Content>
      <Layout.Footer id="footer"></Layout.Footer>
    </Layout>
  );
}

export default App;
