import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from 'axios';

//style
import "./detail-page.css"
import "./style.css"
import "./custom.css"

class Home extends Component{
    
    constructor()//Para que se ejecute apenas se cree la clase
    {
        super();//Para jalar todas las funcionabilidades de extends Components
        this.state = {//como session en php
            loading : true,
            restaurantes:[]
        }

    }

    async componentDidMount()//apenas carga el componente
    {
        const res = await axios.get(`https://mozorun-backend.herokuapp.com/restaurants/`)
        .then(res => {
            this.setState({
                restaurantes:res.data,
                loading : false
            });
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        });
    }

    render()
    {
        return(
        <>
        <div className="header-video">
            <div id="hero_video">
                <div className="shape_element one"></div>
                <div className="shape_element two"></div>
                <div className="opacity-mask d-flex align-items-center" data-opacity-mask="rgba(0, 0, 0, 0.6)">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-xl-7 col-lg-8 col-md-8">
                                <h1>Delivery or Takeaway Food</h1>
                                <p>The best restaurants at the best price</p>
                                <form method="post" action="grid-listing-filterscol.html">
                                <div className="row no-gutters custom-search-input">
                                    <div className="col-lg-10">
                                        <div className="form-group">
                                            <input className="form-control no_border_r" type="text" id="autocomplete" placeholder="Address, neighborhood..." />
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <button className="btn_1 gradient" type="submit">Search</button>
                                    </div>
                                </div>
                                {/* <!-- /row --> */}
                                
                                <div className="search_trends">
                                    <h5>Trending:</h5>
                                    <ul>
                                        <li><a href="#0">Sushi</a></li>
                                        <li><a href="#0">Burgher</a></li>
                                        <li><a href="#0">Chinese</a></li>
                                        <li><a href="#0">Pizza</a></li>
                                    </ul>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <img src="img/video_fix.png" alt="" className="header-video--media" data-video-src="video/intro" data-teaser-source="video/intro" data-provider="" data-video-width="1920" data-video-height="960" />
            <div className="wave hero"></div>
            {/*<!-- /header-video -->*/}
            <video autoPlay={true} loop="loop" muted={true} id="teaser-video" className="teaser-video">
                <source src="video/intro.mp4" type="video/mp4" />
                <source src="video/intro.ogv" type="video/ogg" />
            </video>
            <div className="wave hero" style={{marginBottom: '-1px' }} ></div>
        </div>
        <div className="bg_gray" style={{transform: "none"}}>
        <div className="container margin_detail" style={{transform: "none"}}>


        <div class="main_title">
                    <span><em></em></span>
                    <h2>Top Rated Restaurants</h2>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    <Link to="/list">View All &rarr;</Link>
                </div>

        

                <div className="container width100t margin_60_40">
					
					<div className="row add_bottom_25">
						<div className="col-lg-12">
							<div className="list_home">
								<ul className="row">





                            {
                            this.state.restaurantes.map(restaurante =>
									<li className="col-lg-6" key={restaurante.id}>
										<Link to={`/restaurant/${restaurante.id}`} style={{minHeight: "130px"}}>
											<figure>
                                            <div className="score" style={{position: "absolute", left: 0}}><span className="ribbon topop" style={{padding:'4px', background: "red", }}><p className="mglmsc" style={{margin:'0'}}><center>Closed</center></p></span></div>
												<div style={{ 
												backgroundImage: "url("+restaurante.logo_url+")",
												minWidth: "100%",
												minHeight: "81%",
												backgroundSize: "contain",
												backgroundPosition: "center",
												backgroundRepeat: "no-repeat",
												}}>
												</div>
											</figure>
					
											<div className="score" style={{position: "absolute", left: 0}}><span className="ribbon" style={{padding:'4px', background: "purple", top: "4.5rem"}}><p className="mglms"  style={{margin:'0'}}>Preorder</p></span></div>
											<h3>{restaurante.Name}</h3>
											<small>{restaurante.displayAddress}</small>
											<ul>
												<li><span className="ribbon off">5 hrs</span></li>
												<li><small>0.00 MI</small></li>
												<br/>
												
											</ul>
										</Link>
									</li>)}






									

                                    
									
									
								</ul>
							</div>
						</div>
						
					</div>
				</div>



            
            {/* <!-- /row --> */}
            
        </div>
        {/* <!-- /container --> */}
        
    </div>
    </>
    )}
}
export default Home