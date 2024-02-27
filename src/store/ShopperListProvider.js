

import { useState } from "react";
import shopperListContext from "./shoe-list-context";
import { useEffect } from "react";
import { productGet, productPost, productUpdate } from "./productCrud";

const ShopperListProvider=(props)=>{


    const [items,setItems]=useState([]);



    useEffect(()=>{
        let products=[];
        async function getting(){
            products=await productGet();
            setItems(products)
        }
        getting();
    },[])


    const addItems=async (item)=>{
        
        let p=await productPost(item);
        setItems([...items,p]);
    }

    const updateItems=async (ite)=>{


        let p=[...items]
        console.log('updating')

        let up;
        for(let i=0;i<p.length;i++){
            // console.log(p[i].id,' id ',ite.l)
            if(p[i].id===ite.id){
                if(ite.size==='l'){
                    p[i].l=Number(p[i].l)+Number(-1);
                }else if(ite.size==='m'){
                    p[i].m=Number(p[i].m)+Number(-1);
                }else{
                    p[i].s=Number(p[i].s)+Number(-1);
                }
                up=p[i];
                
                // console.log('id')
            }
        }
        productUpdate(up)
        setItems([...p])
    }



    const shopperContext={
        items:items||[],
        addItems:addItems,
        updateItems:updateItems
    }


    return <shopperListContext.Provider value={shopperContext}>
        {props.children}
    </shopperListContext.Provider>
}

export default ShopperListProvider