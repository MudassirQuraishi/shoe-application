
import { useContext } from 'react';
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context';
import Modal from '../Modals/Modals';


const Cart = props => {

    const cartctx = useContext(CartContext);

    console.log('modal cart opened')
    const cartItems = <ul>{cartctx.items.map((item) => <div item={item} key={Math.random().toString()} name={item.Shoename} l={item.l} m={item.m} s={item.s} price={item.price} id={item.id}>Shoename:{item.Shoename}, quantity: l_size={item.l}, m_size={item.m}, s_size={item.s}, Price:{item.price} </div>)}</ul>

    const amount = cartctx.items.reduce((acc, item) => { return (Number(item.l)+Number(item.m)+Number(item.s)) * Number(item.price) + acc }, 0)

    return <Modal onClose={props.onClose}>

        {cartItems}
        <div className={classes.total}></div>
        <span> Total Amount </span>
        <span>{amount.toFixed(2)}</span>
        <div className={classes.actions}>
            <button className={classes.button} onClick={()=>{cartctx.removeItemFromCart(); props.onClose()}}>place Order</button>
            <button className={classes['button--alt']} onClick={props.onClose}>Cancel</button>

        </div>
    </Modal>
}



export default Cart;