import { crudUrl } from "./crudUrl"

export const cartPost= async (item)=>{

    const {Shoename,description,price,id,l,m,s}=item;
    try{
        const res=await fetch(`${crudUrl}/cart`,{
            method:'POST',
            body:JSON.stringify({
                Shoename,
                description,
                price,
                id,
                l,
                m,
                s
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        if(res.ok){
            return res.json();
        }else {
            throw new Error('something went wrong not uploaded to cart')
        }
    }catch(err){
        console.log(err);
    }
}

export const cartGet= async ()=>{

    // const {Shoename,description,price,id,l,m,s}=item;
    try{
        const res=await fetch(`${crudUrl}/cart`,{
            method:'GET',
             headers:{
                'Content-Type':'application/json'
            }
        })

        if(res.ok){
            return res.json();
        }else {
            throw new Error('something went wrong in getting cart')
        }
    }catch(err){
        console.log(err);
    }
}

export const cartUpdate= async (item)=>{

    const {Shoename,description,price,id,l,m,s}=item;
    try{
        const res=await fetch(`${crudUrl}/cart/${item._id}`,{
            method:'PUT',
            body:JSON.stringify({
                Shoename,
                description,
                price,
                id,
                l,
                m,
                s
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        if(res.ok){
            return ;
        }else {
            throw new Error('something went wrong in updating cart')
        }
    }catch(err){
        console.log(err);
    }
}

export const cartDelete=async (items)=>{
    try{

        for(let i=0;i<items.length;i++){
            const res=await fetch(`${crudUrl}/cart/${items[i]._id}`,{
                method:'DELETE',
               
                headers:{
                    'Content-Type':'application/json'
                }
            })
    
            if(res.ok){
                return ;
            }else {
                throw new Error('something went wrong in updating cart')
            }
        }
       
    }catch(err){
        console.log(err);
    }
}