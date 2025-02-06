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
                        <img src='https://lh3.googleusercontent.com/pw/AP1GczM3xbM19DdQ2OKwstfk6xqHeeKW-AKh255qKtIiX5-vvCidPqcsE_AWOTigG-hTk0ecPhGQdYxn189naHL4vUMLM9o87IVmWRoU6rYAyuPjhvbX8pq2u-CtiamIBRNHvgKI-DhMKCdLR2WGEISA9EHUeQ=w1081-h618-s-no?authuser=0'alt='dino-memo' loading="lazy"/>
                        <div className='overlay'>
                            <h3>Memorama Saurio</h3>
                            <p>Gana el juego en menos de 100 movimientos y 120 segundos!!!</p>
                            <Link className='start-button' target="_blank" rel="noreferrer"  to='/memorama'>Play</Link>
                        </div>
                    </div>
                    <div className='proyecto'>
                        <img src='https://lh3.googleusercontent.com/pw/AP1GczNOuO4MQ1i_eht9mgwCmi45FKqUMXFd5hBAeMrpI1FtgOB3vx_AqSJDsnZvyw7mJNb0I-nV7SKX11LvKvzKr338qtAOuirpoPdft939GBLEiBtkVNxKTDd5GJbOHRKwIHGTD9s1wFFhczKEHVGrSBx_Ug=w1095-h618-s-no?authuser=0'alt='dino-cards' loading="lazy"/>
                        <div className='overlay'>
                            <h3>Dino Duelo</h3>
                            <p>Juego de cartas donde competiras contra la pc para ver quien tiene mas puntos</p>
                            <Link className='start-button' target="_blank" rel="noreferrer" to='/batlegame'>Play</Link>
                        </div>
                    </div>
                    <div className='proyecto'>
                        <img src='https://lh3.googleusercontent.com/pw/AP1GczMHek8O-4lg2EktoX6JgLSMVVKTIwZX7Y0Hteu-tS5XS2c9YugD13LriQI3R_X6coi-q7AzM3M1ovMyvnKnKiuvo3NQQgSljf5ab9yeDKkClkBSchEKoLJKOeTeEoYVPoawf8PG49OQ0hwQbo0uBw2VTg=w1088-h618-s-no?authuser=0'alt='tienda' loading="lazy"/>
                        <div className='overlay'>
                            <h3>Tienda de Indumentaria</h3>
                            <p>Simulador de tienda de compras interactiva</p>
                            <Link className='start-button' target="_blank" rel="noreferrer" to='/EcommerceCap'>Ver</Link>
                        </div>
                    </div>
                    <div className='proyecto'>
                        <img src='https://lh3.googleusercontent.com/pw/AP1GczMqDpR83VWKs-YU4OU0ftyrMmIlq_wKpeUyrwq2KfSbxjc1HC445nA03StIHIz9wPMj22J6hBNJdJE1cYR2BNv67Rj_eYSqs6vFLi9WT4x6Xkyl9p59jQSNab1Is1g7VKAseMRag0kKfpb61Ds2fPG9yw=w1088-h618-s-no?authuser=0'alt='bannercafe' loading="lazy"/>
                        <div className='overlay'>
                            <h3>Cafeteria Steampunk</h3>
                            <p>Simulador de la pagina publicitaria de una cafeteria</p>
                            <Link className='start-button' target="_blank" rel="noreferrer" to='/Coffepage'>Ver</Link>
                        </div>
                    </div>
                    <div className='proyecto'>
                        <img src='https://lh3.googleusercontent.com/pw/AP1GczMVzX1Td-CWPAXmzNow7DjmaEnKlE-MzKJjO_wlonJoeWx27Y88RbWeluu7CA7yB3ew12hSogZ1aHNlYXkh0teMsKQdxuRsXu7nalf25uo7MXsShCXAErxw1TLwVnQHeKay8yQLqQXN_cORQ-8ZM8CCLg=w896-h296-s-no?authuser=0' alt='libreria banner' loading="lazy"/>
                        <div className='overlay'>
                            <h3>Librería de Elementos</h3>
                            <p>Ejemplos, Detalles e Instrucciones</p>
                            <Link className='start-button' target="_blank" rel="noreferrer" to='https://bookshop-teal.vercel.app/'>Ver</Link>
                        </div>
                    </div>
                    <div className='proyecto'>
                        <img src='https://lh3.googleusercontent.com/pw/AP1GczOUY01SmGEsvt_b2QEBwFngGGTOaPrDMmmcgaVZTZFm2j4azgC7SHfZDZScjtOz7mb3u6KHF00aYjmxshlmDcwTX57HiZoX5yIOd5HjxUJE1ooAOa_47RjzXpNbV1G1JKFRer3WbLIsWgLXOKUyK1EEFQ=w1316-h532-s-no?authuser=0' alt='tienda banner' loading="lazy"/>
                        <div className='overlay'>
                            <h3>All SPORT STORE</h3>
                            <p>Simulador de una tienda de ropa</p>
                            <Link className='start-button' target="_blank" rel="noreferrer" to='https://ca-c-r-b.vercel.app/'>Ver</Link>
                        </div>
                    </div>
                    <div className='proyecto'>
                        <img src='https://lh3.googleusercontent.com/pw/AP1GczMSe0CJ_9tcjB-xXELMyaEA9NvXFjj5Rcj2g5DcoUadj2NK4zZft0vFDGRCFXveaJu9O4iYKjR27KpNwyCErd_UuKl4CSO_5zlLNoPB1vSzn8525BEqdBqXxSBwuzffCMNEMhMGu6v1QBoYVXRm9Br1Yg=w668-h522-s-no?authuser=0' alt='tienda banner' loading="lazy"/>
                        <div className='overlay'>
                            <h3>GAP</h3>
                            <p>Gestor de almacenamiento de información de productos</p>
                            <Link className='start-button' target="_blank" rel="noreferrer" to='https://gap-two.vercel.app/'>Ver</Link>
                        </div>
                    </div>
                    <div className='proyecto proyectoSQL'>
                        <img src='https://i.ibb.co/zQSmVqz/sql.pnghttps://lh3.googleusercontent.com/pw/AP1GczM8m28XHmkW2Hw0vcoVaFz3WHATf-ACR9381LC4cP8kNNwAVWiJKzrYnzrwoy4OmzFFA5Pso-GXqtXaNiJEdEYmEMB_kb8TK6IzCiALtjwfn1H9ZGlS83VFLIEBIkD3x5Wfwj_W0KTf7TC7VNTAXrWZpw=w1336-h600-s-no?authuser=0' alt='tienda sql' loading="lazy"/>
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
                </div>
            </div>
        </section>
    )
}

export default Proyectos