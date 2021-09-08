import React, { Component,useContext,useState } from "react";

import { Link } from "react-router-dom";

import { useModalLogin } from "../../components/Modals/hooks/ModalLoginHooks";

import { useModalVariant } from "../../components/Modals/hooks/ModalVariantsHooks";

import { useQuery } from "@apollo/react-hooks";

import { gql } from "apollo-boost";

import ModalVariantes from "../../components/Modals/ModalVariantes";

import CartRestaurant from "../../components/Carts/CartRestaurant";

import {
    useParams
  } from "react-router-dom";

//style
import "./detail-page.css"

function RestaurantDetail(props){

        const [count, setCount] = useState(0);
        
        const [isOpenModal1, openModal1, closeModal1,info1,value1] = useModalLogin(false)
        const [items,  addItems] = useModalVariant()
        const GET_RESTAURANT_PRODUCTS = gql`
        query($id: ID!) {
        restaurant(id: $id) {
            id
            Name
            adress
            bannerweb_url
            bannerphone_url
            bannerPhone{url}
            bannerweb{url}
            categories
            {
            id
            name
            sub_categories
            {
                id
                name
                description
                products
                {
                id
                name
                description
                price
                image_url
                image {
                    url
                }
                variants
                {
                    id
                    name
                    type
                    types
                    {
                    id
                    name
                    price
                    }
                }
                }
            }
            products
            {
                id
                name
                description
                price
                image_url
                image {
                url
                }
                variants
                {
                    id
                    name
                    type
                    types
                    {
                    id
                    name
                    price
                    }
                }
            }
            }
        }
        }
        `;
        let { restaurantId } = useParams()  
        const { loading, error, data } = useQuery(GET_RESTAURANT_PRODUCTS, {
            variables: { id: restaurantId },
          });
        if (error) return error;
        if (loading) return <h1>Loading ...</h1>;
        if (data.restaurant) {
        const { restaurant } = data;
      
        return(
        <>
        <div className="hero_in detail_page background-image" style={{backgroundImage:"url("+restaurant.bannerweb_url+")" }} >
            <div className="wrapper opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
                
                <div className="container">
                    <div className="main_info">
                        <div className="row">
                            
                            <div className="col-xl-4 col-lg-5 col-md-6">
                                <div className="head"><div className="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div></div>
                                <h1>{restaurant.Name}</h1>
                                {restaurant.adress} <a href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361" target="blank">Get directions</a>
                            </div>


                            <div className="col-xl-8 col-lg-7 col-md-6">
                                <div className="buttons clearfix">
                                    <span className="magnific-gallery">
                                        <a href="img/detail_1.jpg" className="btn_hero" title="Photo title" data-effect="mfp-zoom-in"><i className="icon_image"></i>View photos</a>
                                        <a href="img/detail_2.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
                                        <a href="img/detail_3.jpg" title="Photo title" data-effect="mfp-zoom-in"></a>
                                    </span>
                                    <a href="" className="btn_hero wishlist"><i className="icon_heart"></i>Wishlist</a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <nav className="secondary_nav sticky_horizontal">
            <div className="container">
                <ul id="secondary_nav">
                    {
                        restaurant.categories.map((categoria) =>
                        <li key={categoria.id}><a className="list-group-item list-group-item-action" href={"#"+categoria.id}   style={{borderRadius:'21px'}}>{categoria.name}</a></li>
                        )
                    }
                </ul>
            </div>
            <span></span>
        </nav>
        <div className="bg_gray">
            <div className="container margin_detail">
                <div className="row">
                    <div className="col-lg-8 list_menu">
                        <section id="section-1">                                   
                        { 
                            restaurant.categories.map((categoria) =>
                            <div key={categoria.id } id={categoria.id}>
                                <h4>{categoria.name}</h4> 
                                {
                                    categoria.sub_categories ? 
                                    categoria.sub_categories.map((sub_categorie) =>
                                    <div key={sub_categorie.id} >
                                    <h5>{sub_categorie.name}</h5>
                                    <div className="row">
                                        {
                                            sub_categorie.products.map((product) =>
                                            
                                            <div className="col-md-6" key={product.id} >
                                                
                                                <a className="menu_item modal_dialog" onClick={ ()=> {openModal1() ; addItems(product,count);setCount(count + 1) }}>
                                                <figure>
                                                    <img src={product.image_url} alt="thumb" onError={(e)=>{e.target.onerror = null; e.target.src="/img/menu-thumb-placeholder.jpg"}} className="lazy"/>
                                                </figure>   
                                                <h3>{product.name}</h3>
                                                <p style={{ maxWidth: '40ch', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }} >
                                                    {
                                                        product.description == '' &&
                                                        <div style={{color:'white'}} >.</div>
                                                    }
                                                    {product.description}
                                                </p>
                                                <strong>${product.price}</strong> 
                                                </a>
                                            </div>
                                            
                                            )
                                        }
                                    </div>
                                    </div>
                                    ) :''    
                                }
                            </div>
                        )}
                        </section>
                    </div>

                    <CartRestaurant />

                </div>
            </div>
             <ModalVariantes  isOpen={isOpenModal1} closeModal={closeModal1} value={items} />
        </div>

    </>
    )
    }
}

export default RestaurantDetail