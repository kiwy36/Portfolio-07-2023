import { useRef,useEffect } from 'react';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn  } from '@fortawesome/free-brands-svg-icons';


const Banner = () => {
    const bannerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (bannerRef.current) {
            bannerRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };
        const bannerLink = document.getElementById('banner-link');
        bannerLink.addEventListener('click', handleScroll);
        return () => {
            bannerLink.removeEventListener('click', handleScroll);
        };
        }, []);
    return (
        <>
            <section id='inicio' className='inicio'ref={bannerRef}>
                <div className='contenido-banner'>
                    <div className='contenedor-img'>
                        <img src="https://i.ibb.co/RDrMSH6/banner-Img.png" alt='imgportada'/>
                    </div>
                    <h1>WITTNER KEVIN</h1>
                    <h2>Desarrollador Front-end</h2>
                    <div className='redes'>
                        <a href="https://github.com/kiwy36" target="_blank" className="nav-link-custom" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="1x" className="icono" /></a>
                        <a href="https://www.instagram.com/kiwy_92/" target="_blank"className="nav-link-custom" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size="1x" className="icono" /></a>
                        <a href="https://www.linkedin.com/in/kevin-wittner-063960181/"target="_blank" className="nav-link-custom" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size="1x" className="icono" /></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
