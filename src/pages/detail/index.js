import React from "react";
import { Link } from "react-router-dom";

// Child components
import {
  MainDetail,
  Header,
  Content,
  ImgWrapper,
  ImgCover,
  InfoMovie,
  Title,
  Rate,
  SubInfo,
  InfoDetail,
  Plot,
  BgImage,
} from "./style";

// Images
import DummyCover from "../../assets/images/dummy-cover-big.png";

const Detail = () => {
  return (
    <MainDetail>
      <Header>
        <Link to="/">
          Movie <span>Database</span>
        </Link>
      </Header>
      <BgImage>
        <div className="white-gradient"></div>
        <img src={DummyCover} alt="background blur cover" />
      </BgImage>
      <Content>
        <ImgWrapper>
          <ImgCover src={DummyCover} alt="cover poster" />
        </ImgWrapper>
        <InfoMovie>
          <Title>Batman Returns</Title>
          <Rate>
            <p>4.6/10</p>
          </Rate>
          <SubInfo>
            <div className="subinfo-item">
              <p>Runtime</p>
              <h4>126 min</h4>
            </div>
            <div className="subinfo-item">
              <p>Released</p>
              <h4>23 Jun 1989</h4>
            </div>
            <div className="subinfo-item">
              <p>Genre</p>
              <h4>Action, Adventure</h4>
            </div>
          </SubInfo>
          <Plot>
            <h4>Plot</h4>
            <p>
              The Dark Knight of Gotham City begins his war on crime with his
              first major enemy being Jack Napier, a criminal who becomes the
              clownishly homicidal Joker.
            </p>
          </Plot>
          <InfoDetail>
            <h4>Director</h4>
            <p>Director</p>
          </InfoDetail>
          <InfoDetail>
            <h4>Writter</h4>
            <p>Writter</p>
          </InfoDetail>
          <InfoDetail>
            <h4>Actors</h4>
            <p>Actors</p>
          </InfoDetail>
          <InfoDetail>
            <h4>Country</h4>
            <p>Country</p>
          </InfoDetail>
        </InfoMovie>
      </Content>
    </MainDetail>
  );
};

export default Detail;
