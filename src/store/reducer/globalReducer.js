const initialState = {
  loading: false,
};

export const globalReducer = (state = initialState, action) => {
  switch (action) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
