import { useRef, useEffect } from 'react';
import './MyDate.css';

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
            <section id='sobreMi' className='sobreMi' ref={mydateRef}>
                <div className='contenido-seccion'>
                    <h2>Sobre mi</h2>
                    <p><span>Hola, </span>soy Kevin, mi aventura en el mundo de la programación comenzó en Coderhouse, donde empecé aprendiendo HTML y he avanzado hasta React. Mi curiosidad y pasión por la tecnología me llevaron a convertirme en autodidacta, ampliando mis conocimientos y habilidades a mi propio ritmo. Actualmente, estoy profundizando en el desarrollo Backend en el Campus Virtual de Codo a Codo, donde continúo desafiándome y creciendo profesionalmente. Soy una persona motivada por el aprendizaje continuo y siempre en busca de nuevos retos y oportunidades para expandir mis capacidades en el campo de la programación.</p>
                    <div className='fila'>
                        <div className='col'>
                            <h3>Datos personales</h3>
                            <ul>
                                <li>
                                    <strong>Github:</strong> kiwy36
                                </li>
                                <li>
                                    <strong>Email:</strong> kevinWittner92@gmail.com
                                </li>
                                <li>
                                    <strong>Nacionalidad:</strong> Argentina.
                                </li>
                                <li>
                                    <strong>Categoría: </strong>
                                    <span>Junior Developer</span>
                                </li>
                            </ul>
                        </div>
                        <div className='col'>
                            <h3>Lugares de Formación</h3>
                            <div className='contenedor-formacion'>
                                <div className='formacion'>
                                    <img src='https://i.ibb.co/mCMgZFps/community-Icon-t5ji6wuld2z71.jpg' alt='Coderhouse' className='imagen-formacion'/>
                                    <span>Coderhouse</span>
                                </div>
                                <div className='formacion'>
                                    <img src='https://i.ibb.co/FLLdw69k/images.jpg' alt='Codo a Codo' className='imagen-formacion'/>
                                    <span>Codo a Codo</span>
                                </div>
                                <div className='formacion'>
                                    <img src='https://i.ibb.co/TxxCzFj7/autodi.webp' alt='Autodidacta' className='imagen-formacion'/>
                                    <span>Autodidacta</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyDate;
