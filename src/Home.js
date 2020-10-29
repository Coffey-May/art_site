import React from "react";
import { Parallax } from "react-parallax"

const image1 = "/images/PChinatownbangkok.jpeg"


const inline = {
    color: '#fff',
    left: '50%',
    top: '50%',
    position: 'absolute'
}

function Home() {
    return (
        <div className="Home">
            <Parallax id="bg1" bgImage={image1} strength={500}>
                <div style={{ height: 500, backgroundColor: 'black', opacity: '0.5' }}>
                    <div style={inline}>jdbfk</div>
                </div>
            </Parallax>
            <div style={{ height: '100vh' }}></div>
        </div >
    );
}

export default Home;
