import React, { useContext } from "react";

import classes from './Header.module.css'

import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";

const Header=(props)=>{

    

    
    const cartContext=useContext(CartContext);

    const quantity=cartContext.items.reduce((acc,i)=>acc+(i.l)+(i.s)+(i.m),0);
    // console.log('header executed')

    

    return <header className={classes.header}>
        <h1>shoe Shop</h1>
        {/* <HeaderCartButton></HeaderCartButton> */}
        <button className={classes.button}  onClick={props.onShowCart} >
        <span className={classes.icon}>
            
            <CartIcon />
        </span>
        <span>Your Cart </span>
        <span className={classes.badge}>
            {quantity}
        </span>
    </button>
    </header>
}

export default Header