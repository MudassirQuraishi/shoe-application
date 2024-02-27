import { useContext } from 'react'
import classes from './SingleShopper.module.css'
import CartContext from '../../store/cart-context'
import shopperListContext from '../../store/shoe-list-context'


const SingleShopper = (props) => {

    // console.log('props',props)

    const shopperContext=useContext(shopperListContext);

    const cartContext = useContext(CartContext);

    const addL = (event) => {
        event.preventDefault()
        // console.log('clicked buyone',cartContext.items,props.item)
        if(props.item.l===0){
            alert('can\'t buy,0 quantity')
            return;
        }
        cartContext.addItemToCart({ ...props.item, size: 'l',l:1,s:0,m:0 })
        shopperContext.updateItems({id:props.item.id,size:'l'})
    }
    const addM = (event) => {
        event.preventDefault()
        if(props.item.m===0){
            alert('can\'t buy,0 quantity')
            return;
        }
        cartContext.addItemToCart({ ...props.item, size: 'm',l:0,s:0,m:1 })
        shopperContext.updateItems({id:props.item.id,size: 'm'})
    }
    const addS = (event) => {
        event.preventDefault()
        if(props.item.s===0){
            alert('can\'t buy,0 quantity')
            return;
        }
        cartContext.addItemToCart({ ...props.item, size: 's',l:0,s:1,m:0 })
        shopperContext.updateItems({id:props.item.id,size: 's'})
    }

    return <div className={classes.singleshopper}>
        <h3>{props.item.Shoename}</h3>
        <div style={{ display: 'flex' }}>

            <label>{props.item.description}</label>
            <label className={classes.price}>  ${props.item.price}</label></div>
        <div className={classes.buttons}>
            <button className={classes.button} onClick={addL}>L Size ({props.item.l})</button>
            <button className={classes.button} onClick={addM}>M Size ({props.item.m})</button>
            <button className={classes.button} onClick={addS}>S Size ({props.item.s})</button>
        </div>
        <hr className={classes.hr}></hr>
    </div>
}


export default SingleShopper