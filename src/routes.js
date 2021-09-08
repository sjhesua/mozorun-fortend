import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

//Pages
import Home from "./pages/Home/Home";
//Components
import NavBar from './components/NavBars/NavBar'
import NavBarComun from './components/NavBars/NavBarComun'
import Footer from './components/Footer/Footer'
import RestaurantDetail from "./pages/Restaurant/RestaurantDetail";
import List from "./pages/List/List";
import Checkout from "./pages/checkout/checkout";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginContainer}/>
            <Route component={DefaultContainer}/>
        </Switch>
    </BrowserRouter>
);

const LoginContainer = () => (
    <>
        <NavBar />
        <main>
            <Route path="/" component={Home} />  
        </main>
        <Footer/>
    </>
    
);
  
  
const DefaultContainer = () => (
    <div>
        <NavBarComun />
        <div style={{width:'100%'}}>
            <Route exact path="/" component={Home} />
            <Route exact path="/restaurant/:restaurantId" component={RestaurantDetail} />  
            <Route exact path="/list" component={List} />
            <Route exact path="/checkout" component={Checkout} />
        </div>
        <Footer/>
    </div>
);

export default Routes;