import {useState, useEffect  } from "react";
import stock from "./components/stock";
import Carrito from "./components/carrito";
import Productos from "./components/productos";
 
function App() {
  const [productos, setProductos] = useState([]); 
  const [carrito, setCarrito] = useState([]); 

 
  useEffect(() => {
    setProductos(stock);
  }, []);

  
  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id);
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
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Columna izquierda - Productos */}
      <Productos productos={productos} agregarAlCarrito={agregarAlCarrito} />

      {/* Columna derecha - Carrito */}
      <Carrito carrito={carrito} quitarDelCarrito={quitarDelCarrito} />
    </div>
  );
}

export default App;