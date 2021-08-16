import React from "react";
import { Parallax } from "react-parallax"
import { FaFacebook, FaGithub, FaEnvelope, FaInstagram, FaLinkedin, FaCopyright } from 'react-icons/fa';
import './App.css';

const image3 = "/images/Screenshot_20201029_233112.jpg"
const CurrentYear = new Date().getFullYear()
function Contact() {
    return (
        <div className="Contact">
            <Parallax bgImage={image3} >
                <div style={{ color: `#fff`, margin: 0, backgroundColor: 'black', opacity: '0.8' }}>
                    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <h1 style={{ margin: 0 }}>Contact</h1>
                            <hr />
                            <p id="contactStatement" style={{
                                // fontSize: '1.8rem',
                                fontWeight: 'lighter', padding: '1rem', margin: '0 auto', width: '80%', textAlign: 'left'
                            }}>If you would like more information regarding purchasing or commissioning of paintings or software development, contact me at the e-mail link below.
                                Also follow me on social media for more painting and software development related content. </p>
                        </div>
                        <div>
                            <hr />
                            <footer style={{ height: '25vh', marginBottom: '0' }}>
                                <ul style={{ display: 'flex', color: `#fff`, backgroundColor: 'black', opacity: '0.8' }}>
                                    <a rel="noreferrer" target="_blank" href="mailto: jcoffeymay6@gmail.com"><li style={{ marginLeft: '-3rem' }} className="contact-li "><FaEnvelope size={50} /></li></a>
                                    <a rel="noreferrer" target="_blank" href="https://github.com/Coffey-May"><li style={{ marginLeft: '-3rem' }} className=" contact-li"><FaGithub size={50} /></li></a>
                                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jonathan-coffey-may/"> <li style={{ marginLeft: '-3rem' }} className="contact-li"><FaLinkedin size={50} /></li></a>
                                    <a rel="noreferrer" target="_blank" href="https://www.instagram.com/coffeymay1/"><li style={{ marginLeft: '-3rem' }} className="contact-li"><FaInstagram size={50} /></li></a>
                                    <a rel="noreferrer" target="_blank" href="https://m.facebook.com/coffey.may.7"><li style={{ marginLeft: '-3rem' }} className="contact-li"><FaFacebook size={50} /></li></a>
                                </ul>
                                <p ><FaCopyright /> COPYRIGHT{CurrentYear}</p>
                            </footer>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div >
    );
}

export default Contact;

