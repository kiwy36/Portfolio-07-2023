import './Skills.css';
import { useRef,useEffect } from 'react';

const Skills = () => {
    const skillsRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (skillsRef.current) {
            skillsRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };
        const skillsLink = document.getElementById('skills-link');
        skillsLink.addEventListener('click', handleScroll);
        return () => {
            skillsLink.removeEventListener('click', handleScroll);
        };
        }, []);
    function efectoHabilidades(){
        let skills = document.getElementById("skills");
        let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
        if(distancia_skills >=300){
            let habilidades = document.getElementsByClassName("progreso");
            habilidades[0].classList.add("javascript");
            habilidades[1].classList.add("htmlccs");
            habilidades[2].classList.add("react");
            habilidades[3].classList.add("investigación");
            habilidades[4].classList.add("ingles");
            habilidades[5].classList.add("comunicacion");
            habilidades[6].classList.add("trabajo");
            habilidades[7].classList.add("dedicacion");
            habilidades[8].classList.add("aprendizaje");
            habilidades[9].classList.add("creatividad");
        }
    }
    window.onscroll = function(){
        efectoHabilidades();
    }
    return (
        <section className='skills' id='skills' ref={skillsRef}>
            <div className='contenido-seccion'>
                <h2>Skills</h2>
                <div className='fila'>
                    <div className='col'>
                        <h3>Professional Skills</h3>
                        <div className='skill'>
                            <span>Comunicacion</span>
                            <div className='barra-skill'>
                                <div className='progreso comunicacion'>
                                    <span>80%</span>
                                </div>
                            </div>
                        </div>
                        <div className='skill'>
                            <span>Trabajo en equipo</span>
                            <div className='barra-skill'>
                                <div className='progreso trabajo'>
                                    <span>80%</span>
                                </div>
                            </div>
                        </div>
                        <div className='skill'>
                            <span>Dedicación</span>
                            <div className='barra-skill'>
                                <div className='progreso dedicacion'>
                                    <span>90%</span>
                                </div>
                            </div>
                        </div>
                        <div className='skill'>
                            <span>Aprendizaje de nuevas tecnologías</span>
                            <div className='barra-skill'>
                                <div className='progreso aprendizaje'>
                                    <span>90%</span>
                                </div>
                            </div>
                        </div>
                        <div className='skill'>
                            <span>Creatividad</span>
                            <div className='barra-skill'>
                                <div className='progreso creatividad'>
                                    <span>60%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <h3>Technical Skills</h3>
                        <div className='skill'>
                            <span>Javascript</span>
                            <div className='barra-skill'>
                                <div className='progreso javascript'>
                                    <span>75%</span>
                                </div>
                            </div>
                        </div>
                        <div className='skill'>
                            <span>HTML & CSS</span>
                            <div className='barra-skill'>
                                <div className='progreso htmlccs'>
                                    <span>80%</span>
                                </div>
                            </div>
                        </div>
                        <div className='skill'>
                            <span>React</span>
                            <div className='barra-skill'>
                                <div className='progreso react'>
                                    <span>75%</span>
                                </div>
                            </div>
                        </div>
                        <div className='skill'>
                            <span>Investigación</span>
                            <div className='barra-skill'>
                                <div className='progreso investigación'>
                                    <span>80%</span>
                                </div>
                            </div>
                        </div>
                        <div className='skill'>
                            <span>Ingles</span>
                            <div className='barra-skill'>
                                <div className='progreso ingles'>
                                    <span>40%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills