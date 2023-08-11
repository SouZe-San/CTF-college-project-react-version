const spawnReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "SPAWN_SECTION": // ---> data of /spawn
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
export default spawnReducer;
