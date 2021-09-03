const initialState = {
  listMovie: [],
  detailMovie: {},
  searchText: "batman",
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LIST_MOVIE":
      return { ...state, listMovie: action.payload };
    case "SET_DETAIL_MOVIE":
      return { ...state, detailMovie: action.payload };
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: action.payload };

    default:
      return { ...state };
  }
};
