import {
  CART_ACTIONS,
  REMOVE_CART,
  SHIPPING_SUCC,
  SHIPPING_PAYMENT,
} from "../constant/cartconstant";

function cartReducers(
  state = { cartproduct: [], shipping: {}, payment: {} },
  action
) {
  switch (action.type) {
    case CART_ACTIONS:
      const itemcart = action.payload;
      const productidd = state.cartproduct.find((a) => a._id === itemcart._id);
      if (productidd) {
        return {
          cartproduct: state.cartproduct.map((a) =>
            a._id === itemcart._id ? itemcart : a
          ),
        };
      }
      return { cartproduct: [...state.cartproduct, itemcart] };
    case REMOVE_CART:
      return {
        cartproduct: state.cartproduct.filter((a) => a.product === action.id),
      };
    case SHIPPING_SUCC:
      return { ...state, shipping: action.payload };
    case SHIPPING_PAYMENT:
      return { ...state, payment: action.payload };
    default:
      return state;
  }
}
export { cartReducers };
