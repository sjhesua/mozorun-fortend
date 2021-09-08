import React, { useContext } from "react";

//import { Link } from "react-router-dom";

import AppContext from "../../context/AppContext";

import { useModalLogin } from "../Modals/hooks/ModalLoginHooks";
import { useModalVariant } from "../Modals/hooks/ModalVariantsHooks";

import ModalVariantes from "../../components/Modals/ModalVariantes";

const CartRestaurant = ({isOpen,closeModal}) => {
    const appContext = useContext(AppContext);

    const { cart, /*isAuthenticated*/ } = appContext;
    
    const [isOpenModal1, openModal1, closeModal1/*,info1,value1*/] = useModalLogin(false)

    const [items,  addItems] = useModalVariant()

    return(
        <div className="col-lg-4" id="sidebar_fixed">
        <div className="box_order mobile_fixed">
            <div className="head">
                <h3>Order Summary</h3>
                <button className="close_panel_mobile"><i className="icon_close"></i></button>
            </div>
            <div className="main">
                <ul className="clearfix">
            {
            cart.items
              ? cart.items.map((item,index) => {
                  if (item.quantity > 0) {
                   return( 
                    <li key={item.id+index}><button onClick={ ()=> {openModal1() ; addItems(item) }} >{item.quantity}x {item.name}</button><span>${item.price}</span></li>
                    )}
                }):<div></div>
            }
                </ul>
                <div className="row opt_order">
                    <div className="col-6">
                        <label className="container_radio">Delivery
                            <input type="radio" defaultValue="option1" name="opt_order" defaultChecked/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="col-6">
                        <label className="container_radio">Take away
                            <input type="radio" defaultValue="option1" name="opt_order"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
                <h1>{cart.total.toFixed(2)}</h1>
               
                <div className="btn_1_mobile">
                    <button className="btn_1 gradient full-width mb_5">Order Now</button>
                    <div className="text-center"><small>No money charged on this steps</small></div>
                </div>
            </div>
        </div>
        <div className="btn_reserve_fixed"><button className="btn_1 gradient full-width">View Basket</button></div>
        <ModalVariantes  isOpen={isOpenModal1} closeModal={closeModal1} value={items} />
    </div>
    )
}
export default CartRestaurant
