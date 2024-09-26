import "../App.css";

import React, { useState } from "react";


  

export function Editar ({producto, setPant, items, setItems}){
    const [itemEditNombre, setEditNombre] = useState ("");
    const [itemEditCantidad, setEditCantidad] = useState (1);

    function CambiarItem (idItem){
        setItems(items.map(item =>
          item.id === idItem ? { ...item, nombre: itemEditNombre, cantidad:itemEditCantidad } : item));
          setPant(true);
      }
    
      function validarCantidadEdit (e){
        const cant = parseInt(e.target.value, 10);
        cant < 0 ? setEditCantidad(1):
        (cant > 1000 ? setEditCantidad (1000):
        setEditCantidad(cant));
            
       
    }
    
      function CancelarEdit () {
      setPant(true);
    };
    


    return(
      <div>
        <div>
         <h1>Editar item</h1>
        </div>
        <div>
        <label>Nombre anterior: {producto.nombre}</label>
        <input
          className="input_agregar nombre"
          type="text"
          placeholder="Añadir un producto"
          value={itemEditNombre}
          onChange={(e) => setEditNombre(e.target.value)}
        />
        </div>
        <div>
        <label className="label_editar">Cantidad anterior: {producto.cantidad}</label>
        <div></div>
        <input 
            className="input_agregar cantidad"
            type="number"
            placeholder="Cantidad (max 10)"
            min={1}
            max={10}
            value={itemEditCantidad}
            onChange={validarCantidadEdit} />
          </div>
        <button className="boton_editar" disabled={itemEditNombre === ""} onClick={()=>CambiarItem (producto.id)}>Guardar</button>
        <button className="boton_eliminar" onClick={()=>CancelarEdit()}>Cancelar</button>
      </div>
  );
}