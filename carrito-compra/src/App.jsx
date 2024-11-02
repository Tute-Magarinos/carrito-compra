import {useState, useEffect  } from "react";
import stock from "./components/stock";
import Carrito from "./components/carrito";
import Productos from "./components/productos";
import 'bootstrap/dist/css/bootstrap.min.css';
 
function App() {
  const [productos, setProductos] = useState([]); 
  const [carrito, setCarrito] = useState([]); 
  const [mensajeAdvertencia, setMensajeAdvertencia] = useState('')
 
  useEffect(() => {
    setProductos(stock);
  }, []);

  const calcularTotalCompra = () => {
    return carrito.reduce((total, item) => total + item.unitPrice * item.cantidad, 0);
  };

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id);
    const esProductoLimitado = producto.name === " 🧻Papel Higiénico" || producto.name === "🧼 Alcohol en Gel";

    if (productoExistente && productoExistente.cantidad >= 5 && esProductoLimitado) {
      setMensajeAdvertencia("Lo sentimos. No es posible comprar más unidades. Otras familias también necesitan abastecerse (no sea sorete en resumen... ).");
      return;
    } else {
      setMensajeAdvertencia('');
    }

    if (productoExistente) {
      setCarrito(
        carrito.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };


  const quitarDelCarrito = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id);
    if (productoExistente.cantidad === 1) {
      setCarrito(carrito.filter(item => item.id !== producto.id));
    } else {
      setCarrito(
        carrito.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
      );
    }
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <Productos productos={productos} agregarAlCarrito={agregarAlCarrito} />
        </div>
        <div className="col-md-6">
          <Carrito carrito={carrito} quitarDelCarrito={quitarDelCarrito} totalCompra={calcularTotalCompra()}/>
    
          {mensajeAdvertencia && <div className="alert alert-warning mt-3">{mensajeAdvertencia}</div>}
        </div>
      </div>
    </div>
  );
}

export default App;