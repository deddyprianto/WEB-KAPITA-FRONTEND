import React from "react";
import "../index.css";
function HomeWeb(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.history.push("/home");
  };
  return (
    <div>
      <div className="homeWeb">
        <div class="container__text">
          <h3>HKBP Hatopan</h3>
          <p>
            Gereja HKBP HATOPAN Merupakan , gereja HKBP di Medan ber-alamat di
            jalan binjai km10,8 Medan, yang saat ini memiliki website penjualan
            pencarian dana HKBP hatopan. silahkan teman-teman bapak/ibu yg ingin
            membantu pencarian dana Pada gereja HKBP Hatopan. mari luangkan
            waktu dan pikiran untuk berkunjung di website jualan online HKPB
            Hatopan web official
          </p>
        </div>
        <div class="container__gambar">
          <img src="./img/gambarHKBP.jpg" alt="" />
        </div>
      </div>
      <div class="container__galery">
        <h1 className="text__h1">Galery Naposo HKBP Hatopan</h1>
        <div class="galery">
          <img src="./img/5.jpg" alt="" />
          <img src="./img/14.jpg" alt="" />
          <img src="./img/22.jpg" alt="" />
          <img src="./img/26.jpg" alt="" />
          <img src="./img/r2.jpg" alt="" />
          <img src="./img/r5.jpg" alt="" />
          <img src="./img/r13.jpg" alt="" />
          <img src="./img/r20.jpg" alt="" />
          <img src="./img/gambarHKBP.jpg" alt="" />
        </div>
      </div>
      <div class="content">
        <h3>
          galeri di atas Merupakan kegiatan dan event dari muda mudi NH-NKBP
          Hatopan
        </h3>
        <p>
          yg dimana semua nya sangat membutuh kan dana untuk kegiatan dari HKBP
          HATOPAN sendiri termasuk NaposoBulung <br />
          <strong>mari Amang/Inang belanja di Website HKBP Hatopan</strong>
          Klik tombol belanja sekarang ya Amang/Inang
        </p>
        <div class="btn">
          <button
            style={{
              backgroundColor: "green",
              borderRadius: "20px",
              width: "200px",
              border: "none",
              color: "whitesmoke",
              height: "50px",
              margin: "50px",
            }}
            onClick={handleClick}
          >
            Belanja Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeWeb;
