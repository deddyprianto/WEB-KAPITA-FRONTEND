import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Chekout from '../Check/CheckoutStep';
import { savePayment } from '../actions/cartActions';

function Payment(props) {

   const [payment, setPayment] = useState();

   const dispatch = useDispatch();
   const formPayment = (e) => {
      e.preventDefault();
      dispatch(savePayment({ payment }))
      props.history.push('placeorder');
   }
   return <div>
      <Chekout step1 step2 step3></Chekout>
      <div className="container">
         <form onSubmit={formPayment}>
            <ul className="container-list">
               <li>
                  <h2>Pilih Metode Pembayaran</h2>
               </li>
               <li>
                  <div>
                     <input type="radio" name="payment" id="payment" value="Paypal" onChange={(e) => setPayment(e.target.value)}></input>
                     <label htmlFor="payment">Paypal</label>
                  </div>
               </li>
               <li><button className="button primary" type="submit">Continue</button></li>
            </ul>

         </form>
      </div>

   </div>


}
export default Payment
