import './Inbox.css';
import { useRef,useEffect,useState} from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Inbox = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const contacRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (contacRef.current) {
                contacRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };
        const contacLink = document.getElementById('contacto-link');
        contacLink.addEventListener('click', handleScroll);
        return () => {
            contacLink.removeEventListener('click', handleScroll);
        };
        }, []);
        const form = useRef();
        const sendEmail = (e) => {
            e.preventDefault();
            if (validateForm()) {
                emailjs
                .sendForm('service_putdbkv', 'template_pbm0892', form.current, 'KQwcBmV5effjIrqix')
                .then(() => {
                    Swal.fire('¡Mensaje enviado!');
                    form.current.reset();
                })
                .catch((error) => {
                    console.log(error.text);
                    Swal.fire('Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
                });
            }
        };
        const validateForm = () => {
            const inputs = form.current.querySelectorAll('input, textarea');
            for (const input of inputs) {
                if (!input.value) {
                    setErrorMessage(`Falto completar: ${input.placeholder}`);
                    return false;
                }
            }
            setErrorMessage('');
            return true;
        };
    return (
        <section id='contacto' className='contacto' ref={contacRef}>
            <div className='contenido-seccion'>
                <h2>Contacto</h2>
                <div className='fila'>
                    <div className='col'>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type='text' name="user_name" placeholder='Nombre'/>
                            <input type='text' name="user_email" placeholder='Dirección de correo'/>
                            <input type='text' name="subject" placeholder='Tema'/>
                            <textarea name="message" id='' cols="30" rows='10' placeholder='Mensaje'/>
                            {errorMessage && <p className='inbox-incompleto' >{errorMessage}</p>}
                            <button type="submit" value="Send">Enviar Mensaje
                                <FontAwesomeIcon className='icon-sobre' icon={faEnvelope} size='xl' />
                                <div className='overlay'></div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inbox