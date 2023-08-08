const dashboardReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "FETCH_RANK":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
export default dashboardReducer;
