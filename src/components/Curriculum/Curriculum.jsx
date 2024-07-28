import './Curriculum.css';
import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, faMicrochip, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faNodeJs, faWordpress, faCss3Alt, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

const Curriculum = () => {
    const curriculumRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (curriculumRef.current) {
                curriculumRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };
        const curriculumLink = document.getElementById('curriculum-link');
        curriculumLink.addEventListener('click', handleScroll);
        return () => {
            curriculumLink.removeEventListener('click', handleScroll);
        };
    }, []);

    return (
        <section id='curriculum' className='curriculum' ref={curriculumRef}>
            <div className='contenido-seccion'>
                <h1 className='title-cv'>Mis Skills de Programación</h1>
                <div className='flex-container'>
                    <div className='flex-item'>
                        <h1 className='title-item'>HTML & CSS</h1>
                        <p className='info-cv'>
                            Habilidades en maquetación web, creación de estructuras semánticas y diseño responsivo utilizando HTML5 y CSS3.
                        </p>
                        <div className='icon-container-htmlcss'>
                            <FontAwesomeIcon icon={faHtml5} className='icon-html-css' />
                            <FontAwesomeIcon icon={faCss3Alt} className='icon-html-css' />
                        </div>
                    </div>
                    <div className='flex-item'>
                        <h1 className='title-item'>JavaScript</h1>
                        <p className='info-cv'>
                            Experiencia en la programación con JavaScript para crear interactividad en sitios web, utilizando ES6+.
                        </p>
                        <div className='icon-container'>
                            <FontAwesomeIcon icon={faJs} className='icon' />
                        </div>
                    </div>
                    <div className='flex-item'>
                        <h1 className='title-item'>React</h1>
                        <p className='info-cv'>
                            Desarrollo de aplicaciones web dinámicas y SPA con React, incluyendo el manejo de estado y efectos.
                        </p>
                        <div className='icon-container'>
                            <FontAwesomeIcon icon={faReact} className='icon' />
                        </div>
                    </div>
                    <div className='flex-item'>
                        <h1 className='title-item'>Inteligencia Artificial</h1>
                        <p className='info-cv'>
                            Introducción a conceptos básicos de IA, incluyendo aprendizaje automático y procesamiento del lenguaje natural.
                        </p>
                        <div className='icon-container'>
                            <FontAwesomeIcon icon={faMicrochip} className='icon' />
                        </div>
                    </div>
                    <div className='flex-item'>
                        <h1 className='title-item'>Node.js</h1>
                        <p className='info-cv'>
                            Creación de servidores y APIs RESTful utilizando Node.js y Express, incluyendo la gestión de rutas y middleware.
                        </p>
                        <div className='icon-container'>
                            <FontAwesomeIcon icon={faNodeJs} className='icon'  />
                        </div>
                    </div>
                    <div className='flex-item'>
                        <h1 className='title-item'>Bases de Datos</h1>
                        <p className='info-cv'>
                            Conocimientos en MySQL para el diseño, creación y gestión de bases de datos relacionales. Actualmente, estoy desarrollando mis habilidades.
                        </p>
                        <div className='icon-container'>
                            <FontAwesomeIcon icon={faDatabase} className='icon' />
                        </div>
                    </div>
                    <div className='flex-item'>
                        <h1 className='title-item'>Diseño UI/UX</h1>
                        <p className='info-cv'>
                            Experiencia en el diseño de interfaces de usuario intuitivas y atractivas, y en la creación de experiencias de usuario optimizadas.
                        </p>
                        <div className='icon-container'>
                            <FontAwesomeIcon icon={faComputer} className='icon' />
                        </div>
                    </div>
                    <div className='flex-item'>
                        <h1 className='title-item'>WordPress</h1>
                        <p className='info-cv'>
                            Desarrollo y gestión de sitios web con WordPress, incluyendo la personalización de temas y plugins.
                        </p>
                        <div className='icon-container'>
                            <FontAwesomeIcon icon={faWordpress} className='icon' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Curriculum;
