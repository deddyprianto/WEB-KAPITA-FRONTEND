import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailproductID } from "../actions/actions";
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CircularProgress,
} from "@material-ui/core";
import { LocalGroceryStore } from "@material-ui/icons";

function Product(props) {
  const [jumlah, setJumlah] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailproductID(props.match.params.id));
  }, []);
  const productdetail = useSelector((state) => state.productdetail);
  const { loading, productDetail, error } = productdetail;
  const handlerProduct = () => {
    props.history.push(`/cart/${props.match.params.id}?qty=${jumlah}`);
  };
  return (
    <div>
      <Link to="/">
        <Button className="tombol__back" variant="contained" color="primary">
          Back to Home
        </Button>
      </Link>
      {loading ? (
        <CircularProgress className="loading" />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="pembungkus">
          <div className="wrap-img">
            <Card className="card__warna">
              <CardActionArea>
                <CardMedia
                  className="img"
                  component="img"
                  alt="Contemplative Reptile"
                  height="450"
                  image={productDetail.image}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Card>
          </div>

          <div className="detail">
            <ul>
              <li>
                Harga Barang: <b>{productDetail.price}</b>
              </li>
              <li>Detail Barang: {productDetail.brand}</li>
            </ul>
          </div>

          <div className="cart">
            <ul>
              <li>Harga: {productDetail.price}</li>
              <li>Category: {productDetail.category}</li>
              <li>
                Status:{" "}
                {productDetail.countInStock > 0
                  ? "Stock Tersedia"
                  : "Stock Habis"}
              </li>
              <li>
                Jml Stock:{" "}
                <select
                  className="select__product"
                  value={jumlah}
                  onChange={(e) => setJumlah(e.target.value)}
                >
                  {[...Array(productDetail.countInStock).keys()].map((a) => (
                    <option value={a + 1}>{a + 1}</option>
                  ))}
                </select>
              </li>
              <li>
                {productDetail.countInStock > 0 && (
                  <button
                    onClick={handlerProduct}
                    className="tombol__ku primary"
                  >
                    <h4>Tambah Ke Keranjang</h4>
                    <LocalGroceryStore style={{ fontSize: 40 }} />
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default Product;
