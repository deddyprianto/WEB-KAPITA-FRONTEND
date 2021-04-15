import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProduct } from "../actions/actions";
import { CircularProgress } from "@material-ui/core";

function Home() {
  const dispatch = useDispatch();
  const barang = useSelector((state) => state.productsave);
  const { datasave } = barang;
  const produck = useSelector((state) => state.deleteProduk);
  const { productdelete } = produck;
  // use A Hook React
  useEffect(() => {
    dispatch(listProduct());
  }, [productdelete, datasave]);
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const regis = useSelector((state) => state.regis);
  const { datauser } = regis;
  return loading ? (
    <CircularProgress className="loading" />
  ) : error ? (
    <div>{error}</div>
  ) : (
    <ul className="products">
      {datauser && (
        <div className="text-center">
          Haloo Selamat datang di dunia belanja online dalam Halaman beranda
          kami, silahkan Klik menu Sign-in
        </div>
      )}
      {!products ? (
        <h3>Haloo selamat datang di website penjualan online N-HKBP HATOPAN</h3>
      ) : (
        products.map((dataProduct) => (
          <li key={dataProduct._id}>
            <div className="product">
              <Link to={`/product/${dataProduct._id}`}>
                <img
                  src={dataProduct.image}
                  alt=""
                  className="product-image"
                ></img>
              </Link>
              <div className="product-name">
                <a href="product.html">{dataProduct.name}</a>
              </div>
              <div className="product-brand">Makanan Siap Saji</div>
              <div className="price">Rp.{dataProduct.price}</div>
              <div className="product-brand">{dataProduct.category}</div>
              <div className="product-brand">
                Stock Makanan: {dataProduct.countInStock}
              </div>
              <div className="rating">{dataProduct.description}</div>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}
export default Home;
