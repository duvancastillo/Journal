import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "no-authetication",//checking , authetication
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMesage: null,
  },
  reducers: {
    login: (state, {payload}) => {
      state.status = "authetication", 
      state.uid = payload.uid,
      state.email= payload.email,
      state.displayName= payload.displayName,
      state.photoURL= payload.photoURL,
      state.errorMesage = null

    },
    logout: (state, {payload}) => {
      state.status = "no-authetication",
      state.uid = null,
      state.email= null,
      state.displayName= null,
      state.photoURL= null,
      state.errorMesage = payload.errorMesage
  
    },
    checkingCredentials: (state, action)=>{
        state.status = "checking"
    }
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;