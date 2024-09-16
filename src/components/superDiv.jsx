import "../App.css";

export function Notification({titulo="notificacion", mensage="hola"}){
    return (
        <div className="notification">
            <h2>{titulo}</h2>
            <p>{mensage}</p>
        </div>
    );
}