import {
  LoginInWhithEmailAndPassword,
  logoutFirebase,
  registerUserWihtEmailPassword,
  singInwhithGoogle,
} from '../../firebase';
import { claerNooteLogout } from '../journal';
import { checkingCredentials, login, logout } from './authSlice';

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
    dispatch(login(result));
  };
};

export const starUserwithEmailPassword = (email, password, displayName) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await registerUserWihtEmailPassword(
      email,
      password,
      displayName
    );
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};
export const starLoginWhintEmailAndPAssWord = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials);
    const result = await LoginInWhithEmailAndPassword(email, password);
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};

export const starLogut = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(claerNooteLogout());
    dispatch(logout());
  };
};
