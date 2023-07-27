import './Curriculum.css';
import { useRef,useEffect } from 'react';

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
                <h1 className='title-cv'>Curriculum</h1>
                <div className='grid-container'>
                    <div className='grid-item'>
                    <h1 className='title-area'>Conocimientos</h1>
                    <div className='item'>
                        <h1 className='title-item'>Desarrollo web en <br/>CoderHouse 2022-2023</h1>
                        <p className='info-cv'>
                            Finalicé la Carrera de Desarrollo Frontend con React, adquiriendo habilidades en HTML, CSS y JavaScript para estructurar, estilizar e interactuar con páginas web. También me enfoqué en React, creando componentes modulares para una arquitectura más escalable.
                        </p>
                        <img className='imagen-item-cv' src='https://i.ibb.co/GkWD6xf/coder.jpg' alt='coderlogo'/>
                    </div>
                        <div className='item'>
                            <h1 className='title-item'>Autodidacta<br/>2022-2023</h1>
                            <p className='info-cv'>
                                Tengo conocimiento en manejo de librerías y utilización de
                                IA. Manejo el inglés técnico pero poco a nivel conversación.
                                Además, tengo experiencia en el diseño UX/UI en niveles
                                iniciales. Mi potencial está en constante
                                crecimiento.
                            </p>
                            <img className='imagen-item-cv' src='https://i.ibb.co/JHT6gJr/sause.jpg' alt='arbol'/>
                        </div>
                    </div>
                    <div className='grid-item'>
                    <h1  className='title-area'>Experiencia</h1>
                        <div className='item'>
                            <h1 className='title-item'>Atención al cliente<br/>2015-2023</h1>
                            <p className='info-cv'>
                                Trabajé en un kiosco donde me encargaba de la recepción de
                                clientes, el manejo de caja y la reposición de mercadería.
                                Durante mi tiempo allí, aprendí a trabajar en equipo y a
                                brindar un servicio al cliente excepcional.
                            </p>
                            <img className='imagen-item-cv' src='https://i.ibb.co/Fs8JD0Q/kiosco.png' alt='kiosko'/>
                        </div>
                        <div className='item'>
                            <h1 className='title-item'>Independiente<br/>2023-2023</h1>
                            <p className='info-cv'>
                                Mis proyectos anteriores comprenden galerías, ecommerce y
                                mini juegos, todos ellos desarrollados durante mi etapa
                                estudiantil. Próximamente, en la sección de proyectos,
                                compartiré más información sobre ellos.
                            </p>
                            <img className='imagen-item-cv' src='https://i.ibb.co/h7dZhVz/pccodi.pngpe' alt='archivos'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Curriculum