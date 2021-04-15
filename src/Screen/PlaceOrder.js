import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chekout from '../Check/CheckoutStep';

function PlaceOrder(props) {

   const cart = useSelector(state => state.cart)
   const { cartproduct, shipping, payment } = cart



   const itemharga = cartproduct.reduce((a, c) => a + c.price * c.qty, 0);
   const shippingPrice = itemharga > 100 ? 0 : 10;
   const taxharga = 0.15 * itemharga;
   const totalharga = itemharga + shippingPrice + taxharga;

   if (!shipping.alamat) {
      props.history.push("/shipping")
   } else if (!payment.payment) {
      props.location.push("/payment")
   }


   const dispatch = useDispatch()
   const placeorderHandler = () => {
      // 
   }
   useEffect(() => {

   }, [])
   const checkoutHandler = () => {
      props.history.push(`/sign?redirect=shipping`);
   }

   return <div>
      <Chekout step1 step2 step3 step4></Chekout>
      <div className="placeorder">
         <div className="plaorder-info">
            <div>
               <div className="list-tempat">
                  <h3>
                     Pengiriman Ke Alamat
               </h3>
                  <div>
                     {shipping.alamat},
                  {shipping.kota},
                  {shipping.kodepos}, {shipping.negara}
                  </div>
                  <div>
                     <h3><b>Metode Pembayaran : {payment.payment}</b> </h3>

                  </div>
               </div>
               <div>
                  <ul className="cart-list-container">
                     <li>
                        <h3>Detail Keranjang Belanja</h3>
                        <div><b>Harga</b></div>
                     </li>
                     {cartproduct.length === 0 ?
                        <div>
                           Keranjang belanja anda Kosong
               </div>
                        :
                        cartproduct.map(index =>
                           <li>
                              {/* gambar */}
                              <div className="cart-image">
                                 <img src={index.image} alt="gambar item" />
                              </div>

                              {/* makanan  dan qty*/}
                              <div className="cart-name">
                                 <div className="makanan">Nama Makanan  : <h4 className="tulisan">{index.name}</h4></div>
                                 <div>
                                    Jumlah Item Pembelian : {index.qty}
                                 </div>
                              </div>
                              {/* harga makanan */}
                              <div className="cart-harga">Rp.{index.price}</div>
                           </li>
                        )
                     }

                  </ul>
               </div>
            </div>
         </div>

         {/* action */}
         <div className="placeorder-action">
            <ul>
               <li><button className="button  primary full-width" onClick={placeorderHandler}>Place Order</button> </li>
               <li><h3>order summary</h3></li>
               <li>
                  <div>items</div>
                  <div>Rp.{itemharga}</div>
               </li>
               <li>
                  <div>Biaya Pengiriman</div>
                  <div>Rp.{shippingPrice}</div>
               </li>
               <li>
                  <div>Tax</div>
                  <div>Rp.{taxharga}</div>
               </li>
               <li>
                  <div>Total Keseluruhan</div>
                  <div>Rp.{totalharga}</div>
               </li>
            </ul>

         </div>

      </div >
   </div>

}
export default PlaceOrder;