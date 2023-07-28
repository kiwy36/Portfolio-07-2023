
import './CoffePage.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CoffePage = () => {
  const carouselImages = [
    "https://i.ibb.co/By6yTy7/cafeteria-int-003.jpg",
    "https://i.ibb.co/GQYxKZ2/cafeteria-int-002.jpg",
    "https://i.ibb.co/nzyLfJ6/cafeteria-int-007.jpg",
    "https://i.ibb.co/DCVrJy7/Imagen-de-Whats-App-2023-07-20-a-las-19-41-08.jpg",
    "https://i.ibb.co/zPRRVTy/cafeteria-int-001.jpg",
  ];
  const productos = [
    {imgSrc: 'https://i.ibb.co/P9wX620/cafe-009.jpg',descripcion: 'Espresso',precio: '15 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/6RD7TYB/cafe-008.jpg',descripcion: 'Capuchino',precio: '20 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/BZ0N230/cafe-007.jpg',descripcion: 'Latte',precio: '18 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/DbysMVS/cafe-004.jpg',descripcion: 'Americano',precio: '17 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/RHTfB6s/cafe-001.jpg',descripcion: 'Mocha',precio: '21 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/dMxJkmW/cafe-005.jpg',descripcion: 'Café Cortado',precio: '16 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/cNSPF4p/cafe-003.jpg',descripcion: 'Macchiato',precio: '19 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/GMmz25W/cafe-002.jpg',descripcion: 'Café Fuerte',precio: '22 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/0Kt8DH1/postre-002.jpg',descripcion: 'Galleta de Chocolate',precio: '12 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/k5B3nXt/postre-006.jpg',descripcion: 'Scone de Glaseado',precio: '10 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/PDjD8TM/postre-005.jpg',descripcion: 'Postre especial de Queso',precio: '16 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/ZL7fv7n/postre-001.jpg',descripcion: 'Croissant con Chocolate',precio: '11 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/ZGfyGw3/postre-009.jpg',descripcion: 'Porción de Pastel',precio: '12 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/2KpTB8Z/postre-008.jpg',descripcion: 'Pastel de Zanahoria',precio: '8 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/N2K9dqY/postre-004.jpg',descripcion: 'Muffin especial',precio: '10 Kiwy Pesos',},
  ];
  return (
    <div className='contenedor-cafeteria'>
      <header id="inicio" className='contenido-portada'>
          <h1>Bienvenido a El Taller del Café Aller</h1>
          <p>Donde los sabores del pasado se encuentran con la tecnología del futuro.</p>
      </header>
      <section className='info-cafeteria'>
        <div className='info-cafeteria-text'>
          <h2>Acerca de El Taller del Café Aller</h2>
          <p>
            Fundado por el distinguido Mr. Albert Aller, en el año 1835, El Taller del Café ha sido una joya familiar transmitida a través de generaciones hasta la actualidad.
            Nuestro amor por el café se fusiona con la fascinación por la estética steampunk, en pos de mantener la memoria de aquellas épocas y creando un lugar donde el pasado y el futuro se unen en cada taza de café que servimos.
          </p>
          <h2>Horarios y Ubicación</h2>
          <p>
          Estamos abiertos de lunes a viernes de ocho de la mañana a una de la tarde, y de cuatro a las ocho de la tarde.
          Los fines de semana abrimos de tres a las ocho de la tarde.
          Puedes encontrarnos en la calle Horster al 500, esquina con la calle Corner, en la ciudad de Great Heide.
          </p>
        </div>
        <div className="carousel-container">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            transitionTime={500}>
            {carouselImages.map((image, index) => (
              <div key={index}>
                <img className='img-carousel' src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <section className='menu-cafeteria'>
        <h2>Nuestro Menú de especialidades</h2>
        <ul className="menu-cafeteria-productos">
        {productos.map((producto, index) => (
            <li key={index}>
              <img src={producto.imgSrc} alt={producto.descripcion} className="producto-imagen" /><br/>
              {producto.descripcion}<br /> {producto.precio}
            </li>
        ))}
        </ul>
        <h2>Nuestros combos especiales</h2>
        <ul className="menu-cafeteria-combos">
          <li>Combo Mecánico - Capuchino y galletas de chocolate por solo 20 Kiwy Pesos</li>
          <li>Combo de la Revolución - Cafe Fuerte y dos scones de frutas por 30 Kiwy Pesos</li>
          <li>Combo Técnico - Latte y una rebanada de pastel por 30 Kiwy Pesos</li>
          <li>Combo Industrial - Mocha y Tostadas por 32 Kiwy Pesos</li>
          <li>Combo Inventor - Café Fuerte y Budin de Zanahoria por 27 Kiwy Pesos</li>
          <li>Combo Relojero - Macchiato y una porción de pastel por 26 Kiwy Pesos</li>
          <li>Combo Ingeniero - Café Cortado y Croissant con Chocolate por 27 Kiwy Pesos</li>
          <li>Combo de Vapor y Caramelo - Cafe Americano y Muffins  por 27 Kiwy Pesos</li>
          <li>Combo de Pastel de Reloj - Espresso y Scone de Frutas por 31 Kiwy Pesos</li>
        </ul>
      </section>
      <section className='eventos-cafeteria'>
        <h2>Próximos eventos</h2>
        <ul className="calendario-eventos">
          <li>15 de julio. Noche de Jazz: Música en vivo, mas de cuatro bandas invitadas y bebidas especiales para la ocasión.</li>
          <li>5 de agosto. Charla de Inventores: Aprende sobre los inventos más increíbles y disfruta de una cata de café exclusiva.</li>
          <li>7 de agosto. Concierto Acústico: Disfruta de la música en vivo con artistas locales.</li>
          <li>18 de agosto - Club de Lectura: Discute y comparte tus libros favoritos.</li>
          <li>21 de agosto- Taller de Modelismo: Únete a nuestro taller y construye barcos de vapor a escala con otros entusiastas.</li>
        </ul>
      </section>
      <section className='contactos-cafeteria'>
        <div className="columna-formulario">
          <h2>Punto de Contacto</h2>
          <form className="formulario-cafeteria">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" required />
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" required />
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" placeholder='el boton de "enviar" esta desactivado, ir a la pagina principal para mandar un mensaje' rows="4" required></textarea>
            <button type="submit" disabled>Enviar</button>
          </form>
          <div className="contacto-texto-poetico">
            <p >
              En un rincón de vapor y café,
              entre engranajes y fantasía,
              florece un arte,
              donde sueños toman ala y poesía.
              Si dudas o si anhelas crear,
              en este taller, un mundo te espera.
              ¡Contacta con nosotros, con fervor,
              y juntos pintaremos un mañana de esfera!
            </p>
          </div>
        </div>
        <div className="imagen-contacto">
          <img src="https://i.ibb.co/QPD3tPR/Imagen-de-Whats-App-2023-07-20-a-las-19-37-12.jpg" alt="vendedor" />
        </div>
      </section>
    </div>
  );
};

export default CoffePage;
