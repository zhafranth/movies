import axios from "axios";
import { API } from "../../utils/API";
import { setLoading } from "./globalAction";

export const getListMovie =
  (search, page = 1) =>
  (dispatch) => {
    dispatch(setLoading(true));
    axios
      .get(API + `&s=${search}&page=${page}`)
      .then((res) => {
        dispatch({
          type: "SET_LIST_MOVIE",
          payload: res.data.Search,
        });
        dispatch(setLoading(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoading(false));
      });
  };

export const getDetailMovie = (idIMDb) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .get(API + `&i=${idIMDb}`)
    .then((res) => {
      dispatch(setLoading(false));
      dispatch({
        type: "SET_DETAIL_MOVIE",
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(setLoading(false));

      console.log(err);
    });
};
