import * as api from "../api";

// export const login = (authData, navigate) => async (dispatch) => {
export const login = () => async () => {
  try {
    const authData = {
      teamId: "team lava",
      password: "ksjdf34",
    };
    const { data } = await api.logIn(authData);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
