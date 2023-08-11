const challengesReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "FETCH_ALL_CHALLENGES":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
export default challengesReducer;
