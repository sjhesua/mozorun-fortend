const ModalLogin = ({isOpen,closeModal,isOpenForgotPw,openForgotPw,closeForgotPw}) => {
    
    return(
        
    <div className={ isOpen ? '': "d-none" } >
        <div className="mfp-bg my-mfp-zoom-in mfp-ready"></div>
        <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready" tabIndex="-1" style={{overflow: "hidden auto"}} >
            <div className="mfp-container mfp-inline-holder">
                <div className="mfp-content">
                    <div id="sign-in-dialog" className="zoom-anim-dialog">
                        <div className="modal_header">
                            <h3>Sign In</h3>
                        </div>
                        <form>
                            <div className="sign-in-wrapper">
                                <a href="#0" className="social_bt facebook">Login with Facebook</a>
                                <a href="#0" className="social_bt google">Login with Google</a>
                                <div className="divider"><span>Or</span></div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" name="email" id="email" />
                                    <i className="icon_mail_alt"></i>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <div className="hideShowPassword-wrapper" style={{position: "relative", display: "block", verticalAlign: "baseline", margin: "0px"}} >
                                        <input type="password" className="form-control hideShowPassword-field" name="password" id="password" defaultValue=""  autoComplete="off" style={{margin:"0px", paddingRight:"0px"}}  />
                                        <button aria-label="Show Password" title="Show Password" tabIndex="0" className="my-toggle hideShowPassword-toggle-show" aria-pressed="false" style= {{position: "absolute", right: "0px", top: "50%", marginTop: "-15px", display: "none" }} >Show</button>
                                    </div>
                                    <i className="icon_lock_alt"></i>
                                </div>
                                <div className="clearfix add_bottom_15">
                                    <div className="checkboxes float-left">
                                        <label className="container_check">Remember me
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="float-right">
                                        <button title="Close (Esc)" type="button" id="forgot"  onClick={openForgotPw} >Forgot Password?</button>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <input type="submit" defaultValue="Log In" className="btn_1 full-width mb_5" />
                                    Don’t have an account? <a href="register.html">Sign up</a>
                                </div>

                                <div id="forgot_pw" className={ isOpenForgotPw ? 'd-block': '' } style={{minHeight:'410px'}} >
                                    <div className="form-group">
                                        <label>Please confirm login email below</label>
                                        <input type="email" className="form-control" name="email_forgot" id="email_forgot" />
                                        <i className="icon_mail_alt"></i>
                                    </div>
                                    <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
                                    <div className="text-center">
                                        <input type="submit" defaultValue="Reset Password" className="btn_1" />
                                    </div>
                                </div>

                            </div>
                        </form>
                        {/* <!--form --> */}
                        <button title="Close (Esc)" type="button" className="mfp-close" onClick={()=>{ closeModal(); closeForgotPw() }} ></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default ModalLogin