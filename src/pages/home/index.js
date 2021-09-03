import React, { useEffect, useState } from "react";

// Depen
import { useSelector, useDispatch } from "react-redux";

// Utils
import { getListMovie } from "../../store/action";

// Components
import { Header, Card } from "../../components";
// Child Components
import { Main, Content, SearchText, ListCard } from "./style";

const Home = () => {
  // const { loading } = useSelector((state) => state.globalReducer);
  const { listMovie, searchText } = useSelector((state) => state.movieReducer);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  // const [movies, setmovies] = useState([]);
  // const infiniteScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop ===
  //     document.documentElement.offsetHeight
  //   ) {
  //     setPage(page + 1);
  //   }
  // };

  useEffect(() => {
    dispatch(getListMovie(searchText, page));
    // setmovies([...movies, ...listMovie]);
  }, [page, dispatch]);

  return (
    <Main>
      <Header />
      <Content>
        <SearchText>
          <p>Pencarian Anda</p>
          <h3>"{searchText}"</h3>
        </SearchText>
        <ListCard>
          {listMovie?.map((item, i) => {
            return <Card data={item} key={`card-${i}`} />;
          })}
        </ListCard>
      </Content>
    </Main>
  );
};

export default Home;
