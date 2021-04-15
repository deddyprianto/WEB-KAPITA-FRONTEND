import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  productListReducers,
  productDetail,
  productSave,
  deleteProduct,
} from "./reducer/productreducer";
import Cookie from "js-cookie";
import { cartReducers } from "./reducer/cartreducer";
import { loginreducer, register } from "./reducer/loginreducer";

const cartproduct = Cookie.getJSON("cartproduct") || [];
const loginInfo = Cookie.getJSON("loginInfo") || null;
// reduce and initialState
const initialState = {
  cart: { cartproduct, shipping: {}, payment: {} },
  login: { loginInfo },
};
const reduce = combineReducers({
  productList: productListReducers,
  productdetail: productDetail,
  cart: cartReducers,
  login: loginreducer,
  regis: register,
  productsave: productSave,
  deleteProduk: deleteProduct,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reduce,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
