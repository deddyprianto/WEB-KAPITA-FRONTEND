import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction, removeprodukold } from "../actions/cartActions";

function Cart(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartAction(id, qty));
  }, []);
  const cart = useSelector((state) => state.cart);
  const { cartproduct } = cart;
  const id = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const removecart = (id) => {
    dispatch(removeprodukold(id));
  };

  const checkoutHandler = () => {
    props.history.push(`/sign?redirect=shipping`);
  };
  return (
    <div className="cart-container">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>Shopping cart</h3>
            <div>Price</div>
          </li>
          {cartproduct.length === 0 ? (
            <div>Keranjang belanja anda Kosong</div>
          ) : (
            cartproduct.map((index) => (
              <li>
                {/* gambar */}
                <div className="cart-image">
                  <img src={index.image} alt="gambar item" />
                </div>

                {/* makanan  dan qty*/}
                <div className="cart-name">
                  <div>{index.name}</div>
                  <div>
                    Tambah Item Pembelian :{" "}
                    {/* Didalam store redux tidak boleh ada property dan value yang sama */}
                    <select
                      value={index.qty}
                      onChange={(e) =>
                        dispatch(cartAction(index._id, e.target.value))
                      }
                    >
                      {[...Array(index.countInStock).keys()].map((a) => (
                        <option key={a + 1} value={a + 1}>
                          {a + 1}
                        </option>
                      ))}
                    </select>{" "}
                    <button
                      type="button"
                      className="button"
                      onClick={() => removecart(index._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {/* harga makanan */}
                <div className="cart-harga">Rp.{index.price}</div>
              </li>
            ))
          )}
        </ul>
      </div>

      {/* action */}
      <div className="cart-action">
        <h3>
          Jumlah Item Belanja ={" "}
          {cartproduct.reduce((a, c) => `${a + c.qty}.`, "", 0)}
        </h3>

        <h3>
          Harga Keseluruhan = Rp.{" "}
          {cartproduct.reduce((a, c) => a + c.price * c.qty, 0)}
        </h3>
        <button
          onClick={checkoutHandler}
          className="tombol-biru button primary"
          disabled={cartproduct.length === 0}
        >
          Process To Checkout
        </button>
      </div>
    </div>
  );
}
export default Cart;
