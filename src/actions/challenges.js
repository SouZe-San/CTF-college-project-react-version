import * as api from "../api/index";

export const fetchAllChallenges = () => async () => {
  try {
    const { data } = await api.getAllChallenges();
    // dispatch({ type: "FETCH_ALL_CHALLENGES", payload: data });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// Post Request that sends the flag to the server
export const flagSubmit = (flagData) => async (dispatch) => {
  // flagData ={challengeId, flag}
  try {
    await api.flagSend(flagData);
    dispatch(fetchAllChallenges());
  } catch (error) {
    console.log(error);
  }
};

// Post Request for Section Spawn and Close
export const spawnCall = (challengeId) => async () => {
  try {
    const { data } = await api.spanRequest(challengeId);
    console.log(data);
    // dispatch({ type: "SPAWN_SECTION", payload: data });
  } catch (error) {
    console.log(error);
  }
};
