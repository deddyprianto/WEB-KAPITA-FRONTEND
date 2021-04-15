import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProduct, deleteAction } from "../actions/actions";
import { CircularProgress } from "@material-ui/core";

function TambahProductScreeen(props) {
  const productsave = useSelector((state) => state.productsave);
  const { berhasil, loading, error } = productsave;
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  const deleteProduk = useSelector((state) => state.deleteProduk);
  const { success: successDelete, data } = deleteProduk;
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setcountInStock] = useState("");
  const [description, setDescription] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const open = (brg) => {
    setModalVisible(true);
    setId(brg._id);
    setName(brg.name);
    setImage(brg.image);
    setBrand(brg.brand);
    setPrice(brg.price);
    setCategory(brg.category);
    setcountInStock(brg.countInStock);
    setDescription(brg.description);
  };
  const deleteHandler = (idhapus) => {
    dispatch(deleteAction(idhapus));
    props.history.push("/");
  };
  const formhandlerforadd = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        name,
        image,
        brand,
        price,
        category,
        countInStock,
        description,
      })
    );
    props.history.push("/");
  };
  useEffect(() => {
    if (berhasil) {
      setModalVisible(false);
    }
  }, [berhasil, successDelete]);

  return (
    <div className="content content-margined">
      <div className="product-header">
        <h3>Stock Makanan Anda</h3>
        <button className="button primary" onClick={() => open({})}>
          Buat List Product
        </button>
      </div>
      {modalVisible && (
        <div className="container">
          <form onSubmit={formhandlerforadd}>
            <ul className="container-list">
              <li></li>
              <li>
                <h2>Tambah List Makanan,Minuman & Barang</h2>
              </li>
              <li>
                <label htmlFor="name">Nama Makanan/Minuman & Barang</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="image">URL Gambar</label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="brand">Brand</label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="price">Harga</label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="category">Exp Makanan/Minuman (Optional)</label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="countInStock">
                  Jumlah Stock Makanan/Minuman & barang
                </label>
                <input
                  type="text"
                  name="countInStock"
                  id="countInStock"
                  value={countInStock}
                  onChange={(e) => setcountInStock(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="description">
                  Deskripsi Makanan/minuman & Barang
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></input>
              </li>
              <li>
                <button className="button primary" type="submit">
                  {id ? "Update" : "Create"}
                </button>
              </li>
              <li>
                <button
                  className="button secondary"
                  onClick={() => setModalVisible(false)}
                  type="button"
                >
                  Kembali
                </button>
              </li>
            </ul>
          </form>
        </div>
      )}
      <div className="product-list">
        {error && <h4 className="delete">{error}</h4>}
        {data && <h4 className="delete">{data}</h4>}

        {berhasil && <h4 className="delete">Data berhasil di tambahkan</h4>}
        <table>
          {loading && <CircularProgress className="loading" />}
          <thead>
            <tr>
              <th>ID Product</th>
              <th>Nama Product</th>
              <th>Brand Product</th>
              <th>Harga Product</th>
              <th>EXP Product</th>
              <th>Stock Product</th>
              <th>Description Product</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((barang) => (
              <tr key={barang._id}>
                <td>{barang.name}</td>
                <td>{barang.image}</td>
                <td>{barang.brand}</td>
                <td>{barang.price}</td>
                <td>{barang.category}</td>
                <td>{barang.countInStock}</td>
                <td>{barang.description}</td>
                <td>
                  <button className="button" onClick={() => open(barang)}>
                    Edit
                  </button>{" "}
                  <button
                    className="button"
                    onClick={() => deleteHandler(barang._id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default TambahProductScreeen;
