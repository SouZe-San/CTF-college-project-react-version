import * as api from "../api/index";

export const fetchAllChallenges = () => async () => {
  try {
    const { data } = await api.getAllChallenges();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
