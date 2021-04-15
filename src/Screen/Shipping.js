import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { savePengirim } from "../actions/cartActions";
import Chekout from "../Check/CheckoutStep";

function Shipping(props) {
  const [alamat, setAlamat] = useState("");
  const [kota, setKota] = useState("");
  const [kodepos, setKodepos] = useState("");
  const [negara, setNegara] = useState("");
  const dispatch = useDispatch();
  const formshipping = (e) => {
    e.preventDefault();
    dispatch(savePengirim({ alamat, kota, kodepos, negara }));
    props.history.push("/payment");
  };
  return (
    <div>
      <Chekout step1 step2></Chekout>
      <div className="container">
        <form onSubmit={formshipping}>
          <ul className="container-list">
            <li>
              <h2>Pengiriman Barang</h2>
            </li>
            <li>
              <label htmlFor="alamat">Alamat</label>
              <input
                type="text"
                name="alamat"
                id="alamat"
                onChange={(e) => setAlamat(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="kota">kota</label>
              <input
                type="text"
                name="kota"
                id="kota"
                onChange={(e) => setKota(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="pos">Kode Pos</label>
              <input
                type="text"
                name="pos"
                id="pos"
                onChange={(e) => setKodepos(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="negara">Negara</label>
              <input
                type="text"
                name="negara"
                id="negara"
                onChange={(e) => setNegara(e.target.value)}
              ></input>
            </li>
            <li>
              <button className="button primary" type="submit">
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
export default Shipping;
