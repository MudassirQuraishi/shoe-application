import "./App.css";
import ShopperForm from "./Components/ShopperForm/ShopperForm";

import ShopperListProvider from "./store/ShopperListProvider";
import CartProvider from "./store/CartProvider";
import Header from "./Components/Headers/Header";
import ShopperList from "./Components/ShopperList/ShopperList";
import { useState } from "react";
import Cart from "./Components/Cart/Cart";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <div className='App'>
            <div className='head'></div>

            <main>
                <ShopperListProvider>
                    <CartProvider>
                        {cartIsShown && <Cart onClose={hideCartHandler} />}
                        <Header onShowCart={showCartHandler}></Header>

                        <div className='shopperform'>
                            <ShopperForm></ShopperForm>
                        </div>
                        {/* <div className='shopperlist'> */}

                        <ShopperList></ShopperList>
                        {/* </div> */}
                    </CartProvider>
                </ShopperListProvider>
            </main>
        </div>
    );
}

export default App;
