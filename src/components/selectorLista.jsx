import "../App.css";
import React, { useState } from "react";

export function SelectLista({ setLista, lista, setListaLista, listaActual, setIndexListaActual}) {

    function guardarListaActual() {
        const listaActualizada = [...lista]; 
        const indexActual = lista.indexOf(listaActual);
        if (indexActual !== -1) {
          listaActualizada[indexActual] = listaActual;
          setListaLista(listaActualizada); 
        }
      }

    function NuevaLista() {
        guardarListaActual();
      const nuevaLista = [];
      setListaLista([...lista, nuevaLista]); 
      setLista(nuevaLista); 
      setIndexListaActual(lista.length);
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
      }
    }
  
    return (
      <div>
        <select value={lista.indexOf(listaActual)} onChange={Cambiar}>
          <option value="" disabled>
            {lista.length === 0 ? "No hay listas, cree una nueva" : "Seleccione una lista"}
          </option>
          {lista.map((item, index) => (
            <option key={index} value={index}>
              Lista {index + 1}
            </option>
          ))}
          <option value="nueva">+ Nueva lista</option>
        </select>
      </div>
    );
  }