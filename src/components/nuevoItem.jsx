import "../App.css";
import React, { useState } from "react";

export function Nuevo() {
  /*lista items */
  const [items, setItems] = useState([]);
  const [itemNombre, setInputNombre]=useState("");
  const [itemCantidad, setInputCantidad]= useState(0);

  /*items comprados*/
  const [posicionItem, setPosicionItem]=useState([]);

  function Agregar() {
    if (itemNombre.trim() && itemCantidad > 0 && itemCantidad<10) {
        const nuevoitem = {nombre: itemNombre, cantidad:itemCantidad, marcado:false};
      setItems([...items, nuevoitem]); 
      setInputNombre(''); 
      setInputCantidad(1);
    }
    if(itemNombre.trim() && itemCantidad > 0 && itemCantidad>=10) {
        const nuevoitem = {nombre: itemNombre, cantidad:10, marcado:false};
      setItems([...items, nuevoitem]); 
      setInputNombre(''); 
      setInputCantidad(1);
  }
   }

  function Realizado(index){
   const listaNueva = [...items];
   listaNueva[index].marcado= !listaNueva[index].marcado;
   setItems(listaNueva);
  }

  function validarCantidad (e){
    const cant = parseInt(e.target.value, 10);
    if(cant < 0){
        setInputCantidad(0);
    }else{
        setInputCantidad(cant);
    }
}

  return (
    <div>
      <div>
        <div>
          <label>Nuevo item (cantidad max 10)</label>
        </div>
        <input
          type="text"
          placeholder="Añadir un producto"
          value={itemNombre}
          onChange={(e) => setInputNombre(e.target.value)}
        />

        <input 
            type="number"
            placeholder="Cantidad (max 10)"
            min={1}
            max={10}
            value={itemCantidad}
            onChange={validarCantidad} />
        <button onClick={Agregar}>Agregar</button>
      </div>
      <ul className="lista_contenedor">
        {items.map((item, index) => (
            <div>
                <li className={item.marcado ? "lista_items_realizado":""} key={index}>{item.nombre}  cantidad: {item.cantidad}
                    <input 
                        type="checkbox" 
                        onChange={() => Realizado(index)}/>
                    <input type="checkbox" />
                </li>
                {console.log(item)}
            </div>
        ))}
      </ul>
    </div>
  );
}
