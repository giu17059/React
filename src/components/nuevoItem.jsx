import "../App.css";
import React, { useState } from "react";
import { MostrarLista } from "./listado";

export function Nuevo({setEdit, setPant, items, setItems, contador, setContador}) {
  
  /*lista items */ 
  const [itemNombre, setInputNombre] = useState("");
  const [itemCantidad, setInputCantidad] = useState(0);
  let cont=contador;
 

  function Agregar() {
    if (itemNombre.trim() && itemCantidad > 0 && itemCantidad<1000) {
      const nuevoitem = {id:cont ,nombre: itemNombre, cantidad:itemCantidad, marcado:false};
      setContador(cont+1);
      setItems([...items, nuevoitem]); 
      setInputNombre(''); 
      setInputCantidad(1);
    }
    if(itemNombre.trim() && itemCantidad > 0 && itemCantidad>=1000) {
      const nuevoItem = {id:contador, nombre: itemNombre, cantidad:1000, marcado:false};
      setContador(contador++);
      setItems([...items, nuevoItem]); 
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
          <h1>Nuevo item</h1>
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
            max={1000}
            value={itemCantidad}
            onChange={validarCantidad} />
        <button onClick={Agregar}>Agregar</button>
      </div>
      <ul className="lista_contenedor">
        <MostrarLista items={items} Realizado={Realizado} Eliminar={Eliminar} Editar={Editar}></MostrarLista>
      </ul>
    </div>
  );
}
