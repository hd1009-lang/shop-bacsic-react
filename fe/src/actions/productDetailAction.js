import axios from "axios"
import { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from "../constants/productConstant"


export const detailProduct=(id)=>async (dispatch) =>{
  try {
    dispatch({type:PRODUCT_DETAILS_REQUEST});
    const {data}=await axios.get(`/api/products/${id}`)
    dispatch({
      type:PRODUCT_DETAILS_SUCCESS,
      payload:data
    })
  } catch (error) {
    dispatch({
      type:PRODUCT_DETAILS_FAIL,
      // payload:error.response && error.response.data.msg
      payload:error.response && error.response.data.msg
    })
  }
}