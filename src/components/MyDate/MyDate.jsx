import { useRef,useEffect } from 'react';
import './MyDate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComputer, faPeopleGroup, faSchoolCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {faWordpress, faCss3Alt, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

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
                                    <strong>Natalicio:</strong> 9 de Marzo
                                </li>
                                <li>
                                    <strong>Teléfono personal:</strong> +542942639953
                                </li>
                                <li>
                                    <strong>Email:</strong> kevinWittner92@gmail.com
                                </li>
                                <li>
                                    <strong>Nacionalidad:</strong> Argentina.
                                </li>
                                <li>
                                    <strong>Cargo: </strong>
                                    <span>FREELANCE</span>
                                </li>
                            </ul>
                        </div>
                        <div className='col'>
                            <h3>Mis Habilidades</h3>
                            <div className='contenedor-intereses'>
                                <div className='intereses'>
                                    <FontAwesomeIcon className='icono' icon={faHtml5}/><span>Html</span>
                                </div>
                                <div className='intereses'>
                                    <FontAwesomeIcon className='icono' icon={faCss3Alt} /><span>Css</span>
                                </div>
                                <div className='intereses'>
                                    <FontAwesomeIcon className='icono' icon={faJs} /><span>Javascript</span>
                                </div>
                                <div className='intereses'>
                                    <FontAwesomeIcon className='icono' icon={faReact} /><span>React</span>
                                </div>
                                <div className='intereses'>
                                    <FontAwesomeIcon className='icono' icon={faComputer}/><span>UI/UX</span>
                                </div>
                                <div className='intereses'>
                                    <FontAwesomeIcon className='icono' icon={faWordpress} /><span>Wordpress</span>
                                </div>
                                <div className='intereses'>
                                    <FontAwesomeIcon className='icono' icon={faSchoolCircleCheck} /><span>Investigación</span>
                                </div>
                                <div className='intereses'>
                                    <FontAwesomeIcon className='icono' icon={faPeopleGroup} /><span>Teamwork</span>
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
