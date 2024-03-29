import React from "react";
import Campaigns from "../../components/ui/Campaigns";
import Header from "../../components/layout/Header";
import Carousel from "../../components/ui/Carousel";
import MenuWrapper from "../../components/products/MenuWrapper";
import About from "../../components/ui/About";
import Reservation from "../../components/ui/Reservation";

const Index = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper/>
      <About/>
      <Reservation/>
    </div>
  );
};

export default Index;
