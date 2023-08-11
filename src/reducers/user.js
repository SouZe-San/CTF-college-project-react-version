const userReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case "FETCH_USER": // ---> data of /id
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
export default userReducer;
