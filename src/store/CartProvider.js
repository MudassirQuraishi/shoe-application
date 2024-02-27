

import { useState } from "react";
import CartContext from "./cart-context";
import { useEffect } from "react";
import { cartDelete, cartGet, cartPost, cartUpdate } from "./cartCrud";



const CartProvider = (props) => {

    const [items,setItems]=useState([])


    useEffect(()=>{
        let ans=[]
        async function getting(){
            ans= await cartGet();
            setItems(ans);
        }
        getting();

        
        
    },[])


    const addingItemToCart=async (item)=>{

        let p=[...items];
        let found=false;
        let up;
        for(let i=0;i<p.length;i++){
            if(p[i].id===item.id){
                found=true;
                if(item.size==='l'){
                    p[i].l=Number(p[i].l)+Number(1);
                }else if(item.size==='s'){
                    p[i].s=Number(p[i].s)+Number(1);
                }else{
                    p[i].m=Number(p[i].m)+Number(1);
                }
                up=p[i];
                
            }
        }
        if(!found){
            // p.push(item)
            let z= await cartPost(item)
            setItems([...items,z])
        }else{
            console.log('cart ',p)
            cartUpdate(up)
            setItems([...p])
        }
        // for()
        
    }

    const removingItemFromCart=async (id)=>{
        await cartDelete(items)
        setItems([]);
        alert('order placed')

    }

    const updatingItemFromCart=(id)=>{

    }
    const cartContext = {

        items: items || [],
        // totalAmount: 0,
        addItemToCart: addingItemToCart,
        removeItemFromCart: removingItemFromCart,
        updateItemFromCart: updatingItemFromCart
    }


    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}


export default CartProvider;