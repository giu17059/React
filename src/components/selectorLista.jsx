import "../App.css";

import React, { useState } from "react";

export function SelectLista({ setLista, lista, setListaLista, listaActual, setIndexListaActual}) {
  const [color, setColor] = useState("#5BF1FC");
  const [colorLista, setColorLista] = useState ([]);

    function guardarListaActual() {
        const listaActualizada = [...lista]; 
        const indexActual = lista.indexOf(listaActual);
        if (indexActual !== -1) {
          listaActualizada[indexActual] = listaActual;
          setListaLista(listaActualizada); 
        
        const coloresActualizados = [...colorLista];
        coloresActualizados[indexActual] = color; 
        setColorLista(coloresActualizados);
        }
      }

    function cambiarColor(e){
      setColor(e.target.value)
    }
    function NuevaLista() {
      guardarListaActual();
      const nuevaLista = [];
      setListaLista([...lista, nuevaLista]); 
      setLista(nuevaLista);
      setColorLista([...colorLista,color])
      
      setIndexListaActual(lista.length);
      setColor("#5BF1FC")
    }
  
    function Cambiar(e) {
        guardarListaActual();
      const valorSeleccionado = e.target.value;
      if (valorSeleccionado === "nueva") {
        NuevaLista();
      } else {
        const index = parseInt(valorSeleccionado, 10);
        setLista(lista[index]);
        setIndexListaActual(index);
        setColor(colorLista[index] || "#5BF1FC");
      }
    }
  
    return (
      <div className="container separar listas_container contenedor_select">
        <div className="">
          <h2 style={{color:color}}>Lista {lista.indexOf(listaActual) + 1}</h2>
          {console.log(colorLista)}
        </div>
        <div>
          <input className="input_color" type="color" value={color} onChange={cambiarColor}/>
        </div>
        <div className="">
          <select value="" onChange={Cambiar} style={{backgroundColor:color}}>
            <option value="" disabled>"Cambiar lista"
            </option>
            {lista.map((item, index) => (
              <option key={index} value={index}>
                Lista {index + 1}
              </option>
            ))}
            <option value="nueva">+ Nueva lista</option>
          </select>
        </div>
      </div>
    );
  }