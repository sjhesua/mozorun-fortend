import { Link} from "react-router-dom";
import logo from "./logo_mozorun_white.svg"
import logoscroll from "./logo_mozorun.svg"

//
import ModalLogin from "../Modals/ModalLogin";
import { useModalLogin } from "../Modals/hooks/ModalLoginHooks";
import { useState } from "react";

const NavBar = () => {
        const [isOpenModal1, openModal1, closeModal1] = useModalLogin(false)
        const [isOpenModal2, openModal2, closeModal2] = useModalLogin(false)
        const [isOpenModal3, openModal3, closeModal3] = useModalLogin(false)
        const [isOpenModal4, openModal4, closeModal4] = useModalLogin(false)

        const [navbar, setNavbar] = useState(false)

        const changeBackground = () => {
            if(window.scrollY >= 80) {
                setNavbar(true)
            } else {
                setNavbar(false);
            }
        }

        window.addEventListener('scroll', changeBackground)

        return(
        <>
        <header className={navbar ? 'header clearfix element_to_stick headerhome' : 'header clearfix element_to_stick'}>
            <div className="container">
                <div id="logo">
                    <Link to='/'>
                        <img src={logo} width="150" height="50" alt="" className="logo_normal"/>
                        <img src={logoscroll} width="150" height="50" alt="" className="logo_scroll"/>
                    </Link>
                </div>
                <div className="layer"></div>
                <ul id="top_menu">
                    <li>
                        <div className="dropdown dropdown-cart">
                            <button className="cart_bt hb" onClick={openModal4} style={{color: "#e8e8e8"}}><strong>2</strong></button>
                            <div className={isOpenModal4 ? 'dropdown-menu show' : 'dropdown-menu'}>
                            <button title="Close (Esc)" type="button" className="mfp-close icon_close" style={{backgroundColor: '#e6e2e9'}}  onClick={closeModal4}></button>
                                <ul style={{maxHeight: '430px',overflowY: 'auto'}} >
                                    <li>
                                        <figure>
                                            <img src={"img/menu-thumb-placeholder.jpg"} data-src="assets/img/menu-thumb-1.jpg" alt="" width="50" height="50" className="lazy"/>
                                        </figure>
                                        <strong><span>1x Pizza Napoli</span>$12.00</strong>
                                        <button className="action"><i className="icon_trash_alt"></i></button>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="img/menu-thumb-placeholder.jpg" data-src="assets/img/menu-thumb-2.jpg" alt="" width="50" height="50" className="lazy"/>
                                        </figure>
                                        <strong><span>1x Hamburgher Maxi</span>$10.00</strong>
                                        <button className="action"><i className="icon_trash_alt"></i></button>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="img/menu-thumb-placeholder.jpg" data-src="assets/img/menu-thumb-3.jpg" alt="" width="50" height="50" className="lazy"/>
                                        </figure>
                                        <strong><span>1x Red Wine Bottle</span>$20.00</strong>
                                        <button className="action"><i className="icon_trash_alt"></i></button>
                                    </li>
                                </ul>
                                <div className="total_drop">
                                    <div className="clearfix add_bottom_15"><strong>Total</strong><span>$32.00</span></div>
                                    <Link to="/" className="btn_1 outline">View Cart</Link><Link to="/" className="btn_1">Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <button href="#sign-in-dialog" id="sign-in" className="login hb" onClick={openModal1} style={{color: "#e8e8e8"}}>Sign In</button></li>
                    <li>
                        <div className="dropdown user clearfix displnonenav">
                            <div className="dropdown-menu">
                                <div className="dropdown-menu-content colorper">
                                    <ul>
                                        <li><Link to="/" ><i className="icon_profile mr-2"></i>Profile</Link></li>
                                        <li><Link to="/" ><i className="icon_document mr-2 "></i>Orders</Link></li>
                                        <li><Link to="/" ><i className="icon_wallet mr-2 "></i>Payment</Link></li>
                                        <li><Link to="/" ><i className="social_share mr-2 "></i>Refer & Earn</Link></li>
                                        <li><Link to="/" ><i className="icon_currency mr-2 "></i>Loyalty</Link></li>
                                        <li><Link to="/" ><i className="icon_info mr-2 "></i>Notifications</Link></li>
                                        <li><Link to="/" ><i className="icon_pin_alt mr-2 "></i>Addres Book</Link></li>
                                        <li><Link to="/" ><i className="icon_comment mr-2"></i>Chat Support</Link></li>
                                        <li><Link to="/" ><i className="arrow_carrot-right_alt2 mr-2 "></i>Log out</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                <button href="#" className="open_close wn" onClick={openModal3} >
                    <i className="icon_menu" style={{position: 'relative',top: '-10px',left: '-10px'}}></i>
                    <span>Menu</span>
                </button>

                <nav className={isOpenModal3 ? 'main-menu show': 'main-menu'}>
                    <div className="avatarname" id="header_menu">
                        <button className="open_close wn"  defaultValue="toggle">
                            <i className="icon_close" style={{color:'#e54750',position:'relative',top:'-10px',left:'-10px'}}></i><span>Menu</span>
                        </button>
                        <br/>
                        <button className="open_close wn userinf" onClick={closeModal3} >
                            <span>User</span>
                        </button>
                        <Link to="/">
                            <img src={logoscroll} width="162" height="35" alt="" className="logomenu"/>
                            <br/>
                        </Link>
                    </div>
                    <ul className="displnone">
                        <li><Link to="/"><i className="icon_document mr-2 d-md-none d-lg-none d-xl-none"></i>Orders</Link></li>
                        <li><Link to="/"><i className="icon_wallet mr-2 d-md-none d-lg-none d-xl-none"></i>Payment</Link></li>
                        <li><Link to="/"><i className="social_share mr-2 d-md-none d-lg-none d-xl-none"></i>Refer & Earn</Link></li>
                        <li><Link to="/"><i className="icon_currency mr-2 d-md-none d-lg-none d-xl-none"></i>Loyalty</Link></li>
                        <li><Link to="/"><i className="icon_info mr-2 d-md-none d-lg-none d-xl-none"></i>Notifications</Link></li>
                        <li><Link to="/"><i className="icon_pin_alt mr-2 d-md-none d-lg-none d-xl-none"></i>Addres Book</Link></li>
                        <li><Link to="/"><i className="icon_comment mr-2 d-md-none d-lg-none d-xl-none"></i>Chat Support</Link></li>
                    </ul>
                </nav>
            </div>
        </header>

        <div id="toTop"></div>
            <ModalLogin isOpen={isOpenModal1} closeModal={closeModal1} isOpenForgotPw={isOpenModal2} openForgotPw={openModal2} closeForgotPw={closeModal2} />

        </>
    )

}
export default NavBar
        