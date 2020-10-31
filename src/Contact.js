import React from "react";
import { Parallax } from "react-parallax"

const image3 = "/images/Screenshot_20201029_233112.jpg"

function Contact() {
    return (


        <div className="Contact">
            <Parallax style={{ height: 900 }} bgImage={image3} strength={10}>
                <h1 style={{ color: `#fff`, margin: 0, height: 900, backgroundColor: 'black', opacity: '0.8' }}>Contact</h1>
            </Parallax>
        </div>

    );
}

export default Contact;

