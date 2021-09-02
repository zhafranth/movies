import React from "react";

import Search from "../../atoms/Search";
import { MainHeader, Content, BgImage } from "./style";

// Image
import BgImg from "../../../assets/images/bg-header.png";

const Header = () => {
  return (
    <MainHeader>
      <BgImage src={BgImg} alt="background image" />
      <Content>
        <h3>
          Movie <span>Database</span>
        </h3>
        <p>
          Mudah di akses kapan saja dan dimana saja. Tanpa berlangganan. Tanpa
          berlangganan.{" "}
        </p>
        <Search />
      </Content>
    </MainHeader>
  );
};

export default Header;
