import { useState } from "react";
import { CarritoCounter } from "./carrito-counter";


export default function CarritoProvider({children, value}) {
    const [carrito, setCarrito] = useState(value);
    return (
        <CarritoCounter.Provider value={[carrito, setCarrito]}>
            {children}
        </CarritoCounter.Provider>
    )

}