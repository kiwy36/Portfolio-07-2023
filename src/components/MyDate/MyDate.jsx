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
                                    <strong>Teléfono personal:</strong> +542942639953
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
                                    <img src='https://styles.redditmedia.com/t5_5blkvq/styles/communityIcon_t5ji6wuld2z71.jpg?format=pjpg&s=1672be49333cd14749784be8bbc3c968a033d8e0' alt='Coderhouse' className='imagen-formacion'/>
                                    <span>Coderhouse</span>
                                </div>
                                <div className='formacion'>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNYTD_c3R-RiaovcMfyILWQy8UN36uPtECbiCJGQcGWGPZDhDCC8OFrDxf0-1HmPwSBm0&usqp=CAU' alt='Codo a Codo' className='imagen-formacion'/>
                                    <span>Codo a Codo</span>
                                </div>
                                <div className='formacion'>
                                    <img src='https://i.ibb.co/YdyG5Hy/aut.jpg' alt='Autodidacta' className='imagen-formacion'/>
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
