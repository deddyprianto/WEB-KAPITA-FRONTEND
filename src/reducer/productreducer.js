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

function productListReducers(state = { products: [] }, action) {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productSave(state = {}, action) {
  switch (action.type) {
    case PRODUCT_ADD_REQ:
      return { loading: true };
    case PRODUCT_ADD_SUCC:
      return { loading: false, berhasil: true, datasave: action.payload };
    case PRODUCT_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function deleteProduct(state = {}, action) {
  switch (action.type) {
    case PRODUCT_DELETE_REQ:
      return { loading: true };
    case PRODUCT_DELETE_SUCC:
      return {
        loading: false,
        success: true,
        data: action.payload,
        productdelete: action.productdelete,
      };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productDetail(state = { productDetail: {} }, action) {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { loading: true };
    case PRODUCT_DETAIL_SUCCESS:
      return { loading: false, success: true, productDetail: action.payload };
    case PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export { productListReducers, productDetail, productSave, deleteProduct };
