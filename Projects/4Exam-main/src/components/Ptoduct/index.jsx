import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";
import NewCard from "../UI/Cards/NewCard";
import data from "../../db";
import { useState } from "react";
import "./style.scss";

const items = [
  {
    label: "title",
    key: "1",
  },
  {
    label: "price",
    key: "2",
  },
];

const index = () => {
  const { Products } = data;

  const [toggle, setToggle] = useState(false);

  return (
    <section id="products">
      <div className="container">
        <div className="wrapper">
          <Breadcrumb
            className="mb-[40px]"
            items={[
              {
                title: (
                  <NavLink className="link1 text-[12px] leading-[16px]" to="/">
                    Home
                  </NavLink>
                ),
              },

              {
                title: "Plants",
              },
            ]}
          />
          <h2 className="text-[32px] font-medium leading-[38px] mb-[40px]">
            All Plants
          </h2>
          <div className="flex items-center justify-between mb-[60px]">
            <div className="flex items-center gap-[80px] ">
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <Space className="text-[14px] leading-[20px]">
                  Sort by
                  <DownOutlined />
                </Space>
              </Dropdown>

              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <Space className="text-[14px] leading-[20px]">
                  Color
                  <DownOutlined />
                </Space>
              </Dropdown>

              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <Space className="text-[14px] leading-[20px]">
                  Price
                  <DownOutlined />
                </Space>
              </Dropdown>

              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <Space className="text-[14px] leading-[20px]">
                  Flower type
                  <DownOutlined />
                </Space>
              </Dropdown>

              <Dropdown
                menu={{
                  items,
                }}
              >
                <Space className="text-[14px] leading-[20px]">
                  Occasion
                  <DownOutlined />
                </Space>
              </Dropdown>
            </div>
            <p className="text-[16px] leading-[24px]">16 items</p>
          </div>

          <ul className="list flex flex-wrap gap-[40px] items-center justify-between mb-[40px]">
            {toggle
              ? Products.length &&
                Products.map((el, index) => {
                  return <NewCard key={index} state={el} />;
                })
              : Products.length &&
                Products.slice(0, 8).map((el, index) => {
                  return <NewCard key={index} state={el} />;
                })}
          </ul>
          <div className=" flex justify-center mb-[100px]">
            <button
              onClick={() => setToggle(!toggle)}
              className="w-[223px] rounded-lg py-[15px] px-[17px] bg-black text-white  text-[14px] font-medium leading-[17px]"
            >
              See more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
