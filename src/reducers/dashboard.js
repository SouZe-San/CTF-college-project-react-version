const dashboardReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "FETCH_RANK": // ---> data of /dashboard
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
export default dashboardReducer;
