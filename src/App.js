import './App.css';
import React, {useState} from "react";
import { Nuevo } from './components/nuevoItem';
/* const [texto, setText]=useState("notificacion")


  function cambioTexto(e){
    console.log(e)
    if(e.target.checked){
    setText("chau")
    }
    else{
      setText("hola")
    }
  }

  return (
    <div className="App">
      <input type='checkbox' onChange={cambioTexto}></input>
      <Notification 
      titulo={texto}/>

      
    </div>
    
    
  );*/

function App() {

return(

<div className="inicio">
<Nuevo></Nuevo>
</div>







)}
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