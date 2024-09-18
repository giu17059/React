import './App.css';
import React, {useState} from "react";
import { Nuevo } from './components/nuevoItem';
import { Editar } from './components/editar';



function App() {


/*pantalla*/
const [pantalla, setPantalla] = useState(true);
const [itemEdit, setItemEdit] = useState(null)
const [lista, setLista] = useState([]);
const [contadorId,setContadorId] = useState(1)

 
return (

<div className="inicio">
  {pantalla ? (
// NO tocar
//
   
    <div>
      <Nuevo setEdit={setItemEdit} setPant={setPantalla} items ={lista} setItems={setLista} contador={contadorId} setContador={setContadorId}></Nuevo>
    </div>
    



):(

  <div>
    <Editar producto = {itemEdit} setPant={setPantalla} items ={lista} setItems={setLista}></Editar>
  </div>


//NO tocar
//
    )
    }
  </div>
  );
};

export default App;

/*function App() {
  // Estado para manejar el texto del input y los items de la lista
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  // Función que se ejecuta cuando se añade un nuevo item
  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue(''); // Limpiar el input después de añadir
    }
  };

  return (
    <div className="app">
      <h1>Lista de Compras</h1>
      
      /* Input y botón para añadir items */
      /*<input
        type="text"
        placeholder="Añadir un producto"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddItem}>Añadir</button>
      
      /* Lista de items */
    /* <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}*/