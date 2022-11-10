export const INITIAL_STATE = {
  page: "home",
};

export const generalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "setPage":
      return { ...state, page: action.payload };

    default:
      return state;
  }
};
