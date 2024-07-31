import { useRef,useEffect } from 'react';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn  } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

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
            <section id='inicio'  className='inicio'ref={bannerRef}>
                <div className='contenido-banner'>
                    <div className='contenedor-img'>
                        <img src="https://lh3.googleusercontent.com/pw/AP1GczNU_AaWZZs-AAbLTLDkTO-ClwQ4i6ZEAUP0K-c2L4pXH3ohAJ_XrBqzU_qJ6gQlJsHdeX5Vg7tcnCHojbnyb2jIlpGPNFL6xyMP__MarKA0T2y87VCN7ZcwsTpbbv-FUI7BbDjjqlCuxTBJM1ZuWK_Gpw=w612-h612-s-no?authuser=0" alt='imgportada' loading="lazy" />
                    </div>
                    <h1>WITTNER KEVIN</h1>
                    <h2>Desarrollador Front-end</h2>
                    <div className='redes'>
                        <Link to="https://github.com/kiwy36" target="_blank" className="nav-link-custom" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="1x" className="icono" /></Link>
                        <Link to="https://www.instagram.com/kiwy_92/" target="_blank"className="nav-link-custom" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size="1x" className="icono" /></Link>
                        <Link to="https://www.linkedin.com/in/kevin-wittner-063960181/"target="_blank" className="nav-link-custom" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size="1x" className="icono" /></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
