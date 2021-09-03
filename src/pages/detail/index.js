import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMovie } from "../../store/action";

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
  Modals,
} from "./style";

// Components
import { Loading } from "../../components";
// // Images
// import DummyCover from "../../assets/images/dummy-cover-big.png";

const Detail = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [showModal, setShowModal] = useState(false);

  const { detailMovie } = useSelector((state) => state.movieReducer);
  const { loading } = useSelector((state) => state.globalReducer);

  useEffect(() => {
    dispatch(getDetailMovie(slug));
  }, [dispatch, slug]);

  if (loading) {
    return (
      <MainDetail>
        <Header>
          <Link to="/">
            Movie <span>Database</span>
          </Link>
        </Header>
        <Content>
          <ImgWrapper>
            <Loading width="100%" height="40rem" />
          </ImgWrapper>
          <InfoMovie>
            <Loading width="80%" height="4rem" />
            <Loading width="70%" height="2rem" />
            <Loading width="100%" height="9rem" />
            <InfoDetail>
              <Loading width="8rem" height="2rem" />
              <Loading width="25rem" height="2rem" />
            </InfoDetail>
            <InfoDetail>
              <Loading width="8rem" height="2rem" />
              <Loading width="25rem" height="2rem" />
            </InfoDetail>
            <InfoDetail>
              <Loading width="8rem" height="2rem" />
              <Loading width="25rem" height="2rem" />
            </InfoDetail>
          </InfoMovie>
        </Content>
      </MainDetail>
    );
  }
  return (
    <MainDetail>
      {showModal && (
        <Modals onClick={() => setShowModal(false)}>
          <img src={detailMovie?.Poster} alt="Poster view detail" />
        </Modals>
      )}
      <Header>
        <Link to="/">
          Movie <span>Database</span>
        </Link>
      </Header>
      <BgImage>
        <div className="white-gradient"></div>
        <img src={detailMovie?.Poster} alt="background blur cover" />
      </BgImage>
      <Content>
        <ImgWrapper onClick={() => setShowModal(true)}>
          <ImgCover src={detailMovie?.Poster} alt={detailMovie?.Title} />
        </ImgWrapper>
        <InfoMovie>
          <Title>{detailMovie?.Title}</Title>
          <Rate>{/* <p>{detailMovie?.Ratings[0]?.value}</p> */}</Rate>
          <SubInfo>
            <div className="subinfo-item">
              <p>Runtime</p>
              <h4>{detailMovie?.Runtime}</h4>
            </div>
            <div className="subinfo-item">
              <p>Released</p>
              <h4>{detailMovie?.Released}</h4>
            </div>
            <div className="subinfo-item">
              <p>Genre</p>
              <h4>{detailMovie?.Genre}</h4>
            </div>
          </SubInfo>
          <Plot>
            <h4>Plot</h4>
            <p>{detailMovie?.Plot}</p>
          </Plot>
          <InfoDetail>
            <h4>Director</h4>
            <p>{detailMovie?.Director}</p>
          </InfoDetail>
          <InfoDetail>
            <h4>Writter</h4>
            <p>{detailMovie?.Writer}</p>
          </InfoDetail>
          <InfoDetail>
            <h4>Actors</h4>
            <p>{detailMovie?.Actors}</p>
          </InfoDetail>
          <InfoDetail>
            <h4>Country</h4>
            <p>{detailMovie?.Country}</p>
          </InfoDetail>
        </InfoMovie>
      </Content>
    </MainDetail>
  );
};

export default Detail;
