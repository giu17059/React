import "../App.css";
import React, { useState } from "react";


  

export function Editar ({producto, setPant, items, setItems}){
    const [itemEditNombre, setEditNombre] = useState ("");
    const [itemEditCantidad, setEditCantidad] = useState (0);

    function CambiarItem (idItem){
        setItems(items.map(item =>
          item.id === idItem ? { ...item, nombre: itemEditNombre, cantidad:itemEditCantidad } : item));
          setPant(true);
      }
    
      function validarCantidadEdit (e){
        const cant = parseInt(e.target.value, 10);
        cant < 0 ? setEditCantidad(0):
        (cant > 10 ? setEditCantidad (10):
        setEditCantidad(cant));
            
       
    }
    
      function CancelarEdit () {
      setPant(true);
    };
    


    return(
      <div>
        <div>
         <h1>Editar item (cantidad max 10)</h1>
        </div>
        <div>
            <label>nombre: {producto.nombre}</label>
            <label> cantidad: {producto.cantidad}</label>
        </div>
        <input
          type="text"
          placeholder="Añadir un producto"
          value={itemEditNombre}
          onChange={(e) => setEditNombre(e.target.value)}
        />
        <input 
            type="number"
            placeholder="Cantidad (max 10)"
            min={1}
            max={10}
            value={itemEditCantidad}
            onChange={validarCantidadEdit} />
        <button onClick={()=>CambiarItem (producto.id)}>Guardar</button>
        <button onClick={()=>CancelarEdit()}>Cancelar</button>
      </div>
  );
}