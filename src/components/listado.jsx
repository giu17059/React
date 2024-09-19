import "../App.css";

export function MostrarLista ({items, Realizado, Eliminar, Editar}){

return(
<div>
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
    </div>
    )
   )
  }
</div>
 );
}