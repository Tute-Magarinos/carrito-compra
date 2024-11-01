import React from 'react';

function Productos({ productos, agregarAlCarrito }) {
  return (
    <div>
      <h2>Productos disponibles</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            {producto.name} - ${producto.unitPrice}
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;