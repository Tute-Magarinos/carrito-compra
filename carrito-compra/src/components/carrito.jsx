import React from 'react';

function Carrito({ carrito, quitarDelCarrito }) {
  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {carrito.map(item => (
          <li key={item.id}>
            {item.name} - Cantidad: {item.cantidad}
            <button onClick={() => quitarDelCarrito(item)}>Quitar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carrito;