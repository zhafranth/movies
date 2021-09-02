import React from "react";
import { useHistory } from "react-router-dom";

// Child Components
import { MainCard, ImgCard, InfoCard } from "./style";

// Images
import DummyCover from "../../../assets/images/dummy-cover-card.png";

const Card = () => {
  const history = useHistory();
  return (
    <MainCard onClick={() => history.push("/movie/batman")}>
      <ImgCard src={DummyCover} alt="cover card" />
      <InfoCard className="info-card">
        <h3>Batman Returns</h3>
        <p>2007</p>
      </InfoCard>
    </MainCard>
  );
};

export default Card;
