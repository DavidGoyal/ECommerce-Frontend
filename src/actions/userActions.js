import axios from "axios";
import {
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOAD_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
} from "../constants/userConstants";
import { server } from "../constants/config";


export const login = (email,password) => async (dispatch) =>{
    try {
        dispatch({type:LOGIN_REQUEST});
        const config={headers:{"Content-Type":"application/json"},withCredentials:true};

        const {data}=await axios.post(`${server}/api/v1/login`,{email,password},config)

        dispatch({
            type:LOGIN_SUCCESS,
            payload:data.user,
        });
        
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const register=(userData)=>async(dispatch)=>{
    try {
        dispatch({type:REGISTER_REQUEST});
        const config={headers:{"Content-Type":"multipart/form-data"},withCredentials:true};

        const {data}=await axios.post(`${server}/api/v1/register`, userData, config)

        dispatch({
            type:REGISTER_SUCCESS,
            payload:data.user,
        });

    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const loadUser=() => async (dispatch) =>{
    try {
        dispatch({type:LOAD_REQUEST});

        const {data}=await axios.get(`${server}/api/v1/me`,{withCredentials:true})

        dispatch({
            type:LOAD_SUCCESS,
            payload:data.user,
        });
        
    } catch (error) {
        dispatch({
            type: LOAD_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const logout=() => async (dispatch) =>{
    try {
        
        await axios.get(`${server}/api/v1/logout`,{withCredentials:true})

        dispatch({
            type:LOGOUT_SUCCESS,
        });
        
    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const updateProfile=(userData)=>async(dispatch)=>{
    try {
        dispatch({type:UPDATE_PROFILE_REQUEST});
        const config={headers:{"Content-Type":"multipart/form-data"},withCredentials:true};

        const {data}=await axios.put(`${server}/api/v1/me/update`, userData, config)

        dispatch({
            type:UPDATE_PROFILE_SUCCESS,
            payload:data.success,
        });

    } catch (error) {
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const updatePassword=(userData)=>async(dispatch)=>{
    try {
        dispatch({type:UPDATE_PASSWORD_REQUEST});
        const config={headers:{"Content-Type":"application/json"},withCredentials:true};

        const {data}=await axios.put(`${server}/api/v1/password/update`, userData, config)

        dispatch({
            type:UPDATE_PASSWORD_SUCCESS,
            payload:data.success,
        });

    } catch (error) {
        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const forgotPassword=(email)=>async(dispatch)=>{
    try {
        dispatch({type:FORGOT_PASSWORD_REQUEST});
        const config={headers:{"Content-Type":"application/json"},withCredentials:true};

        const {data}=await axios.post(`${server}/api/v1/password/forgot`, email, config)

        dispatch({
            type:FORGOT_PASSWORD_SUCCESS,
            payload:data.message,
        });

    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const resetPassword=(token,password)=>async(dispatch)=>{
    try {
        dispatch({type:RESET_PASSWORD_REQUEST});
        const config={headers:{"Content-Type":"application/json"},withCredentials:true};

        const {data}=await axios.put(`${server}/api/v1/password/reset/${token}`, password, config)

        dispatch({
            type:RESET_PASSWORD_SUCCESS,
            payload:data.success,
        });

    } catch (error) {
        dispatch({
            type: RESET_PASSWORD_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const getAllAdminUsers=()=>async(dispatch)=>{
    try {
        dispatch({type:ALL_USERS_REQUEST});

        const {data}=await axios.get(`${server}/api/v1/admin/users`,{withCredentials:true})

        dispatch({
            type:ALL_USERS_SUCCESS,
            payload:data.users,
        });

    } catch (error) {
        dispatch({
            type: ALL_USERS_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const getSingleAdminUser=(id)=>async(dispatch)=>{
    try {
        dispatch({type:USER_DETAILS_REQUEST});

        const {data}=await axios.get(`${server}/api/v1/admin/user/${id}`,{withCredentials:true})

        dispatch({
            type:USER_DETAILS_SUCCESS,
            payload:data.user,
        });

    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const updateAdminUser=(id, userData)=>async(dispatch)=>{
    try {
        dispatch({type:UPDATE_USER_REQUEST});
        const config={headers:{"Content-Type":"application/json"},withCredentials:true};

        const {data}=await axios.put(`${server}/api/v1/admin/user/${id}`, userData, config)

        dispatch({
            type:UPDATE_USER_SUCCESS,
            payload:data.success,
        });

    } catch (error) {
        dispatch({
            type: UPDATE_USER_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const deleteAdminUser=(id)=>async(dispatch)=>{
    try {
        dispatch({type:DELETE_USER_REQUEST});

        const {data}=await axios.delete(`${server}/api/v1/admin/user/${id}`,{withCredentials:true})

        dispatch({
            type:DELETE_USER_SUCCESS,
            payload:data,
        });

    } catch (error) {
        dispatch({
            type: DELETE_USER_FAIL,
            payload: error.response.data.message,
        });
    }
}


export const clearErrors=()=>async(dispatch)=>{
    dispatch({type:CLEAR_ERRORS});
}