import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
} from "../constant/constant";
import {
  PRODUCT_ADD_REQ,
  PRODUCT_ADD_SUCC,
  PRODUCT_ADD_FAIL,
  PRODUCT_DELETE_REQ,
  PRODUCT_DELETE_SUCC,
  PRODUCT_DELETE_FAIL,
} from "../constant/addDatacons";
import instance from "../Axios";

const listProduct = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await instance.get("/api/backend/product");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error });
  }
};
const saveProduct = (product) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_ADD_REQ });
  try {
    const {
      login: { loginInfo },
    } = getState();
    if (!product._id) {
      const { data } = await instance.post("/api/backend/product", product);
      dispatch({ type: PRODUCT_ADD_SUCC, payload: data });
    } else {
      const { data } = await instance.put(
        `/api/products/${product._id}`,
        product,
        {
          headers: { Authorization: `Bearer ${loginInfo.token}` },
        }
      );
      dispatch({ type: PRODUCT_ADD_SUCC, payload: data });
    }
  } catch (error) {
    console.log(error.message);
    dispatch({ type: PRODUCT_ADD_FAIL, payload: error.message });
  }
};
const deleteAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQ });
    const { data } = await instance.delete(`/api/backend/product/${id}`);
    dispatch({
      type: PRODUCT_DELETE_SUCC,
      payload: data.message,
      productdelete: data.product,
    });
  } catch (error) {
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
  }
};
const detailproductID = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAIL_REQUEST });
    const { data } = await instance.get(`/api/backend/product/${id}`);
    dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAIL_FAIL, payload: error.msg });
  }
};

export { listProduct, detailproductID, saveProduct, deleteAction };
