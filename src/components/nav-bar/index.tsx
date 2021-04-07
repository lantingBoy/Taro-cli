/* eslint-disable jsx-quotes */
import { View, Text } from "@tarojs/components";
import React from "react";
import "./index.less";

interface INavBar {
  current: number;
}

const navList = [
  {
    name: "首页",
    key: "1",
    icon: "iconb3",
  },
  {
    name: "全部商品",
    key: "2",
    icon: "iconb3",
  },
  {
    name: "购物车",
    key: "3",
    icon: "iconb3",
  },
  {
    name: "个人中心",
    key: "4",
    icon: "iconb3",
  },
];
const NavBar: React.FC<INavBar> = (props) => {
  const { current } = props;

  return (
    <View className="navbar-wrap g-flex ">
      {navList.map((nav, index) => (
        <View
          className={`${current === index ? "active" : ""} navbar-item g-flex-c1 g-tac`}
          key={nav.key}
        >
            <Text className="iconfont iconb3 s-fs-28"></Text>
            <View>{nav.name}</View>
        </View>
      ))}
    </View>
  );
};

export default NavBar;
