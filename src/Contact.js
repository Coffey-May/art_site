import React from "react";
import { Parallax } from "react-parallax"
import { FaFacebook, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';
import './App.css';

const image3 = "/images/Screenshot_20201029_233112.jpg"

function Contact() {
    return (


        <div className="Contact">

            <Parallax style={{ height: 900, }} bgImage={image3} strength={10}>

                <h1 style={{ color: `#fff`, margin: 0, backgroundColor: 'black', opacity: '0.8' }}>Contact</h1>



                {/* <ul style={{ display: 'flex', color: `#fff`, marginTop: '0', backgroundColor: 'black', opacity: '0.8', height: '100vh' }}>
                    <li></li>
                    <li></li>

                    <li></li>
                    <li></li>
                </ul> */}
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', color: `#fff`, marginTop: '0', backgroundColor: 'black', opacity: '0.8', height: '100vh' }}>
                    <div className="contact-div"><FaEnvelope size={32} /></div>
                    <div className="contact-div"><FaGithub /></div>
                    <div className="contact-div"><FaFacebook /></div>
                    <div className="contact-div"><FaInstagram /></div>

                </div>

            </Parallax>

        </div>

    );
}

export default Contact;

