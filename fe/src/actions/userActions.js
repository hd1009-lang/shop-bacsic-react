import axios from 'axios';

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_FAIL,
  USER_DETAILS_FAIL,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_REQUEST
} from '../constants/userConstant';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      `/api/users/login`,
      { email, password },
      config,
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      // payload:error.response && error.response.data.msg
      payload: error.response && error.response.data.msg,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({
    type: USER_LOGOUT,
  });
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const { data } = await axios.post(`/api/users/register`, {
      name,
      email,
      password,
    });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      // payload:error.response && error.response.data.msg
      payload: error.response && error.response.data.msg,
    });
  }
};

export const detailUser=() => async (dispatch,getState)=>{
  try {
    dispatch({type:USER_DETAILS_REQUEST});
    const {userLogin:{userInfo}}=getState()
    const config={
      headers:{
        'Authorization':userInfo.token
      }
    }
    const {data} = await axios.get(`/api/users/get-info`,config)
    console.log(data);
    dispatch({
      type:USER_DETAILS_SUCCESS,
      payload:data
    })
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error.response && error.response.data.msg,
    });
  }
}

export const updateProfile=(info)=>async (dispatch,getState)=>{
  try {
    dispatch({type:USER_UPDATE_PROFILE_REQUEST});
    const {userLogin:{userInfo}}=getState()
    const config={
      headers:{
        'Authorization':userInfo.token
      }
    }
    const {data}= await axios.put( `/api/users/profile`,info,config)
    console.log(data);
    dispatch({type:USER_UPDATE_PROFILE_SUCCESS})
    // console.log(info.password);
  } catch (error) {
    dispatch({type:USER_UPDATE_PROFILE_FAIL,payload:error.response && error.response.data.msg})
  }
}