import './Proyectos.css';
import { useRef,useEffect } from 'react';

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
                        <img src='https://i.ibb.co/kgQ4fXq/memorama.png'alt='dino-memo'/>
                        <div className='overlay'>
                            <h3>Memorama Saurio</h3>
                            <p>Gana el juego en menos de 100 movimientos y 120 segundos!!!</p>
                            <a className='start-button' target="_blank" rel="noreferrer" href='/memorama'>Play</a>
                        </div>
                    </div>
                    <div className='proyecto'>
                        <img src='https://i.ibb.co/ssfsG64/dino-duelo.png'alt='dino-cards'/>
                        <div className='overlay'>
                            <h3>Dino Duelo</h3>
                            <p>Juego de cartas donde competiras contra la pc para ver quien tiene mas puntos</p>
                            <a className='start-button' target="_blank" rel="noreferrer" href='/batlegame'>Play</a>
                        </div>
                    </div>
                    <div className='proyecto'>
                        <img src='https://i.ibb.co/3T4t0Y1/ecommerce.png'alt='tienda'/>
                        <div className='overlay'>
                            <h3>Tienda de Indumentaria</h3>
                            <p>Simulador de tienda de compras interactiva</p>
                            <a className='start-button' target="_blank" rel="noreferrer" href='/EcommerceCap'>Ver</a>
                        </div>
                    </div>
                    <div className='proyecto'>
                        <img src='https://i.ibb.co/4RJBtNb/cafestore.png'alt='bannercafe'/>
                        <div className='overlay'>
                            <h3>Cafeteria Steampunk</h3>
                            <p>Simulador de la pagina publicitaria de una cafeteria</p>
                            <a className='start-button' target="_blank" rel="noreferrer" href='/Coffepage'>Ver</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proyectos