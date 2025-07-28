import './Proyectos.css';
import { useRef,useEffect } from 'react';
import { Link } from 'react-router-dom';

const Proyectos = () => {
    const proyecRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (proyecRef.current) {
                proyecRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };
        const proyecLink = document.getElementById('proyec-link');
        proyecLink.addEventListener('click', handleScroll);
        return () => {
            proyecLink.removeEventListener('click', handleScroll);
        };
        }, []);
    return (
        <section id='portfolio'className='portfolio' ref={proyecRef}>
            <div className='contenido-seccion'>
                <h2>Proyectos</h2>
                <div className='galeria'>
                    <div className='proyecto'>
                        <img src='https://i.ibb.co/k6cqQ9xN/memorama.png'alt='dino-memo' loading="lazy"/>
                        <div className='overlay'>
                            <h3>Memorama Saurio</h3>
                            <p>Gana el juego en menos de 100 movimientos y 120 segundos!!!</p>
                            <Link className='start-button' target="_blank" rel="noreferrer"  to='/memorama'>Play</Link>
                        </div>
                    </div>
                    <div className='proyecto'>
                        <img src='https://i.ibb.co/B5sD51gw/dino-duelo.png'alt='dino-cards' loading="lazy"/>
                        <div className='overlay'>
                            <h3>Dino Duelo</h3>
                            <p>Juego de cartas donde competiras contra la pc para ver quien tiene mas puntos</p>
                            <Link className='start-button' target="_blank" rel="noreferrer" to='/batlegame'>Play</Link>
                        </div>
                    </div>
                    <div className='proyecto'>
                        <img src='https://i.ibb.co/q3dXzH5X/ecommerce.png'alt='tienda' loading="lazy"/>
                        <div className='overlay'>
                            <h3>Tienda de Indumentaria</h3>
                            <p>Simulador de tienda de compras interactiva</p>
                            <Link className='start-button' target="_blank" rel="noreferrer" to='/EcommerceCap'>Ver</Link>
                        </div>
                    </div>
                    <div className='proyecto'>
                        <img src='https://i.ibb.co/3904QCm4/cafestore.png'alt='bannercafe' loading="lazy"/>
                        <div className='overlay'>
                            <h3>Cafeteria Steampunk</h3>
                            <p>Simulador de la pagina publicitaria de una cafeteria</p>
                            <Link className='start-button' target="_blank" rel="noreferrer" to='/Coffepage'>Ver</Link>
                        </div>
                    </div>
                    <div className='proyecto'>
                        <img src='https://i.ibb.co/gqkM7vs/libreria.png' alt='libreria banner' loading="lazy"/>
                        <div className='overlay'>
                            <h3>Librería de Elementos</h3>
                            <p>Ejemplos, Detalles e Instrucciones</p>
                            <Link className='start-button' target="_blank" rel="noreferrer" to='https://bookshop-teal.vercel.app/'>Ver</Link>
                        </div>
                    </div>
                    <div className='proyecto'>
                        <img src='https://i.ibb.co/7xpKp17w/allsports.png' alt='tienda banner' loading="lazy"/>
                        <div className='overlay'>
                            <h3>All SPORT STORE</h3>
                            <p>Simulador de una tienda de ropa</p>
                            <Link className='start-button' target="_blank" rel="noreferrer" to='https://ca-c-r-b.vercel.app/'>Ver</Link>
                        </div>
                    </div>
                    <div className='proyecto'>
                        <img src='https://i.ibb.co/mrNMZcMt/gap.png' alt='tienda banner' loading="lazy"/>
                        <div className='overlay'>
                            <h3>GAP</h3>
                            <p>Gestor de almacenamiento de información de productos</p>
                            <Link className='start-button' target="_blank" rel="noreferrer" to='https://gap-two.vercel.app/'>Ver</Link>
                        </div>
                    </div>
                    <div className='proyecto proyectoSQL'>
                        <img src='https://i.ibb.co/LddByfht/sql.png' alt='tienda sql' loading="lazy"/>
                        <div className='overlay'>
                            <h3>Tienda simulator a base de SQL</h3>
                            <p>Proyecto en vías de desarrollo</p>
                            <Link className='start-button' target="_blank" rel="noreferrer" to='https://ca-c-backend.vercel.app/index.html'>Ver</Link>
                        </div>
                    </div>
                    <div className='proyecto'>
                        <img src='https://i.ibb.co/QvCTZrHb/av-esp.png' alt='Journey space' loading="lazy"/>
                        <div className='overlay'>
                            <h3>Journey space</h3>
                            <p>Mini juego incursionando con Ts</p>
                            <Link className='start-button' target="_blank" rel="noreferrer" to='https://ts-p.vercel.app/'>Ver</Link>
                        </div>
                    </div>
                    <div className='proyecto'>
                        <img src='https://i.ibb.co/209ygBTG/memory.png' alt='Journey space' loading="lazy"/>
                        <div className='overlay'>
                            <h3>Memory Game</h3>
                            <p>Esto es parte de Arg. Programa</p>
                            <Link className='start-button' target="_blank" rel="noreferrer" to='https://memory-game-seven-beige.vercel.app/'>Ver</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proyectos