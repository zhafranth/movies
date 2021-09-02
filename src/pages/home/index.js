import React from "react";

// Depen
import { useSelector } from "react-redux";

// Components
import { Header, Card } from "../../components";
// Child Components
import { Main, Content, SearchText, ListCard } from "./style";

const Home = () => {
  const { loading } = useSelector((state) => state.globalReducer);
  return (
    <Main>
      <Header />
      <Content>
        <SearchText>
          <p>Pencarian Anda</p>
          <h3>"Batman"</h3>
        </SearchText>
        <ListCard>
          <Card />
          <Card />
          <Card />
          <Card />
        </ListCard>
      </Content>
    </Main>
  );
};

export default Home;
