import * as api from "../api";

// export const login = (authData, navigate) => async (dispatch) => {
export const login = (authData, navigate) => async () => {
  try {
    await api.authentication(authData);
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
