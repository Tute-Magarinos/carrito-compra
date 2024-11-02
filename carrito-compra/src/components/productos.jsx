
function Productos({ productos, agregarAlCarrito }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Productos disponibles</h2>
      </div>
      <ul className="list-group list-group-flush">

        {productos.map(producto => (


          <li key={producto.id} className="list-group-item d-flex justify-content-between align-items-center">


            <div>
              {producto.name} - <strong>${producto.unitPrice}</strong>
            </div>


            <button className="btn btn-primary" onClick={() => agregarAlCarrito(producto)}>
              Agregar al carrito 
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
}
export default Productos;