import { useState } from "react";
import { ShoppingCart } from '../global-context/shopping-cart';

function ShoppingCartProvider({value, children}){

    const [items, setItem] = useState(value);

    return(
        <ShoppingCart.Provider value={[items, setItem]}>
            {children}
        </ShoppingCart.Provider>
    )
}

export default ShoppingCartProvider