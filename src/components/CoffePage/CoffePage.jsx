
import './CoffePage.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CoffePage = () => {
  const carouselImages = [
    "https://lh3.googleusercontent.com/pw/AP1GczPejwZzfUW35lU0LNiUxVQe8Q_1uJhiRbi9YV7azAqGifeiHHblLsBzsaaBgJ4lx9ZdFdJnfbLNfPKVky1HUtcXCh_FVWvlzY9ufUQ2kSmtcotLrywuul88TJp8HgGthJKtYGVE44KbmpT7l5bd8G8AvA=w750-h618-s-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPBLdBrlFMYFJxolouGAYfuFdLoCS-RX1FmSwM-ykEIqb8dtShJviZGLLVgkp0b7RfcNsqa0IBjQsZ8jCXQgl5T2gHTQ-I6ZrQVlI2EItRtsvrC-Fk0GcA6QTSwVFXjxVRB7QTck99rxJ1BmxTkJ95E5A=w412-h618-s-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOanzuHJQB6TtCuLwfEaj1c83S18fzUr7MqWLcDBwKd6oIfQFYdIoC3Um-xHDSyL7IShA9V1tQFzCkiPDy7ygosUK8a7WE9mhF1lJVTaC1Nx5IYPCSVSoh-G1HvCJCw_PmdENvWlZhVEml5jwAUOsydFA=w750-h618-s-no?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOpD_DyZBlJvq3WBDjZaw10Hc4zCCrLRJjdmKsto3pcvElxjyg5xvC1sVGc0P4qMzT3xOm3mAOZfGFqVKOQxXPa4EaGGvhiqVoxVLi5y7tDMZVq9pT06JxPr5EzPoZg6jAF9HLpTwjz91eSp5nvzQfKaQ=w412-h618-s-no?authuser=0",
  ];
  const productos = [
    {imgSrc: 'https://lh3.googleusercontent.com/pw/AP1GczPcAmrEQUw1QYit6kudgznDR06AS5qqpFqCVa9pdK9aEZFLSgTyMnusWuUE2q14jqMW6cB2jvi2jDvNqK_cZ32aZwsx9ZMuhnu5cL8k6ysCjOWjK4ZxCy4VcBPkst2aDmND9k0zn1K1-67A0qKWEgmx-Q=w412-h618-s-no?authuser=0',descripcion: 'Espresso',precio: '15 Kiwy Pesos',},
    {imgSrc: 'https://lh3.googleusercontent.com/pw/AP1GczNqruwu3QqZI-YgIF53QbyYajG0L2U3sVBSmdgqdIyKDfRLmCkzqFnG3EpaBrLvKRRbGSWlW7OJvnJYbg6xLTpX_9s8SDI0dBmh9_QONiV43z2oTIegDAkkA7tFO4YCsJz1BQQnGPMbqygR5TLvXEkH7w=w412-h618-s-no?authuser=0',descripcion: 'Capuchino',precio: '20 Kiwy Pesos',},
    {imgSrc: 'https://lh3.googleusercontent.com/pw/AP1GczNAM6jMhWA_HsOav1BnnmX_hm2_cHWISTlcHNk34NgqO3t3eDz7tXgAh5PQfZ3Kgc_JMVG5JM6zOGeTiqoSUS0mqF6RTGBFnzxl3xGo4417m0GP5rEw7Lc7xsg_M6bRww12M45YzGX1YuX5TBRZ3M9Ptw=w412-h618-s-no?authuser=0',descripcion: 'Americano',precio: '17 Kiwy Pesos',},
    {imgSrc: 'https://lh3.googleusercontent.com/pw/AP1GczMT7k9NOWYd3JTskhMcu2PMIywHtWU75kTtfCgYIOPAvaH76YoTPxZvXtDxrNiCf8GPMiX_CfEzRxYeKi4p9nOrcCa1Neg5Suh56Ewo_dqD6Z7lFyb-dt74HWutMzUmCT4CzSVNiJRD5aH0FGaWIQdSlw=w412-h618-s-no?authuser=0',descripcion: 'Mocha',precio: '21 Kiwy Pesos',},
    {imgSrc: 'https://lh3.googleusercontent.com/pw/AP1GczNKVe8jKzBma3llzRrXWB9R5x0VDxV3ggzNLa9XDspJGPL2ofFXbSnsuOqXizpLiAuF-xy7UxRa2bJe3SVOIFuf3Wgf8i9fxQJYyyIvOD1xWH2EqbRT1ZgsaGK-ifu-jo4IMJ2LIg14Kic2twdoRtN1rA=w412-h618-s-no?authuser=0',descripcion: 'Café Cortado',precio: '16 Kiwy Pesos',},
    {imgSrc: 'https://lh3.googleusercontent.com/pw/AP1GczPryj6q0-2TR7as6QekzEj-3JlBbSH24AdC_VMJNOzPYniiNl2JGFkosVjdy-Q6Z2PPXr7M_0tWtBFVcAFOuinfoel95Y6Rwb-zaud2w8bezstTbmHMkbf5T9lU-Ok4cWWEYPHRCo9GCDPuq0DKVmTaJQ=w412-h618-s-no?authuser=0',descripcion: 'Café Fuerte',precio: '22 Kiwy Pesos',},
    {imgSrc: 'https://lh3.googleusercontent.com/pw/AP1GczN-iT2E8iX8ylHChQYZxFV3faE-mmEi-z9wUaKfIdsBeZFdXxmCBTD9XLulIoDnqEO9asK5EjOVK-8bT0rSB2hsL6s3mUnyFki0wlBoZwEMLqE0dybo1_KD3-t69QxXXRWnAEV9hPcs4j-89W0w2oBxzQ=w412-h618-s-no?authuser=0',descripcion: 'Galleta de Chocolate',precio: '12 Kiwy Pesos',},
    {imgSrc: 'https://lh3.googleusercontent.com/pw/AP1GczNJMG9122b5dKczEcTO1kWtlJ0hP4XD2diDbuqFM89GpOhzPvFR8-1XOBjZZZ_ve9CBuiiwnp1eK_Ch3-3Y2xbH_NR1H6KA5iDPHpuTv9EFHNNCL9BaEvdEaCBEc93DKbb9T7lJk3yeLeY3rxPV4UH-pA=w412-h618-s-no?authuser=0',descripcion: 'Scone de Glaseado',precio: '10 Kiwy Pesos',},
    {imgSrc: 'https://lh3.googleusercontent.com/pw/AP1GczO3eg7v09JUBY0-8jLVhjhtgPMeLVsQ8I_BFF1fwU3Bpk_-_mg7VxQ__hBsvSHXbD3pCopCOH8-JAs38Z4NsUDoQWTIXiLWrpmifvUTRokWt9GKakDoAXm88ouGMwb5crtGzk1ZPVkRtXWS1T_Rz48__g=w412-h618-s-no?authuser=0',descripcion: 'Postre especial de Queso',precio: '16 Kiwy Pesos',},
    {imgSrc: 'https://lh3.googleusercontent.com/pw/AP1GczPn3hdzvUSs-4dOG9U6bxmkF62XnzCEp36w-E_sv5xLgPqK_XI9NbsV8rhrZmz3J3ultEQ0JhSGWGOptDR-MdSIujaohLsEgYDFl9mT_hRK6Tzjdj7MiSeTvGKE3LM14u9sl2GwtsZDhMvr0gPS6noWCg=w412-h618-s-no?authuser=0',descripcion: 'Croissant con Chocolate',precio: '11 Kiwy Pesos',},
    {imgSrc: 'https://lh3.googleusercontent.com/pw/AP1GczN7Srkgrn50wSuk9k0V4QtTTH6kWOOSgOFppi9wiQ7VfxyD5tioJGPMRyazX8TyEVxO12apTiJbW7gGVKJ0NhWNS-94FMgYSWEH8tEuMvxU8UlS0mkYFUoXYQ5tBOoNQwp8nrsrtKtcUak0TZBATvcP_g=w412-h618-s-no?authuser=0',descripcion: 'Porción de Pastel',precio: '12 Kiwy Pesos',},
    {imgSrc: 'https://lh3.googleusercontent.com/pw/AP1GczMFywWaQSOxjs8QExOZCGRS_kKnbrO2eYAR2ZAHU3MmmPtJdAhKaAv6vqEDHvBxYGNKq5A8R4w2sWiPRkh3V_z1YZvJwMOvB4s9ZXQDd79YQSdXIHdkxMDrkVESngS0AiZRPKv3FGmOSyItlrop0Rjwbg=w412-h618-s-no?authuser=0',descripcion: 'Muffin especial',precio: '10 Kiwy Pesos',},
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
          <img src="https://lh3.googleusercontent.com/pw/AP1GczORkP3C1O7JFgTPLst560fxdVHHETAE2qRcFbfYOh-jl9DALDd3t4oNfL0O76LaHKudNnDAUa9zaUwMLbgN5R04V7F_Avt8p2yoIM0S434y5aV1viC9krXtlGS_g-2e63Sf_8x1wBJxPEJ2At0EuciHvA=w412-h618-s-no?authuser=0" alt="vendedor" />
        </div>
      </section>
    </div>
    </main>
  );
};

export default CoffePage;
