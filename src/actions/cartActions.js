import {
  CART_ACTIONS,
  REMOVE_CART,
  SHIPPING_SUCC,
  SHIPPING_PAYMENT,
} from "../constant/cartconstant";
import instance from "../Axios";
import Cookie from "js-cookie";

const cartAction = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await instance.get(`/api/backend/product/${id}`);
    dispatch({
      type: CART_ACTIONS,
      payload: {
        _id: data._id,
        name: data.name,
        price: data.price,
        image: data.image,
        countInStock: data.countInStock,
        qty,
      },
    });
    const {
      cart: { cartproduct },
    } = getState();
    Cookie.set("cartproduct", JSON.stringify(cartproduct));
  } catch (error) {}
};
const removeprodukold = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART,
    id: id,
  });
  const {
    cart: { cartproduct },
  } = getState();
  Cookie.set("cartproduct", JSON.stringify(cartproduct));
};
const savePengirim = (data) => (dispatch) => {
  dispatch({ type: SHIPPING_SUCC, payload: data });
};
const savePayment = (data) => (dispatch) => {
  dispatch({ type: SHIPPING_PAYMENT, payload: data });
};
export { cartAction, removeprodukold, savePengirim, savePayment };
