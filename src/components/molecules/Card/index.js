import React from "react";
import { useHistory } from "react-router-dom";

// Child Components
import { MainCard, ImgCard, InfoCard } from "./style";

// Images
// import DummyCover from "../../../assets/images/dummy-cover-card.png";

const Card = ({ data }) => {
  const { Poster, Title, Year, imdbID } = data;
  const history = useHistory();
  return (
    <MainCard onClick={() => history.push(`/movie/${imdbID}`)}>
      <ImgCard src={Poster} alt="cover card" />
      <InfoCard className="info-card">
        <h3>{Title}</h3>
        <p>{Year}</p>
      </InfoCard>
    </MainCard>
  );
};

export default Card;
