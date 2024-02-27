import { useContext } from 'react'
import classes from './ShopperList.module.css'
import shopperListContext from '../../store/shoe-list-context'
import Singleshopper from '../SingleShopper/SingleShopper';


const ShopperList=()=>{
    const shopperContext=useContext(shopperListContext);

    // console.log('shopperlist ',shopperContext.items)

    return <div>
        <div className={classes.shopperlist}>Shoes List</div>
        <div className={classes.shopperlistall}>
            
                {shopperContext.items.map(item=>{
                    return <Singleshopper key={item.id} item={item} />
                })}

            
        </div>
    </div>
}


export default ShopperList




 