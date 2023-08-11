import * as api from "../api/index";

//@ Get Request for Receive all Rank update
export const fetchRankUpdate = () => async () => {
  try {
    const { data } = await api.getRankUpdate();
    console.log(data);
    // dispatch({ type: "FETCH_RANK", payload: data });
  } catch (error) {
    console.log(error);
  }
};

// @ Get Request for Get User Details
export const fetchUserDetails = () => async () => {
  try {
    const { data } = await api.getUserDetails();
    console.log(data);
    // dispatch({ type: "FETCH_RANK", payload: data });
  } catch (error) {
    console.log(error);
  }
};
