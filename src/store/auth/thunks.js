import { singInwhithGoogle } from "../../firebase";
import { checkingCredentials, logout } from "./authSlice";

export const checkingAuhtCredention = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await singInwhithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
  };
};
