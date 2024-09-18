import "../App.css";
import React, { useState } from "react";

export function Nuevo({setEdit, setPant, items, setItems, contador, setContador}) {
  
  /*lista items */ 
  const [itemNombre, setInputNombre] = useState("");
  const [itemCantidad, setInputCantidad] = useState(0);
  let cont=contador;
 

  function Agregar() {
    if (itemNombre.trim() && itemCantidad > 0 && itemCantidad<10) {
      const nuevoitem = {id:cont ,nombre: itemNombre, cantidad:itemCantidad, marcado:false};
      cont++;
      setContador(cont);
      setItems([...items, nuevoitem]); 
      setInputNombre(''); 
      setInputCantidad(1);
    }
    if(itemNombre.trim() && itemCantidad > 0 && itemCantidad>=10) {
      const nuevoitem = {id:contador, nombre: itemNombre, cantidad:10, marcado:false};
      setContador(contador++);
      setItems([...items, nuevoitem]); 
      setInputNombre(''); 
      setInputCantidad(1);
  }
 }

  function Realizado(producto){
    producto.marcado ? producto.marcado = false : producto.marcado = true;
    const marcado = items.filter(item=> item.marcado === true); 
    const nomarcado = items.filter(item => item.marcado === false);
    const listaNueva = [...nomarcado,...marcado];

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


  function Eliminar (indexItem){
    setItems((items) => items.filter((item, index) => index !== indexItem))
  }

  function Editar (item){
    setEdit(item);  
    setPant(false);
  }


  return (
    <div>
      <div>
        <div>
          <h1>Nuevo item (cantidad max 10)</h1>
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
                <li className={item.marcado ? "lista_items_realizado":""} key={item.id}>{item.nombre}  cantidad: {item.cantidad}
                    <input  className="lista_item_hecho"
                            checked= {item.marcado}
                            type="checkbox" 
                            onChange={() => Realizado(item)}/>
                    <button className="lista_item_eliminar"
                            onClick={() => Eliminar(index)}>X</button>
                    <button className="lista_item_modificar"
                            onClick={() => Editar(item)}>EDIT</button>
                </li>
                {console.log(item)}
            </div>
        ))}
      </ul>
    </div>
  );
}
