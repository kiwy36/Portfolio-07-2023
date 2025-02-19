
import './CoffePage.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CoffePage = () => {
  const carouselImages = [
    "https://i.ibb.co/mVs2c8Xx/unnamed-12.png",
    "https://i.ibb.co/C555r2WM/unnamed-13.png",
    "https://i.ibb.co/V02nd36g/unnamed-14.png",
  ];
  const productos = [
    {imgSrc: 'https://i.ibb.co/B5gtGV2Y/unnamed.png',descripcion: 'Espresso',precio: '15 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/tT0xbVjN/unnamed-1.png',descripcion: 'Capuchino',precio: '20 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/SjszdVR/unnamed-2.png',descripcion: 'Americano',precio: '17 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/tpq1yV0x/unnamed-3.png',descripcion: 'Mocachino',precio: '21 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/67cFXBn3/unnamed-4.png',descripcion: 'Café Cortado',precio: '16 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/Z1gDQSQc/unnamed-5.png',descripcion: 'Café Fuerte',precio: '22 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/Hfdywqkb/unnamed-6.png',descripcion: 'Galleta de Chocolate',precio: '12 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/WvW5CTXR/unnamed-7.png',descripcion: 'Scone de Glaseado',precio: '10 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/Xf3FtffN/unnamed-8.png',descripcion: 'Postre especial de Queso',precio: '16 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/FLBH8HzD/unnamed-9.png',descripcion: 'Croissant con Chocolate',precio: '11 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/s9w4GbSF/unnamed-10.png',descripcion: 'Porción de Pastel',precio: '12 Kiwy Pesos',},
    {imgSrc: 'https://i.ibb.co/rf3qSDcD/unnamed-11.png',descripcion: 'Muffin especial',precio: '10 Kiwy Pesos',},
  ];
  return (
    <main className='contenedor-general-cafe'>
    <div className='contenedor-cafeteria'>
      <header id="inicio" className='contenido-portada'>
          <h1>Bienvenido a El Taller del Café Aller</h1>
          <p>Donde los sabores del pasado se encuentran con la tecnología del futuro.</p>
      </header>
      <section className='info-cafeteria'>
        <div className='info-cafeteria-text'>
          <h2 className='subtitle-cafeteria'>Acerca de El Taller del Café Aller</h2>
          <p>
            Fundado por el distinguido Mr. Albert Aller, en el año 1835, El Taller del Café ha sido una joya familiar transmitida a través de generaciones hasta la actualidad.
            Nuestro amor por el café se fusiona con la fascinación por la estética steampunk, en pos de mantener la memoria de aquellas épocas y creando un lugar donde el pasado y el futuro se unen en cada taza de café que servimos.
          </p>
          <h2 className='subtitle-cafeteria'>Horarios y Ubicación</h2>
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
            transitionTime={300}>
            {carouselImages.map((image, index) => (
              <div key={index}>
                <img className='img-carousel' src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <section className='menu-cafeteria'>
        <h2 className='subtitle-cafeteria'>Nuestro Menú de especialidades</h2>
        <ul className="menu-cafeteria-productos">
        {productos.map((producto, index) => (
            <li key={index}>
              <img src={producto.imgSrc} alt={producto.descripcion} className="producto-imagen" /><br/>
              {producto.descripcion}<br /> {producto.precio}
            </li>
        ))}
        </ul>
        <h2 className='subtitle-cafeteria'>Nuestros combos especiales</h2>
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
        <h2 className='subtitle-cafeteria'>Próximos eventos</h2>
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
          <h2 className='subtitle-cafeteria'>Punto de Contacto</h2>
          <form className="formulario-cafeteria">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" required />
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" required />
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" placeholder='el boton de "enviar" esta desactivado, ir a la pagina principal para mandar un mensaje' rows="4" required></textarea>
            <button type="submit" className='botton-cafe-enviar' disabled>Enviar</button>
          </form>
        </div>
        <div className="imagen-contacto">
          <img src="https://i.ibb.co/S4x459F8/Imagen-de-Whats-App-2023-07-20-a-las-19-37-12.jpg" alt="vendedor" />
        </div>
      </section>
    </div>
    </main>
  );
};

export default CoffePage;
