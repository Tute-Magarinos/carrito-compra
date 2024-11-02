
function Carrito({ carrito, quitarDelCarrito,totalCompra }) {
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
                {item.name} - Cantidad: <strong>{item.cantidad}</strong> - Precio total: <strong>${item.unitPrice * item.cantidad}</strong>
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
export default Carrito;