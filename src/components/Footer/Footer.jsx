
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faAnglesUp } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    return <>
    <footer>
        <a className="arriba"href="#inicio" id="mydate-link" onClick={() => {}}><FontAwesomeIcon icon={faAnglesUp} size="1x" className="icono"  /></a>
        <div className='redes'>
            <a href="/" className="nav-link-custom" rel="noreferrer"><FontAwesomeIcon icon={faHouse} size="1x" className="icono" /></a>
            <a href="https://github.com/kiwy36" target="_blank" className="nav-link-custom" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="1x" className="icono" /></a>
            <a href="https://www.instagram.com/kiwy_92/" target="_blank"className="nav-link-custom" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size="1x" className="icono" /></a>
            <a href="https://www.linkedin.com/in/kevin-wittner-063960181/"target="_blank" className="nav-link-custom" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size="1x" className="icono" /></a>
        </div>
    </footer>
    </>
};

export default Footer;