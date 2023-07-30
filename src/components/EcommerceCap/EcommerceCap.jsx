import { useState, useEffect, useRef } from "react";
import './EcommerceCap.css';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc,addDoc,writeBatch} from "firebase/firestore";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Swal from 'sweetalert2';

const firebaseConfig = {
  apiKey: "AIzaSyAlgztwIEMrmv59PNf5xEfDhILZzTQrakE",
  authDomain: "indumentaria-e6763.firebaseapp.com",
  databaseURL: "https://indumentaria-e6763-default-rtdb.firebaseio.com",
  projectId: "indumentaria-e6763",
  storageBucket: "indumentaria-e6763.appspot.com",
  messagingSenderId: "629294298408",
  appId: "1:629294298408:web:70db1e4e46386d09be4c1d",
  measurementId: "G-SP3EPGXQ65"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const EcommerceCap = () => {
  const leerColeccion = async () => {
    const querySnapshot = await getDocs(collection(db, "indumentaria-portfolio-1e7rp"));
    const datosProductos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      cantidad: 0
    }));
    setDatosProductos(datosProductos);
    localStorage.setItem('productos', JSON.stringify(datosProductos));
  };
  useEffect(() => {
    const storedProductos = localStorage.getItem('productos');
    if (storedProductos) {
      setDatosProductos(JSON.parse(storedProductos));
    } else {
      leerColeccion();
    }
  }, []);
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [datosProductos, setDatosProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  const [cantidadesSeleccionadas, setCantidadesSeleccionadas] = useState({});
  const [idSeleccionado, setIdSeleccionado] = useState(null);
  const [nombreComprador, setNombreComprador] = useState('');
  const [lugarEnvio, setLugarEnvio] = useState('');
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [codigoSeguridad, setCodigoSeguridad] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const carritoVacio = carrito.length === 0;
  const [menuExpandido, setMenuExpandido] = useState(false);
  const navbarRef = useRef(null);


  const aumentarCantidad = (id) => {
    setDatosProductos((prevProductos) => {
      return prevProductos.map((producto) => {
        if (producto.id === id && producto.stock > cantidadesSeleccionadas[id]) {
          return { ...producto, cantidad: cantidadesSeleccionadas[id] + 1 };
        }
        return producto;
      });
    });

    setCantidadesSeleccionadas((prevCantidades) => {
      return { ...prevCantidades, [id]: Math.min((prevCantidades[id] || 0) + 1, datosProductos.find((producto) => producto.id === id).stock) };
    });
  };

  const reducirCantidad = (id) => {
    setDatosProductos((prevProductos) => {
      return prevProductos.map((producto) => {
        if (producto.id === id && cantidadesSeleccionadas[id] > 0) {
          return { ...producto, cantidad: cantidadesSeleccionadas[id] - 1 };
        }
        return producto;
      });
    });

    setCantidadesSeleccionadas((prevCantidades) => {
      return { ...prevCantidades, [id]: Math.max((prevCantidades[id] || 0) - 1, 0) };
    });
  };

  const agregarAlCarrito = (id) => {
    const producto = datosProductos.find((producto) => producto.id === id);
    if (cantidadesSeleccionadas[id] > 0 && cantidadesSeleccionadas[id] <= producto.stock) {
      const carritoActualizado = [...carrito];
      const indiceProducto = carritoActualizado.findIndex((item) => item.id === id);
      if (indiceProducto !== -1) {
        const cantidadTotal = carritoActualizado[indiceProducto].cantidad + cantidadesSeleccionadas[id];
        if (cantidadTotal <= producto.stock) {
          carritoActualizado[indiceProducto].cantidad = cantidadTotal;
        } else {
          carritoActualizado[indiceProducto].cantidad = producto.stock;
        }
      } else {
        const nuevoProducto = { ...producto, cantidad: cantidadesSeleccionadas[id] };
        carritoActualizado.push(nuevoProducto);
      }
      Swal.fire('Agregado al carrito');
      setCarrito(carritoActualizado);
      setIdSeleccionado(id);
    } else {
      Swal.fire("La cantidad seleccionada no es válida.");
    }
  };
  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(nuevoCarrito);
  };
  const calcularTotal = () => {
    const total = carrito.reduce((accum, producto) => {
      return accum + producto.price * producto.cantidad;
    }, 0);
    return total;
  };
  const calcularSubtotal = (producto) => {
    return producto.price * producto.cantidad;
  };
  const generarOrden = async () => {
    if (carrito.length === 0) {
      Swal.fire("El carrito está vacío. Agrega productos antes de realizar la compra.");
      return;
    }
    if (!nombreComprador || !/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(nombreComprador)) {
      setErrorMessage("El nombre y apellido no están completados correctamente.");
      return;
    }
    if (!lugarEnvio || !/^[a-zA-Z0-9\s]+$/.test(lugarEnvio)) {
      setErrorMessage("La dirección de envío no está completada correctamente.");
      return;
    }
    if (!numeroTarjeta || !/^\d{18}$/.test(numeroTarjeta)) {
      setErrorMessage(
        "El número de tarjeta no está completado correctamente (debe contener 18 dígitos)."
      );
      return;
    }
    if (!codigoSeguridad || !/^\d{3}$/.test(codigoSeguridad)) {
      setErrorMessage(
        "El código de seguridad no está completado correctamente (debe contener 3 dígitos)."
      );
      return;
    }
    setErrorMessage("");
    const orden = {
      items: carrito.map((producto) => ({
        id: producto.id,
        name: producto.name,
        quantity: producto.cantidad,
        price: producto.price,
      })),
      total: calcularTotal(),
      buyer: {
        site: "e-commerce indumentaria",
        name: nombreComprador ,
        hora: new Date().toLocaleTimeString(),
      },
      lugar: lugarEnvio,
    };
    try {
      const docRef = await addDoc(collection(db, "ordenes"), orden);
      console.log("Orden creada con ID: ", docRef.id);
      const batch = writeBatch(db);
      carrito.forEach((producto) => {
        const productoRef = doc(db, "indumentaria-portfolio-1e7rp", producto.id);
        batch.update(productoRef, {
          stock: producto.stock - producto.cantidad,
        });
      });
      await batch.commit();
      setCarrito([]);
      setCantidadesSeleccionadas({});
      resetearCantidad(idSeleccionado);
      await leerStockDisponible();
      setMostrarCarrito(false);
      Swal.fire("Compra terminada");
    } catch (error) {
      console.error("Error al generar la orden: ", error);
      Swal.fire("Ocurrió un error al procesar la compra");
    }
  };

  const resetearCantidad = (id) => {
    setCantidadesSeleccionadas((prevCantidades) => {
      return { ...prevCantidades, [id]: 0 };
    });
  };

  const mostrarProductosPorCategoria = (categoria) => {
    setMostrarCarrito(false);
    setCategoriaSeleccionada(categoria);
    cerrarMenu();
  };
  const productosFiltrados = categoriaSeleccionada === 'Todas'
    ? datosProductos
    : datosProductos.filter(producto => producto.category === categoriaSeleccionada);
  const leerStockDisponible = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "indumentaria-portfolio-1e7rp"));
      const datosProductos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        cantidad: 0
      }));
      setDatosProductos(datosProductos);
      console.log("Stock disponible actualizado:", datosProductos);
    } catch (error) {
      console.error("Error al leer el stock disponible:", error);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuExpandido(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const cerrarMenu = () => {
    setMenuExpandido(false);
  };
  const toggleMenu = () => {
    setMenuExpandido((prevState) => !prevState);
  };
  return (
    <main id="inicio" className="ecommerce">
      <div className="contenido-seccion-ecommerce">
      <Navbar expand="lg" variant="dark" className="ecommerce-nav" ref={navbarRef} style={{ backgroundColor: '#EC4899', borderColor: '#A3FF91',}} sticky="top">
          <Container fluid>
            <Navbar.Brand href="#inicio">
              <img className="img-logo" src="https://i.ibb.co/SnfKPqY/12345-fotor-bg-remover-20230715232152.png" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" className={`icono-toggle-navmenu ${menuExpandido ? "active" : ""}`} onClick={toggleMenu} />
            <Navbar.Collapse id="navbarNav"expanded={menuExpandido} in={menuExpandido} className="navbar-collapse">
              <Nav className="ms-auto barra-navegacion-ecommerce">
                <Nav.Link className="nav-menu" onClick={() => {mostrarProductosPorCategoria('Todas'); cerrarMenu(); }}>
                  <li>Atavíos</li>
                </Nav.Link>
                <Nav.Link className="nav-menu" onClick={() => {mostrarProductosPorCategoria('Gorras'); cerrarMenu(); }}>
                  <li>Gorras</li>
                </Nav.Link>
                <Nav.Link className="nav-menu" onClick={() => {mostrarProductosPorCategoria('Remeras'); cerrarMenu(); }}>
                  <li>Remeras</li>
                </Nav.Link>
                <Nav.Link className="nav-menu" onClick={() => {mostrarProductosPorCategoria('Zapatillas'); cerrarMenu(); }}>
                  <li>Zapatillas</li>
                </Nav.Link>
                <Nav.Link className="nav-menu" onClick={() => {setMostrarCarrito(!mostrarCarrito); cerrarMenu(); }}>
                  <li>Carrito</li>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="seccion-productos">
          <div className="productos">
            {productosFiltrados.map((producto) => (
              <div key={producto.id} className="producto">
                <h1>{producto.name}</h1>
                <img className="img-indumentaria" src={producto.image} alt={producto.name} />
                <p>Precio: ${producto.price} kiwy pesos</p>
                <p>Cantidad: {producto.stock}</p>
                <p>Cantidad seleccionada: {cantidadesSeleccionadas[producto.id] || 0}</p>
                <div className="contenedor-botones-productos">
                  <button className="button-action" onClick={() => aumentarCantidad(producto.id)}>Agregar</button>
                  <button className="button-action" onClick={() => reducirCantidad(producto.id)}>Quitar</button>
                  <button className="button-action" onClick={() => agregarAlCarrito(producto.id)}>Mandar al Carrito</button>
                </div>
              </div>
            ))}
          </div>
          {mostrarCarrito ? (
            <div className="seccion-carrito">
              <h1>Carrito de Compras</h1>
              {carritoVacio ? (
                <div>
                  <h1>El carrito está vacío.</h1>
                  <button className="button-carrito-vacio" onClick={() => setMostrarCarrito(false)}>Seguir Comprando</button>
                </div>
              ) : (
                <>
                  <div className="productos-agregados">
                    {carrito.map((producto, index) => (
                      <div key={index} className="detalles">
                        <p>{producto.name}</p>
                        <p>Cantidad seleccionada: {producto.cantidad}</p>
                        <p>Subtotal: ${calcularSubtotal(producto)} kiwy pesos</p>
                        <button className="button-eliminarElemento" onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
                      </div>
                    ))}
                  </div>
                  <h1>Total: ${calcularTotal()} kiwy pesos</h1>
                  <div className="seccion-input">
                    <input
                      type="text"
                      placeholder="Apodo del comprador"
                      value={nombreComprador}
                      onChange={(e) => setNombreComprador(e.target.value)}
                      required // Campo requerido
                    />
                    <input
                      type="text"
                      placeholder="Lugar de envío"
                      value={lugarEnvio}
                      onChange={(e) => setLugarEnvio(e.target.value)}
                      required // Campo requerido
                    />
                    <input
                      type="tel"
                      placeholder="Número de tarjeta (18 dígitos)"
                      pattern="[0-9]{18}"
                      maxLength={18}
                      value={numeroTarjeta}
                      onChange={(e) => setNumeroTarjeta(e.target.value)}
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Código de seguridad (3 dígitos)"
                      pattern="[0-9]{3}"
                      maxLength={3}
                      value={codigoSeguridad}
                      onChange={(e) => setCodigoSeguridad(e.target.value)}
                      required
                    />
                    </div>
                  {errorMessage && <h1 className="error-message">{errorMessage}</h1>}
                  <button className="button-terminarCompra" onClick={generarOrden}>Terminar Compra</button>
                  <button className="button-terminarCompra" onClick={() => setMostrarCarrito(false)}>Seguir Comprando</button>
                </>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default EcommerceCap;
