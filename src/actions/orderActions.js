import { server } from "../constants/config";
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  CLEAR_ERRORS,
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
  MY_ORDERS_FAIL,
  SINGLE_ORDER_REQUEST,
  SINGLE_ORDER_SUCCESS,
  SINGLE_ORDER_FAIL,
  ALL_ORDERS_REQUEST,
  ALL_ORDERS_SUCCESS,
  ALL_ORDERS_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
} from "../constants/orderConstants";
import axios from "axios";

export const newOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    const { data } = await axios.post(`${server}/api/v1/order/new`, order, config);
    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const myOrders = () => async (dispatch) => {
  try {
    dispatch({ type: MY_ORDERS_REQUEST });
    const { data } = await axios.get(`${server}/api/v1/orders/me`,{withCredentials:true});
    dispatch({
      type: MY_ORDERS_SUCCESS,
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: MY_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const getOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_ORDER_REQUEST });
    const { data } = await axios.get(`${server}/api/v1/order/${id}`,{withCredentials:true});
    dispatch({
      type: SINGLE_ORDER_SUCCESS,
      payload: data.order,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAllAdminOrders=()=>async(dispatch)=>{
  try {
    dispatch({type:ALL_ORDERS_REQUEST})
    const {data}=await axios.get(`${server}/api/v1/admin/orders`,{withCredentials:true})
    dispatch({
      type:ALL_ORDERS_SUCCESS,
      payload:data.orders
    })
  } catch (error) {
    dispatch({
      type:ALL_ORDERS_FAIL,
      payload:error.response.data.message
    })
  }
}

export const updateAdminOrder=(id,orderData)=>async(dispatch)=>{
  try {
    dispatch({type:UPDATE_ORDER_REQUEST})
    const config={
      headers:{
        'Content-Type':'application/json'
      },
      withCredentials:true
    }
    const {data}=await axios.put(`${server}/api/v1/admin/order/${id}`,orderData,config)
    dispatch({
      type:UPDATE_ORDER_SUCCESS,
      payload:data.success
    })
  } catch (error) {
    dispatch({
      type:UPDATE_ORDER_FAIL,
      payload:error.response.data.message
    })
  }
}



export const deleteAdminOrder=(id)=>async(dispatch)=>{
  try {
    dispatch({type:DELETE_ORDER_REQUEST})
    const {data}=await axios.delete(`${server}/api/v1/admin/order/${id}`,{withCredentials:true})
    dispatch({
      type:DELETE_ORDER_SUCCESS,
      payload:data.success
    })
  } catch (error) {
    dispatch({
      type:DELETE_ORDER_FAIL,
      payload:error.response.data.message
    })
  }
}



export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
