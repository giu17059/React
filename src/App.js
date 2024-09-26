import './App.css';
import React, {useState} from "react";
import { Nuevo } from './components/nuevoItem';
import { Editar } from './components/editar';
import { SelectLista } from './components/selectorLista';


function App() {

/*pantalla*/
const [pantalla, setPantalla] = useState(true);
/*listas*/
const [itemEdit, setItemEdit] = useState(null)
const [contadorId,setContadorId] = useState(1);
const [listaLista, setListaLista] = useState([[]]);
const [lista, setLista] = useState(listaLista[0]);
const [indexListaActual, setIndexListaActual] = useState(0);


function actualizarListaActual(nuevaLista) {
  const listaActualizada = [...listaLista];
  listaActualizada[indexListaActual] = nuevaLista; 
  setListaLista(listaActualizada); 
  setLista(nuevaLista); 
}

return (

<div className="inicio container inicio_container">
  <div className='columna'>
  {pantalla ? (
    
    <div className='listas'>
      <h1>Lista de compras</h1>
      <SelectLista 
      setLista={setLista} 
      lista={listaLista} 
      setListaLista={setListaLista} 
      listaActual={lista}
      setIndexListaActual={setIndexListaActual}/>

      <h3>Nuevo Item</h3>
      <Nuevo 
      setEdit={setItemEdit} 
      setPant={setPantalla} 
      items ={lista} 
      setItems={actualizarListaActual} 
      contador={contadorId} 
      setContador={setContadorId}/>

    </div>
    



):(

  <div>
    <Editar 
    producto = {itemEdit} 
    setPant={setPantalla} 
    items ={lista} 
    setItems={actualizarListaActual}/>
  </div>



    )
    }
    </div>
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