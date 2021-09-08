import React from "react";

import Cookie from "js-cookie";
import fetch from "isomorphic-fetch";

import AppContext from "../AppContext";

import { Component } from "react";

class CartState extends Component {
  state = {
    user: null,
    cart: { items: [], total: 0 },
  };

  componentDidMount() {
    const token = Cookie.get("token");
    // restaurar el carrito de la cookie, esto también se podría rastrear en una base de datos
    const cart = Cookie.get("cart");
    // si hay artículos en el carrito, configure los artículos y el total de la cookie
 

    if (typeof cart === "string" && cart !== "undefined") {
      console.log("foyd");
      JSON.parse(cart).forEach((item) => {
        this.setState({
          cart: { items: JSON.parse(cart), total: item.price * item.quantity },
        });
      });
    }
    if (token) {
      // authenticate the token on the server and place set user object
      fetch("http://localhost:1337/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        // if res comes back not valid, token is not valid
        // delete the token and log the user out on client
        if (!res.ok) {
          Cookie.remove("token");
          this.setState({ user: null });
          return null;
        }
        const user = await res.json();
        this.setUser(user);
      });
    }
  }

  setUser = (user) => {
    this.setState({ user });
  };

  addItem = (item) => {
    let { items } = this.state.cart;
    // comprobar si el artículo ya está en el carrito
    // si no está en el carrito, agregue el artículo si se encuentra el artículo, aumente la cantidad ++
    const newItem = items.find((i) => i.id === item.id);
    // si el artículo no es nuevo, agregar al carrito, establecer la cantidad en 1
    if (!newItem) {
      // establece la propiedad de cantidad en 1
      item.quantity = 1;
      console.log(this.state.cart.total, item.price);
      this.setState(
        {
          cart: {
            items: [...items, item],
            total: this.state.cart.total + item.price,
          },
        },
        () => Cookie.set("cart", this.state.cart.items)
      );
    } else {
      this.setState(
        {
          cart: {
            items: this.state.cart.items.map((item) =>
              item.id === newItem.id
                ? Object.assign({}, item, { quantity: item.quantity + 1 })
                : item
            ),
            total: this.state.cart.total + item.price,
          },
        },
        () => Cookie.set("cart", this.state.cart.items)
      );
    }
    console.log(this.state.cart)
  };
  removeItem = (item) => {
    let { items } = this.state.cart;
    // comprobar si el artículo ya está en el carrito
    // si no está en el carrito, agregue el artículo si se encuentra el artículo, aumente la cantidad ++
    const newItem = items.find((i) => i.id === item.id);
    if (newItem.quantity > 1) {
      this.setState(
        {
          cart: {
            items: this.state.cart.items.map((item) =>
              item.id === newItem.id
                ? Object.assign({}, item, { quantity: item.quantity - 1 })
                : item
            ),
            total: this.state.cart.total - item.price,
          },
        },
        () => Cookie.set("cart", this.state.items)
      );
    } else {
      const items = [...this.state.cart.items];
      const index = items.findIndex((i) => i.id === newItem.id);

      items.splice(index, 1);
      this.setState(
        { cart: { items: items, total: this.state.cart.total - item.price } },
        () => Cookie.set("cart", this.state.items)
      );
    }
  };
  render() {
    //const { Component, pageProps } = this.props;

    return (
      <AppContext.Provider
        value={{
          user: this.state.user,
          isAuthenticated: !!this.state.user,
          setUser: this.setUser,
          cart: this.state.cart,
          addItem: this.addItem,
          removeItem: this.removeItem,
        }}
      >
          {this.props.children} 
      </AppContext.Provider>
    );
  }
}

export default CartState;