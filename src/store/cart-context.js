
import React from "react";

const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    addItemToCart:async (item)=>{},
    removeItemFromCart:(id)=>{},
    updateItemFromCart:(updateItem)=>{}
})



export default CartContext;