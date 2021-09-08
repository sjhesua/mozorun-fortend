import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from 'axios';
import CarouselContainer from "../../components/Slider/CarouselContainer";

//style
import "./detail-page.css"
import "./style.css"
import "./listing.css"

class List extends Component{
    
    constructor()//Para que se ejecute apenas se cree la clase
    {
        super();//Para jalar todas las funcionabilidades de extends Components
        this.state = {//como session en php
            loading : true,
            restaurantes:[],
			datos: [],
			listaDatos:[],
			busqueda:[]        }

    }
    async componentDidMount()//apenas carga el componente
    {
        const res = await axios.get(`https://mozorun-backend.herokuapp.com/restaurants/`)
        .then(res => {
            this.setState({
                restaurantes:res.data,
                loading : false,
				busqueda:res.data,
            });
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        });
		//const [datos, setDatos]= useState([]);
		//const [listaDatos, setlistaDatos]= useState([]);
		//const [busqueda, setBusqueda]= useState("");
    }
    render()
    {
		const handleChange=e=>{
			this.state.busqueda=e.target.value;
			filtrar(e.target.value);
		}

		const filtrar=(terminoBusqueda)=>{
			
			var resultadosBusqueda=this.state.restaurantes.filter((elemento)=>{
				
				if(elemento.Name)
				{
					if(elemento.Name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
					|| elemento.displayAddress.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()))
					{
						return elemento;
					}
				}
			});
			
			this.setState({busqueda:resultadosBusqueda})
		}


        return(
        <>
        <CarouselContainer/>
        




        <div className="bg_gray" style={{transform: "none"}}>
        <div className="container margin_detail" style={{transform: "none"}}>



        <div className="page_header element_to_stick">
	        <div className="container">
	            <div className="row">
	                <div className="col-xl-8 col-lg-7 col-md-7 d-none d-md-block">
	                    <h1>145 restaurants in Convent Street 2983</h1>
	                    <a href="#0">Change address</a>
	                </div>
	                <div className="col-xl-4 col-lg-5 col-md-5">
	                    <div className="search_bar_list">
	                        <input type="text"
							 className="form-control"
							  placeholder="Dishes, restaurants or cuisines"
							  onChange={handleChange}/>
	                        <button type="submit"><i className="icon_search"></i></button>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	    <div className="filters_full clearfix add_bottom_15">
	        <div className="container">
	            <div className="type_delivery">
						<ul className="clearfix">
							<li>
						        <label className="container_radio">All
						            <input type="radio" name="type_d" value="all" id="all" checked data-filter="*" className="selected"/>
						            <span className="checkmark"></span>
						        </label>
						    </li>
						    <li>
						        <label className="container_radio">Delivery
						            <input type="radio" name="type_d" value="delivery" id="delivery" data-filter=".delivery"/>
						            <span className="checkmark"></span>
						        </label>
						    </li>
						    <li>
						        <label className="container_radio">Takeaway
						            <input type="radio" name="type_d" value="takeway" id="takeaway" data-filter=".takeaway"/>
						            <span className="checkmark"></span>
						        </label>
						    </li>
						</ul>
				</div>
	            <a className="btn_map mobile btn_filters" data-toggle="collapse" href="#collapseMap"><i className="icon_pin_alt"></i></a>
	            <a href="#collapseFilters" data-toggle="collapse" className="btn_filters"><i className="icon_adjust-vert"></i><span>Filters</span></a>
	        </div>
	    </div>
	    <div className="collapse" id="collapseMap">
			<div id="map" className="map"></div>
		</div>

	    <div className="collapse filters_2" id="collapseFilters">
	        <div className="container margin_30_20">
	            <div className="row">
	                <div className="col-md-4">
	                    <div className="filter_type">
	                        <h6>Categories</h6>
	                        <ul>
	                            <li>
	                                <label className="container_check">Pizza - Italian <small>12</small>
	                                    <input type="checkbox"/>
	                                    <span className="checkmark"></span>
	                                </label>
	                            </li>
	                            <li>
	                                <label className="container_check">Japanese - Sushi <small>24</small>
	                                    <input type="checkbox"/>
	                                    <span className="checkmark"></span>
	                                </label>
	                            </li>
	                            <li>
	                                <label className="container_check">Burghers <small>23</small>
	                                    <input type="checkbox"/>
	                                    <span className="checkmark"></span>
	                                </label>
	                            </li>
	                            <li>
	                                <label className="container_check">Vegetarian <small>11</small>
	                                    <input type="checkbox"/>
	                                    <span className="checkmark"></span>
	                                </label>
	                            </li>
	                        </ul>
	                    </div>
	                </div>
	                <div className="col-md-4">
	                    <div className="filter_type">
	                        <h6>Rating</h6>
	                        <ul>
	                            <li>
	                                <label className="container_check">Superb 9+ <small>06</small>
	                                    <input type="checkbox"/>
	                                    <span className="checkmark"></span>
	                                </label>
	                            </li>
	                            <li>
	                                <label className="container_check">Very Good 8+ <small>12</small>
	                                    <input type="checkbox"/>
	                                    <span className="checkmark"></span>
	                                </label>
	                            </li>
	                            <li>
	                                <label className="container_check">Good 7+ <small>17</small>
	                                    <input type="checkbox"/>
	                                    <span className="checkmark"></span>
	                                </label>
	                            </li>
	                            <li>
	                                <label className="container_check">Pleasant 6+ <small>43</small>
	                                    <input type="checkbox"/>
	                                    <span className="checkmark"></span>
	                                </label>
	                            </li>
	                        </ul>
	                    </div>
	                </div>
	                <div className="col-md-4">
	                    <div className="filter_type">
	                        <h6>Distance</h6>
	                        <div className="distance"> Radius around selected destination <span></span> km</div>
	                        <div className="mb-3
	                        "><input type="range" min="10" max="100" step="10" value="30" data-orientation="horizontal"/></div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>

        <div className="main_title">
                    <span><em></em></span>
                    <h2>Top Rated Restaurants</h2>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                </div>



				<div className="container width100t margin_60_40">
					
					<div className="row add_bottom_25">
						<div className="col-lg-12">
							<div className="list_home">
								<ul className="row">





                            {
                            this.state.busqueda.map(restaurante =>
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
export default List