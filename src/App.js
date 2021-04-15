import React from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";
import Home from "./Screen/Home";
import Product from "./Screen/Product";
import Cart from "./Screen/cartscreen";
import Signin from "./Screen/signscreeen";
import Register from "./Screen/register";
import { useSelector } from "react-redux";
import TambahProductScreeen from "./Screen/ProductsScreeen";
import Shipping from "./Screen/Shipping";
import Payment from "./Screen/payment";
import PlaceOrder from "./Screen/PlaceOrder";

function App() {
  const openMenu = () =>
    document.querySelector("#sidebar").classList.add("open");
  const closeMenu = () =>
    document.querySelector("#sidebar").classList.remove("open");
  const login = useSelector((state) => state.login);
  const { loginInfo } = login;
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">
              <a href="">Toko Online</a>
            </Link>
          </div>
          <div className="header-links">
            {loginInfo ? (
              <Link to="/addproduct">
                <a href="">Tambah Produk</a>
              </Link>
            ) : (
              <a href="">Cart</a>
            )}
            {loginInfo ? (
              <Link to="/profile">
                <a href="">Haloo, {loginInfo.username}</a>
              </Link>
            ) : (
              <Link to="/sign">
                <a href="">Sign in</a>
              </Link>
            )}
          </div>
        </header>
        <aside id="sidebar">
          <h3>Shoping Category</h3>
          <button className="tombol-Tutup" onClick={closeMenu}>
            X
          </button>
          <a href="">Cart</a>
          <Link to="/sign">
            <a href="">Sign In</a>
          </Link>
        </aside>
        <main className="main">
          <Route path="/" component={Home}></Route>
          <Route path="/addproduct" component={TambahProductScreeen}></Route>
          <Route path="/product/:id" component={Product}></Route>
          <Route path="/cart/:id" component={Cart}></Route>
          <Route path="/shipping" component={Shipping}></Route>
          <Route path="/payment" component={Payment}></Route>
          <Route path="/placeorder" component={PlaceOrder}></Route>
          <Route path="/sign" component={Signin}></Route>
          <Route path="/register" component={Register}></Route>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
