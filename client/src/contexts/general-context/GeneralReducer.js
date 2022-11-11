import actionTypes from "./ActionTypes";

export const INITIAL_STATE = {
  page: "home",
  destination: "",
  dates: {
    startDate: new Date(),
    endDate: new Date(),
  },
  options: {
    adults: 1,
    children: 0,
    rooms: 1,
  },
};

export const generalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_PAGE:
      return { ...state, page: action.payload };

    case actionTypes.SET_DESTINATION:
      return { ...state, destination: action.payload };

    case actionTypes.SET_DATES:
      return {
        ...state,
        dates: { startDate: action.payload.start, endDate: action.payload.end },
      };

    case actionTypes.SET_OPTIONS:
      return {
        ...state,
        options: {
          ...state.options,
          [action.payload.option]: action.payload.value,
        },
      };

    default:
      return state;
  }
};
