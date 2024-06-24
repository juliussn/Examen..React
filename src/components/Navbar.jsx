import React, { useState } from "react";

function Navbar() {
    
    const [contador, setContador] = useState(0);


    const sumarUno = () => {
        setContador(contador + 1);
    };
    const restarUno = () => {
        setContador(contador - 1);
    };

    return (
        <nav className="myNav">
            <h1>items: {contador}</h1>
            <button className="sumar" onClick={sumarUno}>+</button>
            <button className="restar" onClick={restarUno}>-</button>
        </nav>
    );
}

export default Navbar;
