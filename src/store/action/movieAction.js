import axios from "axios";
import { API } from "../../utils/API";

export const getListMovie = (search) => (dispatch) => {
  axios
    .get(API + `&s=${search}&page=1`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
