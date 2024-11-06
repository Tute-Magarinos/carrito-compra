import { useState, useEffect } from "react";

function Carrito({ carrito, quitarDelCarrito }) {
  const [totalCompra, setTotalCompra] = useState(0);

  useEffect(() => {
    const total = carrito.reduce((total, item) => total + item.unitPrice * item.cantidad, 0);
    setTotalCompra(total); 
  }, [carrito]); 

  return (
    <div className="card">
      <div className="card-header">
        <h2>Carrito de compras 🛒</h2>
      </div>

      <ul className="list-group list-group-flush">
        {carrito.length === 0 ? (
          <li className="list-group-item">Tu carrito está vacío</li>
        ) : (
          carrito.map(item => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                {item.name} - Cantidad: <strong>{item.cantidad}</strong> - Precio : <strong>${item.unitPrice * item.cantidad}</strong>
              </div>

              <button className="btn btn-danger" onClick={() => quitarDelCarrito(item)}>
                Quitar
              </button>
            </li>
          ))
        )}
      </ul>

      {carrito.length > 0 && (
        <div className="card-footer">
          <h4>Total: ${totalCompra}</h4>
        </div>
      )}
    </div>
  );
}
// nota  :no se por que cuando agrego un producto no se cambia el total cuadno si tendria (se que no iba en el proyecto pero queria agregarlo XD) osea el total cambia pero no se muestra
// nota 2: si agrego cosas al carrito y cambio el "h4" por otra cosa por ejemplo un "p" el total si cambia (creo yo que es un problema de iteraccion mismo de react con el DOM ¯\_( ͡° ͜ʖ ͡°)_/¯)
export default Carrito;
