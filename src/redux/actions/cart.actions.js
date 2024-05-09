import axios from "axios";
import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  SAVE_SHIPPING_INFO,
} from "../actionTypes/cart.actionTypes";
import { Products } from "../../utils/constants";

// add to cart
export const addItemsToCart =
  (id, quantity = 1) =>
    async (dispatch, getState) => {
      const data = Products.filter((item, i) => item._id === id)
      console.log("data", data[0]);
      dispatch({
        type: ADD_TO_CART,
        payload: {
          product: data[0]._id,
          name: data[0].name,
          seller: data[0].brand.name,
          price: data[0].price,
          cuttedPrice: data[0].cuttedPrice,
          image: data[0].images[0].url,
          stock: data[0].stock,
          quantity,
        },
      });

      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
      );
    };

// remove cart item
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// empty cart
export const emptyCart = () => async (dispatch, getState) => {
  dispatch({ type: EMPTY_CART });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// save shipping info
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
