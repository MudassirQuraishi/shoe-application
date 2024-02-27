import { crudUrl } from "./crudUrl"

export const productPost= async (item)=>{

    const {Shoename,description,price,id,l,m,s}=item;
    try{
        const res=await fetch(`${crudUrl}/product`,{
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
            throw new Error('something went wrong in uploading product')
        }
    }catch(err){
        console.log(err);
    }
}

export const productGet= async ()=>{

    // const {Shoename,description,price,id,l,m,s}=item;
    try{
        const res=await fetch(`${crudUrl}/product`,{
            method:'GET',
             headers:{
                'Content-Type':'application/json'
            }
        })

        if(res.ok){
            return res.json();
        }else {
            throw new Error('something went wrong in getting product')
        }
    }catch(err){
        console.log(err);
    }
}

export const productUpdate= async (item)=>{

    const {Shoename,description,price,id,l,m,s}=item;
    try{
        const res=await fetch(`${crudUrl}/product/${item._id}`,{
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
            throw new Error('something went wrong in updating product')
        }
    }catch(err){
        console.log(err);
    }
}