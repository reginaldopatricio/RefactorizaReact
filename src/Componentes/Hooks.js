import React, { useState, useEffect } from 'react';
import './estilos.css';



function Hooks(props) {

    const [contador, setCount] = useState(props.initialNumber);
    const [productos, setProductos] = useState([]);


    const handleClick= () => {
        setCount(contador + 1);
        

    }

    useEffect(() => {
        componentDidMount()
    }, []);

    const componentDidMount = () => {

        fetch ("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => {
            setProductos(data.products)

        })
        
    }

    return (<div class="productos">
        {contador}
        <button class="boton" onClick={handleClick}>Click</button>
        <h1>{productos[contador]?.title}</h1>
        <img class="imagenes" src={productos[contador]?.images[0]}></img>
        <p class="p"> <b>Precio:</b>  {productos[contador]?.price}</p>
    </div>)
    
}

export default Hooks;