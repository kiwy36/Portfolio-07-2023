import { useRef,useEffect } from 'react';
import './MyDate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faCameraRetro, faMusic, faBook, faPersonHiking, faSchoolCircleCheck, faPaperPlane, faFilm} from '@fortawesome/free-solid-svg-icons';

const MyDate = () => {
    const mydateRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (mydateRef.current) {
            mydateRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };
        const mydateLink = document.getElementById('mydate-link');
        mydateLink.addEventListener('click', handleScroll);
        return () => {
            mydateLink.removeEventListener('click', handleScroll);
        };
        }, []);
    return (
        <>
            <section id='sobreMi' className='sobreMi'ref={mydateRef}>
                <div className='contenido-seccion'>
                    <h2>Sobre mi</h2>
                    <p><span>Hola, soy Kevin</span>, soy una persona comprometida con la investigación y la expansión de mis conocimientos. Disfruto de la lectura de novelas de policiales, suspenso, ciencia ficción y fantasía. Además, encuentro inspiración en la fotografía de paisajes y las caminatas por la naturaleza. Me divierto jugando, escuchando música y explorando series y películas de diferentes géneros. También tengo habilidades en el arte del origami. En resumen, soy un individuo dedicado a la exploración intelectual y a la apreciación de diversas formas de entretenimiento y expresión artística.</p>
                    <div className='fila'>
                        <div className='col'>
                            <h3>Datos personales</h3>
                            <ul>
                                <li>
                                    <strong>Cumpleaños:</strong> 9 de Marzo
                                </li>
                                <li>
                                    <strong>Numero de contacto:</strong> +542942639953
                                </li>
                                <li>
                                    <strong>Email:</strong> kevinWittner92@gmail.com
                                </li>
                                <li>
                                    <strong>Lugar de residencia:</strong> Argentina, Rio Negro, S.C de Bariloche.
                                </li>
                                <li>
                                    <strong>Cargo: </strong>
                                    <span>FREELANCE</span>
                                </li>
                            </ul>
                        </div>
                        <div className='col'>
                            <h3>Intereses</h3>
                            <div className='contenedor-intereses'>
                                <div className='intereses'>
                                    <FontAwesomeIcon className='icono' icon={faGamepad} /><span>Juegos</span>
                                </div>
                                <div className='intereses'>
                                    <FontAwesomeIcon className='icono' icon={faCameraRetro}/><span>Fotografia</span>
                                </div>
                                <div className='intereses'>
                                    <FontAwesomeIcon className='icono' icon={faMusic} /><span>Musica</span>
                                </div>
                                <div className='intereses'>
                                    <FontAwesomeIcon className='icono' icon={faBook} /><span>Lectura</span>
                                </div>
                                <div className='intereses'>
                                    <FontAwesomeIcon className='icono' icon={faPersonHiking} /><span>Trekking</span>
                                </div>
                                <div className='intereses'>
                                    <FontAwesomeIcon className='icono' icon={faSchoolCircleCheck} /><span>Investigar</span>
                                </div>
                                <div className='intereses'>
                                    <FontAwesomeIcon className='icono' icon={faPaperPlane} /><span>Origami</span>
                                </div>
                                <div className='intereses'>
                                    <FontAwesomeIcon className='icono' icon={faFilm} /><span>Series</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyDate
