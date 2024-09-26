import "../App.css";

export function MostrarLista ({items, Realizado, Eliminar, Editar}){

          return (
            <div className="lista_contenedor">
              {/* Encabezado de la lista */}
              <div className="lista_encabezado">
                <div className="encabezado_item">Nombre</div>
                <div className="encabezado_item">Cant.</div>
                <div className="encabezado_item">Comprado</div>
                <div className="encabezado_item">Eliminar</div>
                <div className="encabezado_item">Edit.</div>
              </div>
              
              {/* Lista de items */}
              {items.map((item, index) => (
                <div className={`lista_item ${item.marcado ? "item_realizado" : ""}`} key={item.id}>
                  <div className="item_nombre">{item.nombre}</div>
                  <div className="item_cantidad">{item.cantidad}</div>
                  <div className="item_checkbox">
                    <input
                      className="checkbox_item"
                      checked={item.marcado}
                      type="checkbox"
                      onChange={() => Realizado(item)}
                    />
                  </div>
                  <div className="item_eliminar">
                    <button className="boton_eliminar" onClick={() => Eliminar(index)}>X</button>
                  </div>
                  <div className="item_editar">
                    <button className="boton_editar" onClick={() => Editar(item)}>Edit.</button>
                  </div>
                </div>
              ))}
            </div>
          );
        }
        